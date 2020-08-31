import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

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
  dataSource: MatTableDataSource<object>


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getJSON(1).subscribe(data => {
      console.log(data);
      this.excelValidationData = data;
    });
  }

  fileSelected(event): void {
    const file = event.target.files[0];
    console.log(typeof (file))
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
    this.showLoader = true;
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker('./shared/read-excel.worker', { type: 'module' });
      worker.onmessage = ({ data }) => {
        this.excelSheetData = data;
        this.enableDataUpload = true;;
        this.sheetsList = Object.keys(data);
        if (Object.keys(data).length == 1) {
          this.getSelectedSheetData(this.sheetsList[0]);
        }
        this.showLoader = false;
      };
      worker.postMessage(file);
    } else {
      // Web workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }

  getSelectedSheetData(sheetName: string): void {
    this.tableHead = this.excelSheetData[sheetName]['sheetHeader'];
    const tableData = this.prepareTableData(this.excelSheetData[sheetName]['sheetData'], this.tableHead);
    console.log(this.tableHead);

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

  maskAdhaar(e): void {

    if (e.data !== null) {
      this.adhaarNumber += this.adhaarNumberText[this.adhaarNumberText.length - 1];
    } else {
      this.adhaarNumber = this.adhaarNumber.substring(0, this.adhaarNumber.length - 1);
    }
    let a = this.adhaarNumberText;
    if (this.adhaarNumberText.length <= 8) {
      console.log('original vlue: ', this.adhaarNumberText);
      this.adhaarNumberText = this.adhaarNumberText.replace(/\d/g, '*');
    }
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
