import {Component, Input, OnInit} from '@angular/core';
import {SalesReportService} from '../sales-report.service';
import {SalesReport} from '../sales/sales.report';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  salesReports: SalesReport[];

  @Input() salesReport: SalesReport;
  @Input() newSalesReport: SalesReport;

  ngOnInit() {
    this.getSalesReports();
    this.salesReport = new SalesReport();
    this.newSalesReport = new SalesReport();
  }

  constructor(
    private salesReportService: SalesReportService
  ) {}

  setSalesReport(salesReport: SalesReport) {
    this.salesReport = salesReport;
  }

  getSalesReports(): void {
    this.salesReportService.getAllSalesReports()
      .subscribe(salesReports => this.salesReports = salesReports);
  }


}
