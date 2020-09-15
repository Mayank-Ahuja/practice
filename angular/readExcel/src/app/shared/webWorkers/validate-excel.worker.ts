/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  console.log(data);
  let returnValidationResponse;

  const validators = data['validation']['templateData'];
  const excelDataHeader = data['excelHeaders'];

  const validExcelHeaders = getTableHeads(validators);
  const columnMatch = validateTableColumns(excelDataHeader,validExcelHeaders);

  if(!columnMatch){
    returnValidationResponse = {status:false,message:'Excel column name do not match'}
  }else{
    returnValidationResponse = {status:true,message:'Excel column match'}
  }
  postMessage(returnValidationResponse);
  

});

function getTableHeads(validators){
  let tableHeads = [];
  for(let i of validators){
    tableHeads.push(i['columnName']);
  }
  return tableHeads;
}

function validateTableColumns(excelHeader:Array<string>,validationHeaders: Array<string>):boolean{
  if (excelHeader.length == validationHeaders.length) {
    for(let i in validationHeaders){
      if (validationHeaders[i].toLowerCase() !== excelHeader[i].toLowerCase()) {
        return false;
      }
    }
    return true;
  }else{
    return false;
  }
}

