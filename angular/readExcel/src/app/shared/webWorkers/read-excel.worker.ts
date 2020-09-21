/// <reference lib="webworker" />

import * as XLSX from 'xlsx';
import * as moment from 'moment';
addEventListener('message', ({ data }) => {
  console.log('data given to  read excel worker: ',data);

  const excelData = {};

  const reader: FileReader = new FileReader();
  reader.onload = (e:any) => {
    const binaryString: string = e.target.result;
    const workBook: XLSX.WorkBook = XLSX.read(binaryString,{type: 'binary',cellDates: false});
    const workSheetsList= workBook.SheetNames;

    for(let i of workSheetsList){
      const workSheet: XLSX.WorkSheet = workBook.Sheets[i];
      const currentSheetData = <any>(XLSX.utils.sheet_to_json(workSheet,{header:1}));
      excelData[i] = prepareTableData({sheetHeader: currentSheetData.shift(),sheetData: currentSheetData})
    }

    const dateTypeHeaders = [];

    for(let i of data['validators']){
      if(i['dataType'] === 'date'){
        dateTypeHeaders.push(i['columnName']);
      }
    }

    console.log('raw excelData: ',excelData);
    console.log('date type headers: ', dateTypeHeaders);

    for (let dateColumn of dateTypeHeaders){
      for(let sheetName of workSheetsList){
        for(let sheetData of excelData[sheetName]['sheetData']){
          const sheetColumns = Object.keys(sheetData);
          if(sheetColumns.indexOf(dateColumn) > -1){
            console.log('before date: ',sheetData);
            sheetData[dateColumn] = excelDateToISODateString(sheetData[dateColumn]);
            console.log('after date: ',sheetData);
          }
        }
      }
    }

    console.log('processed excelData: ',excelData);
    postMessage(excelData);
  }

  reader.readAsBinaryString(data['file']);
  
});

function prepareTableData(sheetObj) {
  const sheetData = [];
  sheetObj['sheetData'].map(item => {
    let obj = {};
    for (let i in sheetObj['sheetHeader']) {
      obj[sheetObj['sheetHeader'][i]] = item[i] || '';
    }
    sheetData.push(obj);
  })
  return {sheetData: sheetData , sheetHeader: sheetObj['sheetHeader']};
}

function excelDateToISODateString(excelDateNumber) {
  return new Date(Math.round((excelDateNumber - 25569) * 86400 * 1000)).toISOString().substring(0, 10);
}