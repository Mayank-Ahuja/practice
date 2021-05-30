import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  //selectedData: object = {};
  private selectedData = new BehaviorSubject({});
  tableSelectedData = this.selectedData.asObservable();

  constructor() { }


  setTableSelectedData(tableDetails: object): void {
    //this.selectedData = tableDetails;
    //console.log(tableDetails);
  }


}
