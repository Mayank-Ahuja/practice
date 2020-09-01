import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { ExcelDataService } from "./shared/services/excel-data.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'readExcel';

  excelSheetData: object;
  showLoader: boolean = false;

  adhaarNumberText: string = '';
  adhaarNumber: string = '';
  sheetName: string = '';
  sheetsList: Array<string> = [];
  enableDataUpload: boolean = false;

  excelValidationData: any;

  @ViewChild('fileInput') fileInput;
  tableHead: Array<any>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataSource: MatTableDataSource<object>;

  readFileSubsciber: Subscription;

  showTable: boolean = false;

  constructor(private http: HttpClient, private excelService: ExcelDataService) { }

  ngOnInit(): void {
    this.getJSON(1).subscribe(data => {
      console.log(data);
      this.excelValidationData = data;
    });
  }

  fileSelected(event): void {
    const file = event.target.files[0];
    if (file) {
      const fileType = file.name.substr(file.name.lastIndexOf('.') + 1);
      if (fileType.toLowerCase() == 'xlsx' || fileType.toLowerCase() == 'xls' || fileType.toLowerCase() == 'csv') {
        this.readFile(file);
      } else {
        alert('only excel formats allowed');
        this.fileInput.nativeElement.value = ''
      }
    } else {
      event.target.value = '';
    }
  }

  readFile(file: object): void {

    this.excelService.readExcelSheet(file);
    this.showLoader = true;
    this.readFileSubsciber = this.excelService.readExcelData.subscribe(excelData => {
      if (Object.keys(excelData).length > 0) {
        this.excelSheetData = excelData;
        console.log(excelData);
        this.enableDataUpload = true;
        this.sheetsList = Object.keys(excelData);
        if (Object.keys(excelData).length == 1) {
          this.getSelectedSheetData(this.sheetsList[0]);
        }
        this.showLoader = false;
        this.readFileSubsciber.unsubscribe();
      }
    });
  }

  getSelectedSheetData(sheetName: string): void {
    this.tableHead = this.excelSheetData[sheetName]['sheetHeader'];
    const tableData = this.prepareTableData(this.excelSheetData[sheetName]['sheetData'], this.tableHead);
    console.log(this.tableHead);

    this.showTable = true;

    this.excelService.validateExcelSheet(this.excelValidationData,tableData)
    
    this.dataSource = new MatTableDataSource<object>(tableData);
    this.dataSource.paginator = this.paginator;
  }

  prepareTableData(tableRecords: Array<any>, tableHeader: Array<string>): Array<object> {
    const tableData = [];
    tableRecords.map((item) => {
      let obj = {};
      for (let i in tableHeader) {
        obj[tableHeader[i]] = item[i] || '';
      }
      tableData.push(obj)
    })
    return tableData;
  }


  public getJSON(jsonSheet: number): Observable<any> {
    let jsonPath = ''
    switch (jsonSheet) {
      case 1:
        jsonPath = './assets/data/testExcelValidators.json';
        break;
      case 2:
        jsonPath = './assets/data/testExcelValidators.json';
        break;
    }
    return this.http.get(jsonPath);
  }

}
