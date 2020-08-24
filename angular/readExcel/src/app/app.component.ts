import { Component, ViewChild } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'readExcel';

  excelSheetData: object;

  @ViewChild('fileInput') fileInput;

  fileSelected(event):void {
    const file = event.target.files[0];
    console.log(typeof(file))
    if(file){
      const fileType = file.name.substr(file.name.lastIndexOf('.')+1);
      if(fileType.toLowerCase() == 'xlsx' || fileType.toLowerCase() == 'xls' || fileType.toLowerCase() == 'csv'){
        this.readFile(file);
      }else{
        alert('only excel formats allowed');
        this.fileInput.nativeElement.value = ''
      }
    }else{
      event.target.value = '';
    }
  }

  readFile(file: object):void{
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker('./shared/read-excel.worker', { type: 'module' });
      worker.onmessage = ({ data }) => {
        this.excelSheetData = data;
      };
      let stringFile = JSON.stringify(file);
      console.log(stringFile)
      worker.postMessage(file);
    } else {
      // Web workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }

}
