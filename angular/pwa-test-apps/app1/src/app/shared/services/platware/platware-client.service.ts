import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as envProps from 'src/environments/environment';

declare var cryptor: any;
declare var Fingerprint: any;

import { SessionService } from '../user-services/session.service';
import { LoginCredsService } from '../user-services/login-creds.service';

@Injectable({
  providedIn: 'root'
})
export class PlatwareClientService {

  envProps: any = envProps.environment.envProps;
  platwareRequest: any = { "PWSESSIONRS": { "PWPROCESSRS": { "PWHEADER": { "ORG_ID": "", "IN_PROCESS_ID": "", "OUT_PROCESS_ID": "", "USER_ID": "PORTAL", "PASSWORD": "", "USER_SESSION_ID": "", "APP_ID": "", "VERSION_ID": "", "IMEI_NO": "", "OS_VERSION": "", "DEVICE_MAKE": "", "DEVICE_MODEL": "", "SIM_ID": "", "SERVER_TIMESTAMP": "", "DEVICE_TIMESTAMP": "", "DEVICE_LATITUDE": "", "DEVICE_LONGITUDE": "", "LOCATION": "", "PW_SESSION_ID": "", "LOGIN_ID": "", "PW_VERSION": "", "PW_CLIENT_VERSION": "", "SESSION_EXPIRE_TIME": "", "INSTALLATION_ID": "" }, "PWDATA": {}, "PWERROR": "" } } };

  constructor(private sessionService: SessionService,
    private loginCreds: LoginCredsService,
    private http: HttpClient) { }

  private randomString(length:number) {
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
    for (var i = length; i > 0; --i)
      result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
  }

  executeApi(reqBody: Array<object>): any {
    let promise = new Promise((resolve,reject)=>{
      const requestDetails:any = this.prepareRequest(reqBody);
      this.http.post<any>(requestDetails['url'],requestDetails['data'],requestDetails['headers']).toPromise().then((res)=>{
        const platwareResponse = [];
        const responseEncryption = this.envProps[this.envProps['envType']]['responseEncryption'];
        // console.log('platware - response: ',res);
        let responseData;
        if(responseEncryption){
          responseData = cryptor.decryptText(res,requestDetails['decryptionKey']);
          responseData = JSON.parse(responseData);
        }else{
          responseData = JSON.parse(res.toString());
        }
        const processorsArray = responseData['PWSESSIONRS'];
        const processResponse = processorsArray[0].PWPROCESSRS;
        if (processResponse.PWERROR !== '') {
            // handle server side session management
            const processName = processResponse.PWHEADER.IN_PROCESS_ID;
            const errorData = processResponse.PWERROR[processName]["Row"];
            const processErrorResponseObj = {
                processName: processName,
                data: errorData
            };
            reject(processErrorResponseObj);
        }else{
          const processName = processResponse.PWHEADER.IN_PROCESS_ID;
          const processData = processResponse.PWDATA[processName]["Row"];
          const processResponseObj = {
              processName: processName,
              data: processData
          };
          platwareResponse.push(processResponseObj);
        }
        resolve(platwareResponse);
      },(err)=>{
        console.log('post error', err);
        reject(err);
      })
      
    })
    return promise;
  }

  prepareRequest(reqBody: Array<any>): object {
    const headerEncryption = this.envProps[this.envProps['envType']]['headerEncryption'],
      requestEncryption = this.envProps[this.envProps['envType']]['requestEncryption'],
      responseEncryption = this.envProps[this.envProps['envType']]['responseEncryption'],
      fp = new Fingerprint(),
      userSessionId = this.sessionService.getUserSessionId(),
      loginCredentials:any = this.loginCreds.getLoginCredentials(),
      loggedInUserId = loginCredentials['id']
    let finalRequestUrl = this.envProps[this.envProps['envType']]['apiUrl'];
    if (!requestEncryption && !responseEncryption) {
      finalRequestUrl += this.envProps['nonEncryptPW'] + this.envProps['orgId'];
    }
    if (requestEncryption && !responseEncryption) {
      finalRequestUrl += this.envProps['encryptReqPW'] + this.envProps['orgId'];
    }
    if (requestEncryption && responseEncryption) {
      finalRequestUrl += this.envProps['encryptReqResPW'] + this.envProps['orgId'];
    }
    this.platwareRequest['PWSESSIONRS']['PWPROCESSRS']['PWHEADER']['IMEI_NO'] = fp.get() + '';
    this.platwareRequest['PWSESSIONRS']['PWPROCESSRS']['PWHEADER']['ORG_ID'] = this.envProps['orgId'];
    this.platwareRequest['PWSESSIONRS']['PWPROCESSRS']['PWHEADER']['APP_ID'] = this.envProps['appId'];
    let randomKey = this.randomString(16);

    loginCredentials['pwd'] = loginCredentials['pwd'] || '';

    if (headerEncryption) {
      if (loginCredentials['id']) {
        this.platwareRequest['PWSESSIONRS']['PWPROCESSRS']['PWHEADER']['LOGIN_ID'] = cryptor.encryptText(loginCredentials['id'], randomKey);
        this.platwareRequest['PWSESSIONRS']['PWPROCESSRS']['PWHEADER']['USER_ID'] = cryptor.encryptText(loginCredentials['id'], randomKey);
      } else {
        this.platwareRequest['PWSESSIONRS']['PWPROCESSRS']['PWHEADER']['LOGIN_ID'] = '';
        this.platwareRequest['PWSESSIONRS']['PWPROCESSRS']['PWHEADER']['USER_ID'] = '';
      }


      if (loginCredentials['id'] && (reqBody[0]["processName"] === this.envProps['authProcess'])) {
        this.platwareRequest['PWSESSIONRS']['PWPROCESSRS']['PWHEADER']['PASSWORD'] = cryptor.encryptText(loginCredentials['pwd'], randomKey);
      } else if (reqBody[0]["processName"] !== 'PWAUTH') {
        this.platwareRequest['PWSESSIONRS']['PWPROCESSRS']['PWHEADER']['PASSWORD'] = '';
      }

      if (this.envProps['specialProcesses'].indexOf(reqBody[0]["processName"]) > -1) {
        this.platwareRequest['PWSESSIONRS']['PWPROCESSRS']['PWHEADER']['USER_SESSION_ID'] = ''
      } else {
        this.platwareRequest['PWSESSIONRS']['PWPROCESSRS']['PWHEADER']['USER_SESSION_ID'] = cryptor.encryptText(userSessionId, randomKey);
      }

      this.platwareRequest['PWSESSIONRS']['PWPROCESSRS']['PWHEADER']['PW_SESSION_ID'] = cryptor.encryptText(randomKey, this.envProps['sessionEncryptionKey']);

    } else {
      this.platwareRequest['PWSESSIONRS']['PWPROCESSRS']['PWHEADER']['LOGIN_ID'] = loginCredentials['id'];
      this.platwareRequest['PWSESSIONRS']['PWPROCESSRS']['PWHEADER']['USER_ID'] = loginCredentials['id'];
      this.platwareRequest['PWSESSIONRS']['PWPROCESSRS']['PWHEADER']['PASSWORD'] = loginCredentials['pwd'];
      this.platwareRequest['PWSESSIONRS']['PWPROCESSRS']['PWHEADER']['PW_SESSION_ID'] = randomKey;
    }

    let reqData = this.prepareRequestData(reqBody);
    let hashKey = '', encUrlId = '';
    if (requestEncryption) {
      const encryptedPW_sessionId = this.platwareRequest['PWSESSIONRS']['PWPROCESSRS']['PWHEADER']['PW_SESSION_ID'];
      reqData = cryptor.encryptText(reqData, randomKey);
      hashKey = encryptedPW_sessionId.hexEncode();
      encUrlId= '&ID=' + hashKey;
    }else{
      reqData = JSON.parse(reqData);
    }
    if (responseEncryption) {
      encUrlId= '&ID=' + hashKey;
    }

    finalRequestUrl += encUrlId;

    const requestDetals = {
      method: 'POST',
      url: finalRequestUrl,
      data: reqData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'responseType': 'text'
      },
      timeOut: this.envProps['requestTimeout'],
      decryptionKey: randomKey
    }

    return requestDetals;

  }

  prepareRequestData(dataArr:Array<any>): string {

    const length = dataArr.length;
    const tempPnames = [];
    const pwData:any = {};

    while (tempPnames.length < length) {
      const rowArr = [];
      const data = dataArr[tempPnames.length].data;
      //alert(JSON.stringify(data))
      const dataLength = data.length;
      if (dataLength > 0) {
        rowArr.length = 0;

        for (let i = 0; i < dataLength; i++) {
          const rowItem:any = {};
          for (let prop in data[i]) {
            rowItem[prop] = data[i][prop];
            //alert(data[i].prop+"\n"+data[i][prop])
          }
          rowArr.push(rowItem);
        }

        pwData[dataArr[tempPnames.length].processName] = { Row: rowArr };
        //   alert(JSON.stringify(pwData));
        tempPnames.push(dataArr[tempPnames.length].processName);
      }
      else {
        pwData[dataArr[tempPnames.length].processName] = "";
        tempPnames.push(dataArr[tempPnames.length].processName);
      }
    }
    this.platwareRequest['PWSESSIONRS']['PWPROCESSRS']['PWHEADER']['OUT_PROCESS_ID'] = tempPnames.join("~");
    // pwcProperties.platwareRequest.PWSESSIONRS.PWPROCESSRS.PWHEADER.PW_SESSION_ID = PWCutilities.createPWsessionId();
    this.platwareRequest['PWSESSIONRS']['PWPROCESSRS']['PWDATA'] = pwData;
    this.platwareRequest['PWSESSIONRS']['PWPROCESSRS']['PWERROR'] = "";

    let returnData = JSON.stringify(this.platwareRequest);
    returnData = returnData.trim();

    return returnData;
  }


}

String.prototype['hexEncode'] = function () {
  var hex, i;
  var result = "";
  for (i = 0; i < this.length; i++) {
      hex = this.charCodeAt(i).toString(16);
      result += ("000" + hex).slice(-4);
  }
  return result;
};

String.prototype['hexDecode'] = function () {
  var j;
  var hexes = this.match(/.{1,4}/g) || [];
  var back = "";
  for (j = 0; j < hexes.length; j++) {
      back += String.fromCharCode(parseInt(hexes[j], 16));
  }
  return back;
};
