import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { LoginCredsService } from '../shared/services/user-services/login-creds.service';
import * as envProps from 'src/environments/environment';
import { PlatwareClientService } from '../shared/services/platware/platware-client.service';
import { SessionService } from '../shared/services/user-services/session.service';
import { AppService } from '../app.service';
import { ScreenInfoService } from '../shared/services/app-level/screen-info.service';
import { PlatwareErrorService } from '../shared/services/platware/platware-error.service';

declare var cryptor: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  envProps: object = envProps.environment.envProps;
  loginForm: FormGroup;
  hide: boolean = true;
  appVersion: string = this.envProps['appVersion'];

  @ViewChild('dialogBox') dialogBox;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private callPlatware: PlatwareClientService,
    private loginCreds: LoginCredsService,
    private sessionService: SessionService,
    private appService: AppService,
    private platwareErrorService: PlatwareErrorService,
    private activatedRoute: ActivatedRoute,
    private screenInfoService: ScreenInfoService) { }

  ngOnInit(): void {

    if (localStorage.loginCredentials && localStorage.loggedInUserSessionId) {
      this.sessionService.setUserSessionId(localStorage.loggedInUserSessionId);
      localStorage.setItem('loginCredentials', localStorage.loginCredentials)
      sessionStorage.setItem('loginCredentials', localStorage.loginCredentials)
      this.getEmpDetails(this.loginCreds.getLoginCredentials()['id']);
    } else {
      const sessionId = this.sessionService.getUserSessionId();
      if (sessionId) {
        this.router.navigate(['/manage-ticket'])
      }
    }

    this.checkScreenSize();

    this.initializeLoginForm();

  }

  
  checkScreenSize():void{
    this.screenInfoService.screenWidth.subscribe(screenWidth=>{
      console.log('screen Width ===> ',screenWidth);
    })
  }

  initializeLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      employeeId: ['', Validators.required],
      loginPassword: ['', Validators.required]
    })
  }

  showAlertConfirmBox(errObj: object) {
    this.appService.hideLoader();
    this.dialogBox.openDialog(errObj).then(res => {
      if (errObj['errCode'] == 'MAXSESSION' || errObj['errCode'] == 'MSESSION') {
        this.killAllSession();
      } else if (errObj['errCode'] == 'SESSIONID') {
        localStorage.clear();
        sessionStorage.clear();
      }
    })
  }

  validateLogin(): void {

    this.loginCreds.setLoginCredentials(this.loginForm.controls['employeeId'].value, this.loginForm.controls['loginPassword'].value);
    const reqData = [{
      processName: 'PWAUTH',
      data: []
    }]
    this.appService.showLoader({ status: true, message: 'Validating credentials.' });
    this.callPlatware.executeApi(reqData).then(res => {
      this.appService.hideLoader();
      const authData = res[0]['data'][0];
      if (authData['is_auth'] === 'Y') {
        this.sessionService.setUserSessionId(authData['user_session_id']);
        this.getEmpDetails(this.loginForm.controls['employeeId'].value);
      } else {

      }
    }).catch((msg) => {
      this.showAlertConfirmBox(this.platwareErrorService.handleErrorResponse(msg))
    })

  }

  getEmpDetails(userName: string): void {
    const reqData = [{
      processName: "SPPREMPDETAIL",
      data: [{
        x_emp_id: userName
      }]
    }];
    this.appService.showLoader({ status: true, message: 'Getting User Details.' })
    this.callPlatware.executeApi(reqData).then(res => {
      const userDetails = res[0]['data'][0];
      sessionStorage.setItem('loggedInUserData', cryptor.encryptText(JSON.stringify(userDetails), this.envProps['storageKey']));
      localStorage.setItem('loggedInUserData', cryptor.encryptText(JSON.stringify(userDetails), this.envProps['storageKey']));
      // this.router.navigate(['/manage-ticket']);
      if (localStorage.id && localStorage.ticket) {
        this.router.navigate(['/manage-ticket'],
          {
            queryParams: { 'id': localStorage.id, 'ticket': localStorage.ticket }
          });
      }
      else {
        this.router.navigate(['/manage-ticket']);
      }
    }).catch((msg) => {
      this.appService.hideLoader();
      const errData = this.platwareErrorService.handleErrorResponse(msg);
      this.showAlertConfirmBox(errData)
    })
  }

  killAllSession(): void {
    const killSession_req = [{
      processName: "PWKILLALLSESSION",
      data: []
    }];
    this.appService.showLoader({ status: true, message: 'Killing existing sessions.' })
    this.callPlatware.executeApi(killSession_req).then(res => {
      this.validateLogin();
    }).catch((msg) => {
      this.appService.hideLoader();
      const errData = this.platwareErrorService.handleErrorResponse(msg);
      this.showAlertConfirmBox(errData)
    })
  }

}
