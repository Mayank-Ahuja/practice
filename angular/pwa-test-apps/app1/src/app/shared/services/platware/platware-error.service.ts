import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatwareErrorService {

  constructor() { }
  private platwareErrorResponse = new Map([
    ["MAXSESSION",{errType: 'confirm', errTitle: 'Session Error', errorMessage:'User already logged in. Do you want to kill existing session ?',errCode:'MAXSESSION'}],
    ["MSESSION",{errType: 'confirm', errTitle: 'Session Error', errorMessage:'User already logged in. Do you want to kill existing session ?',errCode:'MSESSION'}],
    [undefined,{errType: 'alert', errTitle: 'Error', errorMessage:'Some unknown error occured',errCode:''}],
    ["plat022",{errType: 'alert', errTitle: 'Error', errorMessage:'Some error occured at server side.',errCode:''}],
    ["plat033",{errType: 'alert', errTitle: 'Error', errorMessage:'Some error occured while fetching data.',errCode:''}],
    ["SESSIONID",{errType: 'alert', errTitle: 'Session Error', errorMessage:'Your session has been killed.',errCode:'SESSIONID'}],
    ["USER_AUTH_FAIL", { errType: 'alert', errTitle: 'Login Error', errorMessage: 'User Id/Password is incorrect', errCode:'USER_AUTH_FAIL'}]
  ]);

  handleErrorResponse(errResponse:object): object{
    let errObj = {errType: '', errTitle: '', errorMessage:'',errCode:''};
    if (errResponse['status'] === 500) {
      errObj['errTitle'] = 'Server Error', errObj['errType'] = 'alert',
      errObj['errorMessage'] = 'Internal server error, please try again', errObj['errCode'] = '0'
    }else if(errResponse['status'] === 0){
      errObj['errTitle'] = 'Connection Error',errObj['errType'] = 'alert',
      errObj['errorMessage'] = 'Error while connecting to server. Please check your internet connection and try again.',errObj['errCode']= '0'
    }else{
      if(!this.platwareErrorResponse.get(errResponse['data']['MsgID'])){
        errObj = this.platwareErrorResponse.get(undefined);
      }else {
        errObj = this.platwareErrorResponse.get(errResponse['data']['MsgID'])
      }
    }
    return errObj;
  }
  
}
