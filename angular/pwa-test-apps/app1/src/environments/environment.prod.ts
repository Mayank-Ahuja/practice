// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  envProps: {
    orgId: 'CHOICE',
    appId: 'CHOICE',
    envType:'uat',
    nonEncryptPW: 'GatewayAnalyserJson?ORG_ID=' ,
    encryptReqPW: 'GatewayAnalyserEncrypt?ORG_ID=',
    encryptReqResPW: 'GatewayAnalyserEncryptRR?ORG_ID=',
    storageKey: 'secretchoiceid',
    sessionEncryptionKey: 'decimalsecretkey',
    requestTimeout: 180000,
    specialProcesses: ['PWAUTH','SPPRPERFORMANCEDATA'],
    authProcess: 'PWAUTH',
    uploadUrl: 'https://115.113.94.44/msu/management/documents/v1/uploadDocuments',
    //envType:'sit',
    appVersion: '0.0.001',
    uat:{
      domain: 'https://115.113.94.44',
      apiUrl: 'https://115.113.94.44/pwchoice/',
      headerEncryption: true,
      requestEncryption: false,
      resposneEncryption: false
    },
    sit:{
      domain: 'https://10.1.5.13',
      apiUrl: 'https://10.1.5.13/pwchoice/',
      headerEncryption: true,
      requestEncryption: false,
      resposneEncryption: false
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
