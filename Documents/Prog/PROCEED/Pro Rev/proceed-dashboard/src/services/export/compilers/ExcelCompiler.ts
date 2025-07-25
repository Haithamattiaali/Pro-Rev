import { UniversalExportRepresentation, ExportDocument } from '../core/types';
import { formatCurrency, formatPercentage } from '../../../utils/formatters';

// Dynamic import for XLSX to avoid build issues
let XLSX: any = null;

export class ExcelCompiler {
  async compile(uer: UniversalExportRepresentation): Promise<ExportDocument> {
    try {
      console.log('Excel compiler - UER received:', uer);
      
      // Dynamically import XLSX if not already loaded
      if (!XLSX) {
        XLSX = await import('xlsx');
      }
      
      // Create a new workbook
      const wb = XLSX.utils.book_new();

      // Process sections and create worksheets
      if (uer && uer.sections && uer.sections.length > 0) {
        console.log('Processing sections:', uer.sections.length);
        uer.sections.forEach((section, index) => {
          const sheetName = section.title || `Sheet${index + 1}`;
          const sheetData = this.extractSectionData(section);
          
          if (sheetData.length > 0) {
            const ws = XLSX.utils.aoa_to_sheet(sheetData);
            // Apply column widths
            ws['!cols'] = this.calculateColumnWidths(sheetData);
            XLSX.utils.book_append_sheet(wb, ws, sheetName.substring(0, 31)); // Excel sheet name limit
          }
        });
      } else {
        console.log('No sections found in UER, creating default sheet');
        // Create a default sheet with basic info
        const defaultData = [
          ['Proceed Revenue Dashboard Export'],
          [`Generated on: ${new Date().toLocaleDateString()}`],
          [],
          ['No data available for export']
        ];
        const ws = XLSX.utils.aoa_to_sheet(defaultData);
        XLSX.utils.book_append_sheet(wb, ws, 'Dashboard');
      }

      // Generate Excel buffer
      console.log('Generating Excel buffer...');
      let buffer;
      try {
        buffer = XLSX.write(wb, { bookType: 'xlsx', type: 'buffer' });
        console.log('Excel buffer generated, size:', buffer.byteLength);
      } catch (writeError) {
        console.error('XLSX.write failed:', writeError);
        throw new Error(`Failed to generate Excel file: ${writeError.message}`);
      }
      
      // Create blob from buffer
      const blob = new Blob([buffer], { 
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' 
      });
      console.log('Blob created, size:', blob.size);

      return {
        format: 'excel',
        data: blob,
        filename: `proceed-dashboard-export-${new Date().toISOString().split('T')[0]}.xlsx`,
        size: buffer.byteLength,
        mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      };
    } catch (error) {
      console.error('Excel compilation error:', error);
      throw new Error(`Excel export failed: ${error.message || 'Unknown error'}`);
    }
  }

  private extractSectionData(section: any): any[][] {
    const data: any[][] = [];
    
    // Add section title
    if (section.title) {
      data.push([section.title]);
      data.push([]);
    }

    // Process section elements
    if (section.elements) {
      section.elements.forEach(element => {
        switch (element.type) {
          case 'metric':
            data.push([element.label || 'Metric', this.formatValue(element.value, element.format)]);
            break;
            
          case 'table':
            if (element.data) {
              // Add headers
              if (element.data.headers) {
                data.push(element.data.headers);
              }
              // Add rows
              if (element.data.rows) {
                element.data.rows.forEach(row => data.push(row));
              }
              data.push([]);
            }
            break;
            
          case 'chart':
            data.push(['Chart: ' + (element.title || 'Unnamed')]);
            if (element.data && element.data.series) {
              // Simple chart data export
              data.push(['Series', 'Value']);
              element.data.series.forEach(series => {
                data.push([series.name || 'Series', series.value || 0]);
              });
            }
            data.push([]);
            break;
            
          case 'text':
            data.push([element.content || '']);
            break;
        }
      });
    }

    return data;
  }

  private calculateColumnWidths(data: any[][]): any[] {
    if (data.length === 0) return [];
    
    const maxCols = Math.max(...data.map(row => row.length));
    const widths = new Array(maxCols).fill(15); // Default width
    
    // Calculate optimal widths based on content
    data.forEach(row => {
      row.forEach((cell, index) => {
        const cellLength = String(cell).length;
        widths[index] = Math.max(widths[index], Math.min(cellLength + 2, 50));
      });
    });
    
    return widths.map(w => ({ wch: w }));
  }

  private formatValue(value: any, format?: string): string {
    if (format === 'currency') {
      return formatCurrency(value);
    } else if (format === 'percentage') {
      return formatPercentage(value);
    } else if (typeof value === 'number') {
      return value.toLocaleString();
    }
    return String(value);
  }
}

export default ExcelCompiler;