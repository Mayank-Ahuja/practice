import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExcelDataService {

  private excelData = new BehaviorSubject({});
  readExcelData = this.excelData.asObservable();

  private validatedData = new BehaviorSubject([]);
  validatedExcelData = this.validatedData.asObservable();

  constructor() { }

  readExcelSheet(file: object){
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker('../webWorkers/read-excel.worker', { type: 'module' });
      worker.onmessage = ({ data }) => {
        this.excelData.next(data);        
      };
      worker.postMessage(file);
    } else {
      // Web workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }
  validateExcelSheet(validationData: object, excelFileData: Array<object>,excelSheetHeader: Array<string>){
    const validate = {validation: validationData, data: excelFileData,excelHeaders: excelSheetHeader}
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker('../webWorkers/validate-excel.worker', { type: 'module' });
      worker.onmessage = ({ data }) => {
        console.log(data);
        this.validatedData.next(data);        
      };
      worker.postMessage(validate);
    } else {
      // Web workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }
}
