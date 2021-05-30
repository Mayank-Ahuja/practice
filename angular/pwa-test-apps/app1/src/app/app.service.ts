import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import * as envProps from 'src/environments/environment';
declare var cryptor: any;

@Injectable({
  providedIn: 'root'
})
export class AppService {
  uploadUrl: string;
  envProps: object = envProps.environment.envProps;

  constructor(private http: HttpClient) { }

  private loader: Subject<object> = new Subject();
  loaderSubscribe = this.loader.asObservable();

  private toast: Subject<object> = new Subject();
  toastMessageSubscribe = this.toast.asObservable();

  private refreshState: Subject<void> = new Subject<void>();
  refreshSubscribe = this.refreshState.asObservable();

  showLoader(status: object): void {
    this.loader.next(status);
  }

  hideLoader(): void {
    this.loader.next({status:false});
  }

  showToast(status: object): void {
    this.toast.next(status);
  }

  uploadFile(fileData: object):Observable<any>{

    this.uploadUrl = this.envProps[this.envProps['envType']]['fileUploadUrl'];

    const formData = new FormData();
    formData.append('files', fileData['fileData'][0]);

    let headers = new HttpHeaders({
      /* 'Content-Type': 'multipart/form-data', */
      'referenceId': fileData['reference'],
      'docTypeId': fileData['doc_id'],
      'docId': fileData['doc_id'],
    });
    let options = { headers: headers };

    return this.http.post<any>(this.uploadUrl, formData, options)

  }

  getLoggedInUserName():string {
    let userName = '';
    const userDetails = JSON.parse(cryptor.decryptText(sessionStorage.getItem('loggedInUserData'),this.envProps['storageKey']));
    userName = userDetails['emp_name'] || '';
    return userName;
  }

  refreshUpdate(): void {
    this.refreshState.next();
  }

}
