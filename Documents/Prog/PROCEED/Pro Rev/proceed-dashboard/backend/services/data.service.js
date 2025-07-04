const db = require('../database/db-wrapper');

class DataService {
  constructor() {
    this.monthMap = {
      'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4,
      'May': 5, 'Jun': 6, 'Jul': 7, 'Aug': 8,
      'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12
    };
  }

  getPeriodMonths(year, period, month = null, quarter = null) {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    
    let monthStart, monthEnd;
    
    // For MTD, use the current month
    // For QTD/YTD, use all months up to current month
    const maxMonth = 12; // Allow all months since we have data for full year
    
    switch (period) {
      case 'MTD':
        // If specific month is provided, use it; otherwise use current month
        if (month && month !== 'all') {
          monthStart = month;
          monthEnd = month;
        } else if (month === 'all') {
          monthStart = 1;
          monthEnd = 12;
        } else {
          // Use current month for MTD
          monthStart = currentMonth;
          monthEnd = currentMonth;
        }
        break;
      case 'QTD':
        // If specific quarter is provided, use it; otherwise use current quarter
        let targetQuarter;
        if (quarter && quarter !== 'all') {
          targetQuarter = quarter;
        } else if (quarter === 'all') {
          monthStart = 1;
          monthEnd = 12;
          break;
        } else {
          // Use current quarter
          targetQuarter = Math.ceil(currentMonth / 3);
        }
        monthStart = (targetQuarter - 1) * 3 + 1;
        monthEnd = Math.min(targetQuarter * 3, currentMonth);
        break;
      case 'YTD':
      default:
        monthStart = 1;
        monthEnd = currentMonth; // YTD should be from Jan to current month
        break;
    }
    
    return Object.entries(this.monthMap)
      .filter(([name, num]) => num >= monthStart && num <= monthEnd)
      .map(([name]) => name);
  }

  async getOverviewData(year, period, month = null, quarter = null) {
    // Get validated months and validation info
    const validatedData = await this.getValidatedPeriodMonths(year, period, month, quarter);
    const months = validatedData.months;
    
    // If no valid months, return empty data with validation message
    if (months.length === 0) {
      return {
        period,
        year,
        overview: {
          revenue: 0,
          target: 0,
          cost: 0,
          receivables: 0,
          achievement: 0,
          customerCount: 0,
          serviceCount: 0,
          profit: 0,
          profitMargin: 0
        },
        serviceBreakdown: [],
      };
    }
    
    const placeholders = months.map(() => '?').join(',');
    
    const sql = `
      SELECT 
        SUM(revenue) as total_revenue,
        SUM(COALESCE(target, 0)) as total_target,
        SUM(COALESCE(original_target, target, 0)) as total_original_target,
        SUM(COALESCE(cost, 0)) as total_cost,
        SUM(COALESCE(original_cost, cost, 0)) as total_original_cost,
        SUM(receivables_collected) as total_receivables,
        COUNT(DISTINCT customer) as customer_count,
        COUNT(DISTINCT service_type) as service_count,
        CASE 
          WHEN SUM(COALESCE(target, 0)) > 0 THEN (SUM(revenue) / SUM(COALESCE(target, 0))) * 100 
          ELSE 0 
        END as achievement_percentage
      FROM revenue_data
      WHERE year = ? AND month IN (${placeholders})
    `;
    
    const overview = await db.get(sql, [year, ...months]);
    
    // Get service breakdown
    const serviceBreakdownSql = `
      SELECT 
        service_type,
        SUM(revenue) as revenue,
        SUM(target) as target,
        SUM(cost) as cost,
        CASE 
          WHEN SUM(target) > 0 THEN (SUM(revenue) / SUM(target)) * 100 
          ELSE 0 
        END as achievement_percentage
      FROM revenue_data
      WHERE year = ? AND month IN (${placeholders})
      GROUP BY service_type
      ORDER BY revenue DESC
    `;
    
    const serviceBreakdown = await db.all(serviceBreakdownSql, [year, ...months]);
    
    return {
      period,
      year,
      overview: {
        revenue: overview.total_revenue || 0,
        target: overview.total_target || 0,
        cost: overview.total_cost || 0,
        receivables: overview.total_receivables || 0,
        achievement: overview.achievement_percentage || 0,
        customerCount: overview.customer_count || 0,
        serviceCount: overview.service_count || 0,
        profit: (overview.total_target || 0) - (overview.total_cost || 0),
        profitMargin: overview.total_original_target > 0 
          ? (((overview.total_original_target || 0) - (overview.total_original_cost || 0)) / overview.total_original_target) * 100 
          : 0
      },
      serviceBreakdown
    };
  }

  async getBusinessUnitData(year, period, month = null, quarter = null) {
    // Get validated months
    const validatedData = await this.getValidatedPeriodMonths(year, period, month, quarter);
    const months = validatedData.months;
    
    if (months.length === 0) {
      return [];
    }
    
    const placeholders = months.map(() => '?').join(',');
    
    const sql = `
      SELECT 
        service_type as businessUnit,
        SUM(revenue) as revenue,
        SUM(target) as target,
        SUM(cost) as cost,
        SUM(COALESCE(original_target, target)) as original_target,
        SUM(COALESCE(original_cost, cost)) as original_cost,
        SUM(receivables_collected) as receivables,
        COUNT(DISTINCT customer) as customerCount,
        CASE 
          WHEN SUM(target) > 0 THEN (SUM(revenue) / SUM(target)) * 100 
          ELSE 0 
        END as achievement
      FROM revenue_data
      WHERE year = ? AND month IN (${placeholders})
      GROUP BY service_type
      ORDER BY revenue DESC
    `;
    
    const data = await db.all(sql, [year, ...months]);
    
    return data.map(unit => ({
      ...unit,
      profit: unit.target - unit.cost,
      profitMargin: unit.original_target > 0 ? ((unit.original_target - unit.original_cost) / unit.original_target) * 100 : 0
    }));
  }

  async getCustomerData(year, period, month = null, quarter = null) {
    // Get validated months
    const validatedData = await this.getValidatedPeriodMonths(year, period, month, quarter);
    const months = validatedData.months;
    
    if (months.length === 0) {
      return [];
    }
    
    const placeholders = months.map(() => '?').join(',');
    
    const sql = `
      SELECT 
        customer,
        SUM(revenue) as revenue,
        SUM(target) as target,
        SUM(cost) as cost,
        SUM(COALESCE(original_target, target)) as original_target,
        SUM(COALESCE(original_cost, cost)) as original_cost,
        SUM(receivables_collected) as receivables,
        GROUP_CONCAT(DISTINCT service_type) as services,
        COUNT(DISTINCT service_type) as serviceCount,
        CASE 
          WHEN SUM(target) > 0 THEN (SUM(revenue) / SUM(target)) * 100 
          ELSE 0 
        END as achievement
      FROM revenue_data
      WHERE year = ? AND month IN (${placeholders})
      GROUP BY customer
      ORDER BY revenue DESC
    `;
    
    const data = await db.all(sql, [year, ...months]);
    
    return data.map(customer => ({
      ...customer,
      profit: customer.target - customer.cost,
      profitMargin: customer.original_target > 0 ? ((customer.original_target - customer.original_cost) / customer.original_target) * 100 : 0,
      services: customer.services ? customer.services.split(',') : []
    }));
  }

  async getMonthlyTrends(year, serviceType = null) {
    let sql;
    let params = [year];
    
    if (serviceType) {
      sql = `
        SELECT 
          month,
          SUM(revenue) as revenue,
          SUM(target) as target,
          SUM(cost) as cost,
          SUM(receivables_collected) as receivables
        FROM revenue_data
        WHERE year = ? AND service_type = ?
        GROUP BY month
        ORDER BY 
          CASE month
            WHEN 'Jan' THEN 1 WHEN 'Feb' THEN 2 WHEN 'Mar' THEN 3
            WHEN 'Apr' THEN 4 WHEN 'May' THEN 5 WHEN 'Jun' THEN 6
            WHEN 'Jul' THEN 7 WHEN 'Aug' THEN 8 WHEN 'Sep' THEN 9
            WHEN 'Oct' THEN 10 WHEN 'Nov' THEN 11 WHEN 'Dec' THEN 12
          END
      `;
      params.push(serviceType);
    } else {
      sql = `
        SELECT 
          month,
          SUM(revenue) as revenue,
          SUM(target) as target,
          SUM(cost) as cost,
          SUM(receivables_collected) as receivables
        FROM revenue_data
        WHERE year = ?
        GROUP BY month
        ORDER BY 
          CASE month
            WHEN 'Jan' THEN 1 WHEN 'Feb' THEN 2 WHEN 'Mar' THEN 3
            WHEN 'Apr' THEN 4 WHEN 'May' THEN 5 WHEN 'Jun' THEN 6
            WHEN 'Jul' THEN 7 WHEN 'Aug' THEN 8 WHEN 'Sep' THEN 9
            WHEN 'Oct' THEN 10 WHEN 'Nov' THEN 11 WHEN 'Dec' THEN 12
          END
      `;
    }
    
    return await db.all(sql, params);
  }

  async getCustomerAchievement(year, period, month = null, quarter = null) {
    const months = this.getPeriodMonths(year, period, month, quarter);
    const placeholders = months.map(() => '?').join(',');
    
    const sql = `
      SELECT 
        customer,
        service_type,
        SUM(revenue) as revenue,
        SUM(target) as target,
        CASE 
          WHEN SUM(target) > 0 THEN (SUM(revenue) / SUM(target)) * 100 
          ELSE 0 
        END as achievement
      FROM revenue_data
      WHERE year = ? AND month IN (${placeholders})
      GROUP BY customer, service_type
      ORDER BY customer, service_type
    `;
    
    const data = await db.all(sql, [year, ...months]);
    
    // Group by customer
    const grouped = {};
    data.forEach(row => {
      if (!grouped[row.customer]) {
        grouped[row.customer] = {
          customer: row.customer,
          services: [],
          totalRevenue: 0,
          totalTarget: 0
        };
      }
      
      grouped[row.customer].services.push({
        serviceType: row.service_type,
        revenue: row.revenue,
        target: row.target,
        achievement: row.achievement
      });
      
      grouped[row.customer].totalRevenue += row.revenue;
      grouped[row.customer].totalTarget += row.target;
    });
    
    return Object.values(grouped).map(customer => ({
      ...customer,
      overallAchievement: customer.totalTarget > 0 
        ? (customer.totalRevenue / customer.totalTarget) * 100 
        : 0
    }));
  }

  async getCustomerServiceBreakdown(year, period, month = null, quarter = null) {
    const months = this.getPeriodMonths(year, period, month, quarter);
    const placeholders = months.map(() => '?').join(',');
    
    const sql = `
      SELECT 
        customer,
        service_type,
        SUM(revenue) as revenue
      FROM revenue_data
      WHERE year = ? AND month IN (${placeholders})
      GROUP BY customer, service_type
      ORDER BY customer, revenue DESC
    `;
    
    const data = await db.all(sql, [year, ...months]);
    
    // Group by customer
    const grouped = {};
    data.forEach(row => {
      if (!grouped[row.customer]) {
        grouped[row.customer] = {
          customer: row.customer,
          transportation: 0,
          warehouses: 0,
          total: 0
        };
      }
      
      if (row.service_type === 'Transportation') {
        grouped[row.customer].transportation = row.revenue;
      } else if (row.service_type === 'Warehouses') {
        grouped[row.customer].warehouses = row.revenue;
      }
      grouped[row.customer].total += row.revenue;
    });
    
    return Object.values(grouped);
  }

  async getAvailableYears() {
    const sql = `
      SELECT DISTINCT year 
      FROM revenue_data 
      ORDER BY year DESC
    `;
    
    const years = await db.all(sql);
    return years.map(row => row.year);
  }

  // Get gross profit data with pro-rated targets
  async getGrossProfitData(year, period, month = null, quarter = null) {
    // Get validated months
    const validatedData = await this.getValidatedPeriodMonths(year, period, month, quarter);
    const months = validatedData.months;
    
    if (months.length === 0) {
      return {
        period,
        year,
        grossProfit: 0,
        revenue: 0,
        cost: 0,
        target: 0,
        originalTarget: 0,
        achievement: 0,
        profitMargin: 0,
        serviceBreakdown: [],
      };
    }
    
    const placeholders = months.map(() => '?').join(',');
    
    // Get aggregated data with both target and original_target
    const sql = `
      SELECT 
        SUM(revenue) as total_revenue,
        SUM(COALESCE(cost, 0)) as total_cost,
        SUM(COALESCE(original_cost, cost, 0)) as total_original_cost,
        SUM(COALESCE(target, 0)) as total_target,
        SUM(COALESCE(original_target, target, 0)) as total_original_target,
        CASE 
          WHEN SUM(target) > 0 THEN (SUM(revenue) / SUM(target)) * 100 
          ELSE 0 
        END as achievement_percentage
      FROM revenue_data
      WHERE year = ? AND month IN (${placeholders})
    `;
    
    const data = await db.get(sql, [year, ...months]);
    
    // Get service type breakdown
    const serviceBreakdownSql = `
      SELECT 
        service_type,
        SUM(revenue) as revenue,
        SUM(cost) as cost,
        SUM(target) as target,
        SUM(COALESCE(original_target, target)) as original_target,
        SUM(COALESCE(original_cost, cost)) as original_cost,
        SUM(target) - SUM(cost) as profit,
        CASE 
          WHEN SUM(COALESCE(original_target, target)) > 0 
          THEN ((SUM(COALESCE(original_target, target)) - SUM(COALESCE(original_cost, cost))) / SUM(COALESCE(original_target, target))) * 100 
          ELSE 0 
        END as profit_margin,
        CASE 
          WHEN SUM(target) > 0 THEN (SUM(revenue) / SUM(target)) * 100 
          ELSE 0 
        END as achievement
      FROM revenue_data
      WHERE year = ? AND month IN (${placeholders})
      GROUP BY service_type
      ORDER BY revenue DESC
    `;
    
    const serviceBreakdown = await db.all(serviceBreakdownSql, [year, ...months]);
    
    // Calculate gross profit using original values for percentage, but pro-rated values for display
    const originalGrossProfit = (data.total_original_target || 0) - (data.total_original_cost || 0);
    const grossProfit = (data.total_target || 0) - (data.total_cost || 0);
    const profitMargin = data.total_original_target > 0 
      ? (originalGrossProfit / data.total_original_target) * 100 
      : 0;
    
    return {
      period,
      year,
      grossProfit,
      revenue: data.total_revenue || 0,
      cost: data.total_cost || 0,
      originalCost: data.total_original_cost || 0,
      target: data.total_target || 0,
      originalTarget: data.total_original_target || 0,
      achievement: data.achievement_percentage || 0,
      profitMargin,
      serviceBreakdown,
      proRating: {
        isProRated: data.total_target < data.total_original_target,
        proRatePercentage: data.total_original_target > 0 
          ? (data.total_target / data.total_original_target) * 100 
          : 100,
        costProRated: data.total_cost < data.total_original_cost,
        costProRatePercentage: data.total_original_cost > 0
          ? (data.total_cost / data.total_original_cost) * 100
          : 100
      }
    };
  }

  // Get analysis period validation for a specific year
  async getAnalysisPeriodValidation(year) {
    const sql = `
      SELECT 
        month,
        COUNT(CASE WHEN revenue > 0 THEN 1 END) as has_revenue,
        COUNT(CASE WHEN cost > 0 THEN 1 END) as has_cost,
        COUNT(CASE WHEN target > 0 THEN 1 END) as has_target,
        SUM(revenue) as total_revenue,
        SUM(cost) as total_cost,
        SUM(target) as total_target
      FROM revenue_data
      WHERE year = ?
      GROUP BY month
      ORDER BY 
        CASE month
          WHEN 'Jan' THEN 1 WHEN 'Feb' THEN 2 WHEN 'Mar' THEN 3
          WHEN 'Apr' THEN 4 WHEN 'May' THEN 5 WHEN 'Jun' THEN 6
          WHEN 'Jul' THEN 7 WHEN 'Aug' THEN 8 WHEN 'Sep' THEN 9
          WHEN 'Oct' THEN 10 WHEN 'Nov' THEN 11 WHEN 'Dec' THEN 12
        END
    `;
    
    const monthsData = await db.all(sql, [year]);
    
    // Analyze which months have complete data (revenue, cost, and target)
    const compliantMonths = [];
    const nonCompliantMonths = [];
    const missingDataDetails = {};
    
    monthsData.forEach(month => {
      const isCompliant = month.has_revenue > 0 && month.has_cost > 0 && month.has_target > 0;
      
      if (isCompliant) {
        compliantMonths.push(month.month);
      } else {
        nonCompliantMonths.push(month.month);
        
        const missing = [];
        if (month.has_revenue === 0 || month.total_revenue === 0) missing.push('revenue');
        if (month.has_cost === 0 || month.total_cost === 0) missing.push('cost');
        if (month.has_target === 0 || month.total_target === 0) missing.push('target');
        
        missingDataDetails[month.month] = missing;
      }
    });
    
    // Determine the analysis period boundaries
    let analysisPeriodStart = null;
    let analysisPeriodEnd = null;
    
    if (compliantMonths.length > 0) {
      // Find the first and last compliant months
      const monthNumbers = compliantMonths.map(m => this.monthMap[m]);
      analysisPeriodStart = compliantMonths[monthNumbers.indexOf(Math.min(...monthNumbers))];
      analysisPeriodEnd = compliantMonths[monthNumbers.indexOf(Math.max(...monthNumbers))];
    }
    
    return {
      year,
      compliantMonths,
      nonCompliantMonths,
      missingDataDetails,
      analysisPeriod: {
        start: analysisPeriodStart,
        end: analysisPeriodEnd,
        isComplete: compliantMonths.length === 12,
        monthCount: compliantMonths.length
      },
      validationMessage: this.generateValidationMessage(compliantMonths, nonCompliantMonths, missingDataDetails)
    };
  }

  generateValidationMessage(compliantMonths, nonCompliantMonths, missingDataDetails) {
    if (compliantMonths.length === 0) {
      return {
        type: 'error',
        message: 'No analysis period available. Please upload data with revenue, cost, and target for at least one month.'
      };
    }
    
    if (nonCompliantMonths.length === 0) {
      return {
        type: 'success',
        message: 'All months have complete data for analysis.'
      };
    }
    
    // Generate detailed message about missing data
    const missingDetails = nonCompliantMonths.map(month => {
      const missing = missingDataDetails[month];
      return `${month} (missing: ${missing.join(', ')})`;
    });
    
    return {
      type: 'warning',
      message: `Analysis period: ${compliantMonths[0]} to ${compliantMonths[compliantMonths.length - 1]}. ` +
               `Some months have incomplete data: ${missingDetails.join(', ')}. ` +
               `Consider uploading the missing data for complete analysis.`
    };
  }

  // Get filtered period months based on analysis period validation
  async getValidatedPeriodMonths(year, period, month = null, quarter = null) {
    const validation = await this.getAnalysisPeriodValidation(year);
    const requestedMonths = this.getPeriodMonths(year, period, month, quarter);
    
    // Filter to only include compliant months
    const validMonths = requestedMonths.filter(m => validation.compliantMonths.includes(m));
    
    return {
      months: validMonths,
      validation: validation,
      hasNonCompliantMonths: requestedMonths.length > validMonths.length
    };
  }
}

module.exports = new DataService();