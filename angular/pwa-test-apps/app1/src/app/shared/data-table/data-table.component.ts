import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';

import * as XLSX from 'xlsx';
import * as moment from 'moment';

import { TableDataService } from './table-data.service';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, OnChanges {

  /* input variables for table configuration */
  @Input() tableName:string = ''; //Name of the table using for refering the component
  @Input() dataSource: Array<object> = []; // data for table array of object
  @Input() tableHeading: Array<string> = []; // to be provided if specific table columns
  @Input() actionButtons: any = {}; // table data action buttons
  @Input() enablePagination: Boolean = false; // enable pagination
  @Input() enableSorting: Boolean = false; // enable sorting
  @Input() tablePageSize: number = 15; /* required if enablePagination is true and sets the amount of items to be visible in a single table page if not provided default page size is 15*/

  @Input() stickyHeader: Boolean = false; // enable data download
  @Input() selectData: Boolean = false; // set this to true if select option is required in the table

  tableHead: Boolean = false; // set to true if table has below one the options set to true or has a string value
  @Input() tableDataName: string = '';
  @Input() enableDataDownload: Boolean = false; // enable data download
  @Input() enableDataUpload: Boolean = false; // enable data upload
  @Input() enableDataSearch: Boolean = false; // enable data search
  @Input() downloadedSheetName: string = 'data'; // downloaded excel sheet

  /* output variable for calling parent function */
  @Output() buttonAction = new EventEmitter<object>()

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator; //for refering material pagination
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  /* variables for table */
  tableDataSource: MatTableDataSource<object>;
  tableDataHeads: Array<string> = [];
  downloadableData: Array<object> = [];
  selection = new SelectionModel<object>(true, []);

  filterData: string = '';

  constructor(private tableDataService: TableDataService) { 
    this.tableDataSource = new MatTableDataSource<object>([]);
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    let dataChange = changes['dataSource'];
    if (dataChange) {
      if (dataChange.currentValue) {
        if(dataChange.currentValue.length > 0){
          this.downloadableData = dataChange.currentValue;
          this.generateDataTable(dataChange.currentValue);
        }
      }
    }
  }

  generateDataTable(tableData: any): void {

    this.tableDataHeads = [];

    let tableHeads = [];

    if (this.tableHeading.length > 0) {
      tableHeads = this.tableHeading;
    } else if (tableData[0]['heading']) {
      tableHeads = tableData[0]['heading'].split('~');
    } else {
      for (let k in tableData[0]) {
        tableHeads.push(k);
      }
    }

    //actionButtons

    if (this.selectData) {
      tableHeads.unshift('select');
    } else {
      if (tableHeads.indexOf('select') == 0) {
        tableHeads.shift();
      }
    }

    if(Object.keys(this.actionButtons).length > 0){
      tableHeads = [...tableHeads,...Object.keys(this.actionButtons)]
    }

    this.tableDataHeads = tableHeads;

    for (let i in tableData) {
      tableData[i]['position'] = i;
    }

    this.tableDataSource = new MatTableDataSource<object>(tableData);

    if (this.enablePagination) {
      this.tableDataSource.paginator = this.paginator;
    }

    if (this.enableSorting) {
      this.tableDataSource.sort = this.sort;
    }

    //this.selection = new SelectionModel<object>(true, [])

    if (this.tableDataName || this.enableDataDownload || this.enableDataSearch) {
      this.tableHead = true;
    }

    this.tableDataSource.filter = '';
    this.filterData = '';

  }

  /* search table data function */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableDataSource.filter = filterValue.trim().toLowerCase();
  }

  downloadIntoExcel(): void {

    /* creating seperate copy of table data  */
    const downloadData = JSON.parse(JSON.stringify(this.downloadableData));
    downloadData.map((item:any) => {
      delete item['heading'];
      delete item['position'];
    })

    /* generate worksheet */
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(downloadData);
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  /* save to file */
    var currentDateTime = new Date();
    const timeStamp = moment().format('YYYYMMDD') + ' T' + currentDateTime.getHours() + '' + currentDateTime.getMinutes() + currentDateTime.getSeconds();
    XLSX.writeFile(wb, this.downloadedSheetName+' ' + timeStamp + '.xlsx');
  }

  checkIfButton(keyName: string): boolean {
    if (Object.keys(this.actionButtons).length > 0) {
      if (this.actionButtons[keyName.toLowerCase()]) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  onFileInput(e:any, fileDetails: object, functionName: string): void {
    this.callParentFunction(functionName, { event: e, rowData: fileDetails });
  }

  callParentFunction(functionName: string, rowObj: object): void {
    const functionObj:any = {};
    functionObj[functionName] = rowObj;
    this.buttonAction.emit(functionObj);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.tableDataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      this.updateSelectedData();
    } else {
      this.tableDataSource.data.forEach(row => this.selection.select(row));
      this.updateSelectedData();
    }
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {

      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    } else {
      this.updateSelectedData()
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row['position']}`;
    }
  }

  updateSelectedData(): void {
    const tableData = { tableName: this.tableDataName, selectedData: this.selection.selected }
    this.tableDataService.setTableSelectedData(tableData);
  }

}
