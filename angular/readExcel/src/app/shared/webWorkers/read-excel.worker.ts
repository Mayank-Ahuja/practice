/// <reference lib="webworker" />

import * as XLSX from 'xlsx';

addEventListener('message', ({ data }) => {
  console.log(data);

  const excelData = {};
  //console.log(JSON.parse(data));

  const reader: FileReader = new FileReader();
  reader.onload = (e:any) => {
    const binaryString: string = e.target.result;
    // console.log(binaryString);
    const workBook: XLSX.WorkBook = XLSX.read(binaryString,{type: 'binary'});

    const workSheetsList= workBook.SheetNames;

    //console.log(workSheetsList);

    for(let i of workSheetsList){
      const workSheet: XLSX.WorkSheet = workBook.Sheets[i];
      const currentSheetData = <any>(XLSX.utils.sheet_to_json(workSheet,{header:1}))
      excelData[i] = {sheetHeader: currentSheetData.shift(),sheetData: currentSheetData}
    }
    console.log(excelData);

    //const response = `worker response to ${data}`;
    postMessage(excelData);
  }

  reader.readAsBinaryString(data)
  
});
