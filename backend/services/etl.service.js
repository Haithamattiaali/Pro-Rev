const xlsx = require('xlsx');
const dbWrapper = require('../database/db-wrapper');
const db = require('../database/persistent-db');
const fs = require('fs').promises;

class ETLService {
  constructor() {
    this.monthMap = {
      'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4,
      'May': 5, 'Jun': 6, 'Jul': 7, 'Aug': 8,
      'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12
    };
  }

  async processExcelFile(filePath) {
    try {
      console.log('Processing Excel file:', filePath);
      
      // Read Excel file
      const workbook = xlsx.readFile(filePath);
      const results = {
        revenueData: null,
        salesPlan: null,
        opportunities: null,
        sheets: workbook.SheetNames
      };
      
      // Process each sheet
      for (let i = 0; i < workbook.SheetNames.length; i++) {
        const sheetName = workbook.SheetNames[i];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = xlsx.utils.sheet_to_json(worksheet);
        
        console.log(`Processing sheet: ${sheetName} (${jsonData.length} rows)`);
        
        // Determine sheet type based on name or position
        if (sheetName.toLowerCase().includes('revenue') || i === 0) {
          // Process as revenue data (existing logic)
          results.revenueData = await this.insertData(jsonData);
        } else if (sheetName.toLowerCase().includes('sales plan') || i === 1) {
          // Process as sales plan data
          results.salesPlan = await this.processSalesPlanData(jsonData);
        } else if (sheetName.toLowerCase().includes('opportunities') || i === 2) {
          // Process as opportunities data
          results.opportunities = await this.processOpportunitiesData(jsonData);
        }
      }
      
      // Clean up temp file if exists
      try {
        await fs.unlink(filePath);
      } catch (err) {
        console.log('Error deleting temp file:', err);
      }
      
      return results;
    } catch (error) {
      console.error('ETL process error:', error);
      throw error;
    }
  }

  async insertData(data) {
    let inserted = 0;
    let updated = 0;
    let errors = 0;
    
    // Check if data is empty
    if (!data || data.length === 0) {
      return {
        success: true,
        totalRecords: 0,
        inserted: 0,
        updated: 0,
        errors: 0,
        message: 'No data found in the uploaded file'
      };
    }
    
    // Use direct database access for transactions
    const transaction = db.transaction((records) => {
      // Prepare statement for better performance
      const stmt = db.db.prepare(`
        INSERT INTO revenue_data (
          customer, service_type, year, month,
          cost, target, revenue, receivables_collected, days,
          updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))
        ON CONFLICT(customer, service_type, year, month)
        DO UPDATE SET
          cost = excluded.cost,
          target = excluded.target,
          revenue = excluded.revenue,
          receivables_collected = excluded.receivables_collected,
          days = excluded.days,
          updated_at = datetime('now')
      `);
      
      for (const record of records) {
        try {
          // Validate and clean data
          const cleanedData = this.validateAndCleanRow(record);
          if (!cleanedData) {
            errors++;
            continue;
          }
          
          // Execute prepared statement
          const result = stmt.run(
            cleanedData.customer,
            cleanedData.service_type,
            cleanedData.year,
            cleanedData.month,
            cleanedData.cost,
            cleanedData.target,
            cleanedData.revenue,
            cleanedData.receivables_collected,
            cleanedData.days
          );
          
          if (result.changes > 0) {
            if (result.lastInsertRowid) inserted++;
            else updated++;
          }
        } catch (err) {
          console.error('Error processing row:', record, err);
          errors++;
        }
      }
    });
    
    try {
      // Execute transaction
      transaction(data);
      
      return {
        success: true,
        totalRecords: data.length,
        inserted,
        updated,
        errors
      };
    } catch (error) {
      console.error('Transaction failed:', error);
      throw error;
    }
  }

  validateAndCleanRow(row) {
    // Required fields
    if (!row.Customer || !row.Service_Type || !row.Year || !row.Month) {
      console.warn('Missing required fields:', row);
      return null;
    }
    
    const year = parseInt(row.Year) || new Date().getFullYear();
    const month = String(row.Month).trim();
    
    return {
      customer: String(row.Customer).trim(),
      service_type: String(row.Service_Type).trim(),
      year: year,
      month: month,
      cost: parseFloat(row.Cost) || 0,
      target: parseFloat(row.Target) || 0,
      revenue: parseFloat(row.Revenue) || 0,
      receivables_collected: parseFloat(row['Receivables Collected']) || 0,
      days: parseInt(row.Days) || 30  // Default to 30 days if not provided
    };
  }


  async getMonthNumber(monthName) {
    return this.monthMap[monthName] || 0;
  }

  async processSalesPlanData(data) {
    let inserted = 0;
    let updated = 0;
    let errors = 0;
    
    const transaction = db.transaction((records) => {
      const stmt = db.db.prepare(`
        INSERT INTO sales_plan_data (
          gl, month, year, service_type, baseline_forecast, opportunity_value, days,
          updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, datetime('now'))
        ON CONFLICT(gl, month, year, service_type)
        DO UPDATE SET
          baseline_forecast = excluded.baseline_forecast,
          opportunity_value = excluded.opportunity_value,
          days = excluded.days,
          updated_at = datetime('now')
      `);
      
      for (const record of records) {
        try {
          // Validate sales plan data
          const cleanedData = this.validateSalesPlanRow(record);
          if (!cleanedData) {
            errors++;
            continue;
          }
          
          const result = stmt.run(
            cleanedData.gl,
            cleanedData.month,
            cleanedData.year,
            cleanedData.service_type,
            cleanedData.baseline_forecast,
            cleanedData.opportunity_value,
            cleanedData.days
          );
          
          if (result.changes > 0) {
            if (result.lastInsertRowid) inserted++;
            else updated++;
          }
        } catch (err) {
          console.error('Error processing sales plan row:', record, err);
          errors++;
        }
      }
    });
    
    try {
      transaction(data);
      
      return {
        success: true,
        type: 'salesPlan',
        totalRecords: data.length,
        inserted,
        updated,
        errors
      };
    } catch (error) {
      console.error('Sales plan transaction failed:', error);
      throw error;
    }
  }
  
  validateSalesPlanRow(row) {
    // Required fields for sales plan
    if (!row.gl || !row.month || !row.year || !row.service_type) {
      console.warn('Missing required sales plan fields:', row);
      return null;
    }
    
    return {
      gl: String(row.gl).trim(),
      month: String(row.month).trim(),
      year: parseInt(row.year) || new Date().getFullYear(),
      service_type: String(row.service_type).trim(),
      baseline_forecast: parseFloat(row.baseline_forecast) || 0,
      opportunity_value: parseFloat(row.opportunity_value) || 0,
      days: parseInt(row.days) || 30  // Default to 30 days if not provided
    };
  }
  
  async processOpportunitiesData(data) {
    console.log('Processing opportunities data:', data.length, 'records');
    console.log('First record sample:', data[0]);
    
    let inserted = 0;
    let updated = 0;
    let errors = 0;
    
    const transaction = db.transaction((records) => {
      // First, clear existing opportunities to prevent duplicates
      db.db.prepare('DELETE FROM opportunities_data').run();
      
      const stmt = db.db.prepare(`
        INSERT INTO opportunities_data (
          project, service, location, scope_of_work, requirements,
          status, est_monthly_revenue, est_gp_percent,
          updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))
      `);
      
      // Track unique projects to prevent duplicates within the same upload
      const seenProjects = new Set();
      
      for (const record of records) {
        try {
          // Validate opportunities data
          const cleanedData = this.validateOpportunityRow(record);
          if (!cleanedData) {
            errors++;
            continue;
          }
          
          // Skip if we've already seen this project in this upload
          if (seenProjects.has(cleanedData.project)) {
            console.log(`Skipping duplicate project: ${cleanedData.project}`);
            continue;
          }
          
          seenProjects.add(cleanedData.project);
          
          const result = stmt.run(
            cleanedData.project,
            cleanedData.service,
            cleanedData.location,
            cleanedData.scope_of_work,
            cleanedData.requirements,
            cleanedData.status,
            cleanedData.est_monthly_revenue,
            cleanedData.est_gp_percent
          );
          
          if (result.changes > 0) {
            inserted++;
          }
        } catch (err) {
          console.error('Error processing opportunity row:', record, err);
          errors++;
        }
      }
    });
    
    try {
      transaction(data);
      
      return {
        success: true,
        type: 'opportunities',
        totalRecords: data.length,
        inserted,
        errors
      };
    } catch (error) {
      console.error('Opportunities transaction failed:', error);
      throw error;
    }
  }
  
  validateOpportunityRow(row) {
    // Helper function to get field value case-insensitively
    const getField = (obj, fieldName) => {
      // Try exact match first
      if (obj[fieldName] !== undefined) return obj[fieldName];
      
      // Try lowercase
      const lowerFieldName = fieldName.toLowerCase();
      if (obj[lowerFieldName] !== undefined) return obj[lowerFieldName];
      
      // Try to find key case-insensitively
      const key = Object.keys(obj).find(k => k.toLowerCase() === lowerFieldName);
      return key ? obj[key] : undefined;
    };
    
    // Required fields for opportunities
    const project = getField(row, 'Project');
    const service = getField(row, 'Service');
    
    if (!project || !service) {
      console.warn('Missing required opportunity fields:', row);
      return null;
    }
    
    // Parse GP percentage (remove % sign if present)
    let gpPercent = null;
    const gpField = getField(row, 'Est. GP%') || getField(row, 'est_gp_percent');
    if (gpField && String(gpField).trim() !== '') {
      const gpValue = parseFloat(String(gpField).replace('%', ''));
      if (!isNaN(gpValue)) {
        // If value is already decimal (like 0.28), use as is; otherwise convert percentage
        gpPercent = gpValue <= 1 ? gpValue : gpValue / 100;
      }
    }
    
    // Parse monthly revenue (remove commas)
    let monthlyRevenue = null;
    const revenueField = getField(row, 'Est. Monthly Revenue') || getField(row, 'est_monthly_revenue');
    if (revenueField && String(revenueField).trim() !== '') {
      const revenue = parseFloat(String(revenueField).replace(/,/g, ''));
      if (!isNaN(revenue)) {
        monthlyRevenue = revenue;
      }
    }
    
    return {
      project: String(project).trim(),
      service: String(service).trim(),
      location: getField(row, 'Location') ? String(getField(row, 'Location')).trim() : null,
      scope_of_work: getField(row, 'Scope of work') || getField(row, 'scope_of_work') ? String(getField(row, 'Scope of work') || getField(row, 'scope_of_work')).trim() : null,
      requirements: getField(row, 'Requirements') ? String(getField(row, 'Requirements')).trim() : null,
      status: getField(row, 'Status') ? String(getField(row, 'Status')).trim() : null,
      est_monthly_revenue: monthlyRevenue,
      est_gp_percent: gpPercent
    };
  }

  // Calculate period metrics
  async calculatePeriodMetrics(year, period = 'YTD') {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    
    let monthStart, monthEnd;
    
    switch (period) {
      case 'MTD':
        monthStart = currentMonth;
        monthEnd = currentMonth;
        break;
      case 'QTD':
        const currentQuarter = Math.ceil(currentMonth / 3);
        monthStart = (currentQuarter - 1) * 3 + 1;
        monthEnd = Math.min(currentQuarter * 3, currentMonth);
        break;
      case 'YTD':
      default:
        monthStart = 1;
        monthEnd = currentMonth;
        break;
    }
    
    const monthNames = Object.keys(this.monthMap).filter(
      name => {
        const num = this.monthMap[name];
        return num >= monthStart && num <= monthEnd;
      }
    );
    
    const sql = `
      SELECT 
        customer,
        service_type,
        SUM(cost) as total_cost,
        SUM(target) as total_target,
        SUM(revenue) as total_revenue,
        SUM(receivables_collected) as total_receivables,
        CASE 
          WHEN SUM(target) > 0 THEN (SUM(revenue) / SUM(target)) * 100 
          ELSE 0 
        END as achievement_percentage
      FROM revenue_data
      WHERE year = ? AND month IN (${monthNames.map(() => '?').join(',')})
      GROUP BY customer, service_type
    `;
    
    return await dbWrapper.all(sql, [year, ...monthNames]);
  }
}

module.exports = new ETLService();