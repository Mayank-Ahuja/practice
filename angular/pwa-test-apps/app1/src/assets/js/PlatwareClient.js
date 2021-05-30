/// <reference path="../js/Dbtransactions.js" />
/// <reference path="../js/webService.js" />


var domainUrl='https://choice-act.com/';
var pwcProperties = {
    platwareURL: "http://choice-act.com/PlatwareAnalyzer_02_02_00/PWSURLJson",
    platwareRequest: {"PWSESSIONRS": {"PWPROCESSRS": {"PWHEADER": {"ORG_ID": "MDM", "IN_PROCESS_ID": "", "OUT_PROCESS_ID": "", "USER_ID": "PORTAL", "PASSWORD": "", "USER_SESSION_ID": "", "APP_ID": "MDM", "VERSION_ID": "", "IMEI_NO": "", "OS_VERSION": "", "DEVICE_MAKE": "", "DEVICE_MODEL": "", "SIM_ID": "", "SERVER_TIMESTAMP": "", "DEVICE_TIMESTAMP": "", "DEVICE_LATITUDE": "", "DEVICE_LONGITUDE": "", "LOCATION": "", "PW_SESSION_ID": "", "LOGIN_ID": "", "PW_VERSION": "", "PW_CLIENT_VERSION": "", "SESSION_EXPIRE_TIME": "", "INSTALLATION_ID": ""}, "PWDATA": {}, "PWERROR": ""}}},
    tableName: "pwcProperties",
    lastPlatwareSessionId: "",
    platwareVersion: "",
    pwcVersion: "",
    //device related attributes
    model: "",
    platform: "",
    osVersion: "",
    installLong: "",
    installLat: "",
    //need a native plugin
    installSimId: "",
    currentSimId: "",
    make: "",
    IEMI: "",
    // from user input.
    phoneNumber: "",
    URL:domainUrl+"pwnew/GatewayAnalyserJson?ORG_ID=MDM",
    encURL:domainUrl+"pwnew/GatewayAnalyserEncrypt?ORG_ID=MDM",
    encURLRR:domainUrl+"pwnew/GatewayAnalyserEncryptRR?ORG_ID=MDM",
    ORGID: "CHOICe",
    Id: "CHOICe",
    authenticated: "",
    status: "",
    userId: "",
    password: "",
    installTS: "",
    installationId: "",
    version: "",
    versionOnServer: "",
    versionUpgradeAvailable: "",
    versionUpdateURL: "",
    versionUpdateMandatory: false,
    orgConfigLoaded: "",
    checkTableDefOC: "Y",
    pushNotificationId: "",
    pushNotificationAppId: "",
    pushNotificationPreference: "",
    changeUser: "",
    changeUserOnOrgApp: "",
    loginIdPrevious: "",
    passwordPrevious: "",
    lastUseTS: "",
    lastUserSessionId: "",
    lastAuthTS: "",
    checkLastSyncDate: "",
    insertInPendingQueue: "",
    sessionId: "",
    sessionExpirable: "",
    SessionExpirationTS: "",
    lastServerConnectTS: "",
    lastServerConnectSuccessTS: "",
    lockCode: "",
    lockCodeAttempts: "",
    lockCodeType: "",
    checkFirstRun: false,
    startTime: new Object(),
    startPosition: new Object(),
    dataColumns: [
        {
            name: "platwareURL",
            datatype: "text",
        },
        {
            name: "lastPlatwareSessionId"
        },
        {
            name: "platwareVersion"

        },
        {
            name: "pwcVersion"
        },
        {
            name: "make",
            datatype: "text"
        },
        {
            name: "model",
            datatype: "text"
        },
        {
            name: "platform",
            datatype: "text"
        },
        {
            name: "osVersion",
            datatype: ""
        },
        {
            name: "installLat",
            datatype: "text"
        },
        {
            name: "installLong",
            datatype: "text"
        },
        {
            name: "installSimId",
            datatype: "text",
        },
        {
            name: "currentSimId",
            datatype: "text"
        },
        {
            name: "IEMI",
            datatype: "text"
        },
        {
            name: "phoneNumber",
            datatype: "integer"
        },
        {
            name: "tableId",
            datatype: "text"
        },
        {
            name: "URL",
            datatype: "text"
        },
        {
            name: "ORGID",
            datatype: "text"
        },
        {
            name: "app_id",
            datatype: "text"
        },
        {
            name: "authenticated",
            datatype: "text"
        },
        {
            name: "status",
            datatype: "text"
        },
        {
            name: "userId",
            datatype: "text"
        },
        {
            name: "password",
            datatype: "text"
        },
        {
            name: "installTS",
            datatype: "text"
        },
        {
            name: "installationId",
            datatype: "text"
        },
        {
            name: "version",
            datatype: "text"
        },
        {
            name: "versionOnServer",
            datatype: "text"
        },
        {
            name: "versionUpgradeAvailable",
            datatype: "text"
        },
        {
            name: "versionUpdateURL",
            datatype: "text"
        },
        {
            name: "versionUpdateMandatory",
            datatype: "text"
        },
        {
            name: "orgConfigLoaded",
            datatype: ""
        },
        {
            name: "checkTableDefOC",
            datatype: "text"
        },
        {
            name: "pushNotificationId",
            datatype: "text"
        },
        {
            name: "pushNotificationAppId",
            datatype: "text"
        },
        {
            name: "pushNotificationPreference",
            datatype: "text"
        },
        {
            name: "changeUser",
            datatype: "text"
        },
        {
            name: "changeUserOnOrgApp",
            datatype: "text"
        },
        {
            name: "loginIdPrevious",
            datatype: "text"
        },
        {
            name: "passwordPrevious",
            datatype: "text"
        },
        {
            name: "lastUseTS",
            datatype: "text"
        },
        {
            name: "lastUserSessionId",
            datatype: "text"
        },
        {
            name: "lastAuthTS",
            datatype: "text"
        },
        {
            name: "sessionId",
            datatype: "text"
        },
        {
            name: "sessionExpirable",
            datatype: "text"
        },
        {
            name: "SessionExpirationTS",
            datatype: "text"
        },
        {
            name: "lastServerConnectTS",
            datatype: "text"
        },
        {
            name: "lastServerConnectSuccessTS",
            datatype: "text"
        },
        {
            name: "lockCode",
            datatype: "text"
        },
        {
            name: "lockCodeAttempts",
            datatype: "text"
        },
        {
            name: "lockCodeType",
            datatype: "text"
        },
        {
            name: "insertInPendingQueue",
            datatype: "text"
        },
        {
            name: "checkLastSyncDate",
            datatype: "text"
        }
    ]
};

/*
 Object for platwareServer/platwareClient related values
 -- URL -- defualt platware server URL to hit for getting the application/version specific URL.
 -- Request -- defualt platware Request JSON Object.
 -- data columns -- columns of the internal database to be created by platware client
 -- lastPlatwareSessionId -- key to store the last platware session id sent to platware server.
 */
/*var Platware = {
 URL: "http://decsit.decimaltech.net/PlatwareAnalyzer_02_02_00/PWSURLJson",
 Request: {"PWSESSIONRS": {"PWPROCESSRS": {"PWHEADER": {"ORG_ID": "","IN_PROCESS_ID": "","OUT_PROCESS_ID": "","USER_ID": "","PASSWORD": "","USER_SESSION_ID": "","APP_ID": "","VERSION_ID": "","IMEI_NO": "","OS_VERSION": "","DEVICE_MAKE": "","DEVICE_MODEL": "","SIM_ID": "","SERVER_TIMESTAMP": "","DEVICE_TIMESTAMP": "","DEVICE_LATITUDE": "","DEVICE_LONGITUDE": "","LOCATION": "","PW_SESSION_ID": "","LOGIN_ID": "","PW_VERSION": "","PW_CLIENT_VERSION": "","SESSION_EXPIRE_TIME": "","INSTALLATION_ID": ""},"PWDATA": {},"PWERROR": ""}}},
 dataColumns: [
 {
 name: "URL",
 datatype:"text",
 },
 {
 name: "lastPlatwareSessionId"
 },
 {
 name: "platwareVersion"
 
 },
 {
 name:"pwcVersion"
 }
 ],
 tableName:"platwareData",
 lastPlatwareSessionId: "",
 platwareVersion: "",
 pwcVersion:"",
 
 
 };*/

/*
 Object for application related values
 -- URL -- application specific URL on the platware Server.
 -- orgId -- current orgId of the application.
 -- Id -- current id(appId) of the application.
 -- authenticated -- key to store if the user has been authenticated or not (valid values -- "Y" "N")
 -- status -- status of the application (blocked,wiped, etc) empty means active status.
 -- userId -- userId of the currently logged in user.
 -- password -- password of the currently logged in user.
 -- installTS -- installation timestamp of the application.
 -- istallationId -- installation id of the application returned by the platware server
 -- version -- version of the application installed.
 -- versionOnServer -- current version of the application on the server.
 -- versionUpgradeAvailable -- if a new version of the application is available on the server or not (valid values -- "Y" "N")
 -- versionUpdateURL -- URL of the new version of the application.
 -- versionUpdateMandatory -- check for if the update is mandatory or not (valid values -- "Y" "N")
 -- orgConfigLoaded -- key to store if the process_master config has been loaded or not (valid values -- "Y" "N")
 -- checkTableDefOC -- key to store if process_paramter_mapping has been loaded or not (valid values -- "Y" "N")
 -- pushNotificationId -- key to store push notification id for the app.
 --  --
 */

/*var application = {
 tableName: "appTable",
 URL:"",
 ORGID: "",
 Id: "",
 authenticated:"",
 status:"",
 userId: "",
 password: "",
 
 installTS: "",
 installationId:"",
 
 
 version: "",
 versionOnServer:"",
 versionUpgradeAvailable: "",
 versionUpdateURL: "",
 versionUpdateMandatory: false,
 
 orgConfigLoaded: "",
 checkTableDefOC:"Y",
 
 pushNotificationId: "",
 pushNotificationAppId: "",
 pushNotificationPreference: "",
 
 changeUser: "",
 changeUserOnOrgApp: "",
 loginIdPrevious: "",
 passwordPrevious: "",
 
 lastUseTS: "",
 lastUserSessionId: "",
 lastAuthTS:"",
 
 checkLastSyncDate: "",
 insertInPendingQueue: "",
 
 sessionId: "",
 sessionExpirable:"",
 SessionExpirationTS: "",
 
 lastServerConnectTS: "",
 lastServerConnectSuccessTS: "",
 
 lockCode: "",
 lockCodeAttempts: "",
 lockCodeType: "",
 
 checkFirstRun: false,
 startTime: new Object(),
 startPosition: new Object(),
 
 dataColumns: [
 {
 name:"tableId",
 datatype:"text"
 },
 {
 name: "URL",
 datatype:"text"
 },
 {
 name: "ORGID",
 datatype: "text"
 },
 {
 name: "app_id",
 datatype: "text"
 },
 {
 name: "authenticated",
 datatype: "text"
 },
 {
 name: "status",
 datatype: "text"
 },
 {
 name: "userId",
 datatype: "text"
 },
 {
 name: "password",
 datatype: "text"
 },
 {
 name: "installTS",
 datatype: "text"
 },
 {
 name: "installationId",
 datatype: "text"
 },
 {
 name: "version",
 datatype: "text"
 },
 {
 name: "versionOnServer",
 datatype: "text"
 },
 {
 name: "versionUpgradeAvailable",
 datatype: "text"
 },
 {
 name: "versionUpdateURL",
 datatype: "text"
 },
 {
 name: "versionUpdateMandatory",
 datatype: "text"
 },
 {
 name: "orgConfigLoaded",
 datatype: ""
 },
 {
 name: "checkTableDefOC",
 datatype: "text"
 },
 {
 name: "pushNotificationId",
 datatype: "text"
 },
 {
 name: "pushNotificationAppId",
 datatype: "text"
 },
 {
 name: "pushNotificationPreference",
 datatype: "text"
 },
 {
 name: "changeUser",
 datatype: "text"
 },
 {
 name: "changeUserOnOrgApp",
 datatype: "text"
 },
 {
 name: "loginIdPrevious",
 datatype: "text"
 },
 {
 name: "passwordPrevious",
 datatype: "text"
 },
 {
 name: "lastUseTS",
 datatype: "text"
 },
 {
 name: "lastUserSessionId",
 datatype: "text"
 },
 {
 name: "lastAuthTS",
 datatype: "text"
 },
 {
 name: "sessionId",
 datatype: "text"
 },
 {
 name: "sessionExpirable",
 datatype: "text"
 },
 {
 name: "SessionExpirationTS",
 datatype: "text"
 },
 {
 name: "lastServerConnectTS",
 datatype: "text"
 },
 {
 name: "lastServerConnectSuccessTS",
 datatype: "text"
 },
 {
 name: "lockCode",
 datatype: "text"
 },
 {
 name: "lockCodeAttempts",
 datatype: "text"
 },
 {
 name: "lockCodeType",
 datatype: "text"
 },
 {
 name: "insertInPendingQueue",
 datatype: "text"
 },
 {
 name: "checkLastSyncDate",
 datatype: "text"
 },
 
 ],
 
 };
 
 var thisDevice = {
 ORGID:"",
 model: "",
 platform: "",
 osVersion: "",
 installLong: "",
 installLat: "",
 //need a native plugin
 installSimId: "",
 currentSimId: "",
 make: "",
 IEMI: "",
 // from user input.
 phoneNumber: "",
 tableName:"deviceTable",
 dataColumns: [
 {
 name:"make",
 datatype:"text"
 },
 {
 name:"model",
 datatype:"text"
 },
 {
 name:"platform",
 datatype:"text"
 },
 {
 name:"osVersion",
 datatype:""
 },
 {
 name:"installLat",
 datatype:"text"
 },{
 name:"installLong",
 datatype:"text"
 },{
 name:"installSimId",
 datatype:"text",
 },{
 name:"currentSimId",
 datatype: "text"
 },
 {
 name: "IEMI",
 datatype:"text"
 },
 {
 name: "phoneNumber",
 datatype:"integer"
 }
 ]
 
 };*/

var PlatwareDb = {
    DbName: "platwareClient",
    DbObj: "",
    tables: new Object(),
    DbRequestObj: new Object()
};

var pwcMethods = {
    initSuccessCallback: null,
    initErrorCallback: null,
    initialise: function (appName, ORGID, APPID, username, password, initSuccess, initError) {
        console.time("initTime");
        //  application.startTime=new Date();
        pwcProperties.startTime = new Date();
        try {
            pwcMethods.initSuccessCallback = initSuccess;
            pwcMethods.initErrorCallback = initError;
        }
        catch (e) {
            alert(JSON.stringify(e));
        }
        if (this.checkId(ORGID) && this.checkId(APPID)) {
            pwcProperties.ORGID = ORGID;
            pwcProperties.Id = APPID;
            DbMethods.openDb(PlatwareDb.DbName,
                    function (dbObj) {
                        PlatwareDb.DbObj = dbObj;
                        pwcMethods.checkPWCproperties(pwcMethods.getPWCproperties, pwcMethods.createPWCpropertiesTable);
                    },
                    function (error) {
                        console.log(error);
                    });


        }
        else {
            console.log("ORGID or APPID missing");
        }
        if (this.checkId(username) && this.checkId(password)) {
            pwcProperties.userId = username;
            pwcProperties.password = password;
        }
        else {
            console.log("username or password missing");
        }
    },
    createPWCpropertiesTable: function () {
        DbMethods.createTable(PlatwareDb.DbObj, pwcProperties.tableName, pwcProperties.dataColumns, function () {
            pwcMethods.resetPWCproperties(pwcMethods.getAppURL, function () {
                alert("1")
            })
        },
                function () {
                    alert("error while creating pwc properties table")
                });
    },
    /*
     function to check if local tables for platware properties exist or not. 
     this function checks for platwareData table/objectStore in the db
     if it exists then calls getPlatwareData function to read data from the table and store it in memory
     else creates the table by calling createPlatwareTable function
     */
    checkPWCproperties: function (successCallback, errorCallback) {
        var PWCdb = PlatwareDb.DbObj;
        DbMethods.checkTable(PWCdb, pwcProperties.tableName, function () {
            successCallback(pwcMethods.checkPWCdata, pwcMethods.resetPWCproperties);
        }, errorCallback);
    },
    getPWCproperties: function (successCallback, errorCallback) {
        DbMethods.readData(PlatwareDb.DbObj, pwcProperties.tableName, ["*"], [{"name": "ORGID", "operator": "=", "value": pwcProperties.ORGID}], {}, function (data) {
            if (data.length > 0) {
                var recievedData = data[0];
                var keys = Object.keys(recievedData);
                for (var i = 0; i < keys.length; i++) {
                    pwcProperties[keys[i]] = recievedData[keys[i]];
                }
                successCallback();
            }
            else {
                errorCallback(pwcMethods.getAppURL, pwcMethods.platwareDataTableError);
            }
        }, errorCallback);
    },
    resetPWCproperties: function (successCallback, errorCallback, is_initDone) {

        pwcProperties.installTS = PWCutilities.toTimestamp(pwcProperties.startTime);
        var local_tableName = pwcProperties.tableName;
        var info = PWCutilities.getDeviceInfo();
        pwcProperties.platform = info.platform;
        pwcProperties.model = info.model;
        pwcProperties.osVersion = info.osVersion;
        pwcProperties.make = info.make;
        console.log(pwcProperties.ORGID);
        var platwareData = [{
                "platwareURL": pwcProperties.platwareURL,
                "lastPlatwareSessionId": "",
                "platwareVersion": 3.2,
                "pwcVersion": 0.530,
                "model": pwcProperties.model,
                "osVersion": pwcProperties.osVersion,
                "platform": pwcProperties.platform,
                "make": pwcProperties.make,
                URL: pwcProperties.URL,
                app_id: pwcProperties.Id,
                ORGID: pwcProperties.ORGID,
                authenticated: pwcProperties.authenticated,
                status: pwcProperties.status,
                userId: pwcProperties.userId,
                password: pwcProperties.password,
                installTS: pwcProperties.installTS,
                installationId: pwcProperties.installationId,
                version: pwcProperties.version,
                versionOnServer: pwcProperties.versionOnServer,
                versionUpgradeAvailable: pwcProperties.versionUpgradeAvailable,
                versionUpdateURL: pwcProperties.versionUpdateURL,
                versionUpdateMandatory: pwcProperties.versionUpdateMandatory,
                orgConfigLoaded: pwcProperties.orgConfigLoaded,
                checkTableDefOC: pwcProperties.checkTableDefOC,
                pushNotificationId: pwcProperties.pushNotificationId,
                pushNotificationAppId: pwcProperties.pushNotificationAppId,
                pushNotificationPreference: pwcProperties.pushNotificationPreference,
                changeUser: pwcProperties.changeUser,
                changeUserOnOrgApp: pwcProperties.changeUserOnOrgApp,
                loginIdPrevious: pwcProperties.loginIdPrevious,
                passwordPrevious: pwcProperties.passwordPrevious,
                lastUseTS: pwcProperties.lastUseTS,
                lastUserSessionId: pwcProperties.lastUserSessionId,
                lastAuthTS: pwcProperties.lastAuthTS,
                sessionId: pwcProperties.sessionId,
                sessionExpirable: pwcProperties.sessionExpirable,
                lastServerConnectTS: pwcProperties.lastServerConnectTS,
                lastServerConnectSuccessTS: pwcProperties.lastServerConnectSuccessTS,
                lockCode: pwcProperties.lockCode,
                lockCodeAttempts: pwcProperties.lockCodeAttempts,
                lockCodeType: pwcProperties.lockCodeType,
                insertInPendingQueue: pwcProperties.insertInPendingQueue,
                checkLastSyncDate: pwcProperties.checkLastSyncDate
            }];
        //todo 11/3/15
        var successFn;
        is_initDone ? successFn = function () {
            successCallback()
        } : successFn = function () {
            successCallback(pwcMethods.getInstallId, pwcMethods.URLGetError)
        }
        PWCutilities.orgDataChecker(local_tableName, platwareData, successFn, errorCallback);
    },
    createPlatwareTable: function (tableName) {

        console.log("starttime:" + pwcProperties.installTS);
        DbMethods.createTable(PlatwareDb.DbObj, tableName, Platware.dataColumns, pwcMethods.savePlatwareDataTable, pwcMethods.platwareCreateTableError);
    },
    /*
     * 
     * @param {type} successCallback : getDeviceData
     * @param {type} errorCallback : createDeviceTable
     * @returns {undefined}
     */
    checkDeviceTable: function (successCallback, errorCallback) {
        console.log("platware info table setup complete.");
        DbMethods.checkTable(PlatwareDb.DbObj, thisDevice.tableName, function (tableName) {
            successCallback(pwcMethods.checkAppTable, pwcMethods.saveDeviceTable);
        }, errorCallback);// pwcMethods.checkAppTablepwcMethods.getDeviceData, pwcMethods.createDeviceTable);
    },
    savePlatwareDataTable: function (result, tableName) {
        pwcProperties.installTS = PWCutilities.toTimestamp(pwcProperties.startTime);
        //alert(JSON.stringify(arguments))
        //console.log("inserting")
        var local_tableName = tableName || pwcProperties.tableName;
        var info = PWCutilities.getDeviceInfo();
        //console.log("-->"+JSON.stringify(info));
        thisDevice.platform = info.platform;
        thisDevice.model = info.model;
        thisDevice.osVersion = info.osVersion;
        thisDevice.make = info.make;

        console.log(pwcProperties.ORGID);
        var platwareData = [{
                "platwareURL": pwcProperties.platwareURL,
                "lastPlatwareSessionId": "",
                "platwareVersion": 3.2,
                "pwcVersion": 0.530,
                "model": thisDevice.model,
                "osVersion": thisDevice.osVersion,
                "platform": thisDevice.platform,
                "make": thisDevice.make
            }];
        /*var platwareData = [
         {
         name: "ORGID",
         value: application.ORGID
         },
         {
         name: "URL",
         value: Platware.URL
         },
         {
         name: "lastPlatwareSessionId",
         value: ""
         
         },
         {
         name: "platwareVersion",
         value: 3.2
         },
         {
         name: "pwcVersion",
         value: 0.530
         }
         ];*/
        PWCutilities.orgDataChecker(local_tableName, platwareData, pwcMethods.createDeviceTable, pwcMethods.platwareDataTableError);
        //DbMethods.insertData(PlatwareDb.DbObj, local_tableName, platwareData, pwcMethods.createDeviceTable, pwcMethods.platwareDataTableError)
    },
    platwareCreateTableError: function (error) {
        console.log("Error while creating platware database.\n Stopping the application.\nError message:\n" + error);
    },
    /*
     * 
     * @param {type} successCallback : checkDeviceTable
     * @param {type} errorCallback : savePlatwareDataTable
     * @returns {undefined}
     */
    getPlatwareData: function (successCallback, errorCallback) {
        DbMethods.readData(PlatwareDb.DbObj, Platware.tableName, ["*"], [{"name": "ORGID", "operator": "=", "value": application.ORGID}], {}, function (data) {
            if (data.length > 0) {
                var recievedData = data[0];
                var keys = Object.keys(recievedData);
                for (var i = 0; i < keys.length; i++) {
                    Platware[keys[i]] = recievedData[keys[i]];
                }
                successCallback(pwcMethods.getDeviceData, pwcMethods.createDeviceTable);
            }
            else {
                errorCallback();
            }
        }, errorCallback);
    },
    /*
     * 
     * @param {type} successCallback :checkAppTable
     * @param {type} errorCallback : saveDeviceTable
     * @returns {undefined}
     */
    getDeviceData: function (successCallback, errorCallback) {
        DbMethods.readData(PlatwareDb.DbObj, thisDevice.tableName, ["*"], [{"name": "ORGID", "operator": "=", "value": pwcProperties.ORGID}], {}, function (data) {
            if (data.length > 0) {
                var recievedData = data[0];
                var keys = Object.keys(recievedData);
                for (var i = 0; i < keys.length; i++) {
                    thisDevice[keys[i]] = recievedData[keys[i]];
                }
                successCallback(pwcMethods.getAppData, pwcMethods.createAppTable);
            }
            else {
                errorCallback();
            }
        }, errorCallback);
    },
    createDeviceTable: function () {
        //DbMethods.dropTable(PlatwareDb.DbObj, "deviceTable", function (tableName) {
        DbMethods.checkTable(PlatwareDb.DbObj, thisDevice.tableName, function () {
            pwcMethods.getDeviceData(pwcMethods.checkAppTable, pwcMethods.saveDeviceTable)
        }, function () {
            DbMethods.createTable(PlatwareDb.DbObj, thisDevice.tableName, thisDevice.dataColumns, pwcMethods.saveDeviceTable, pwcMethods.deviceTableError)
        });

        //}, function (error, tableName) {
        // alert(error)
        //});
        console.log("data inserted in platware table")
    },
    platwareDataTableError: function (error) {
        console.log("err:" + error);
    },
    deviceTableError: function (error) {
        console.log(error);
    },
    checkAppTable: function (successCallback, errorCallback) {

        console.log("device info table setup complete");
        DbMethods.checkTable(PlatwareDb.DbObj, application.tableName, function (result, tableName) {
            successCallback(pwcMethods.checkPWCdata, pwcMethods.getAppURL);
            // pwcMethods.getAppURL(application.ORGID, application.Id, pwcMethods.getInstallId, pwcMethods.URLGetError);
        }, errorCallback);
    },
    saveDeviceTable: function () {
        console.log("device table created")
        //  var installPostion = application.startPosition;
        var platform = "";
        try {
            var info = PWCutilities.getDeviceInfo();
            console.log("-->" + JSON.stringify(info));
            thisDevice.platform = info.platform
            thisDevice.model = info.model;
            thisDevice.osVersion = info.osVersion;
            thisDevice.make = info.make;
            var deviceData = [{
                    "model": thisDevice.model,
                    "osVersion": thisDevice.osVersion,
                    "platform": thisDevice.platform,
                    "make": thisDevice.make
                }]
            /*  var deviceData = [
             {
             name: "ORGID",
             value:application.ORGID
             },
             {
             name: "model",
             value: thisDevice.model
             },
             {
             name: "osVersion",
             value: thisDevice.osVersion
             },
             {
             name: "platform",
             value: thisDevice.platform
             },
             {
             name: "make",
             value:thisDevice.make
             }
             ];*/
        }
        catch (e) {
            console.log(e.message)
        }

        //if (navigator.geolocation) {
        //    thisDevice.installLat = installPostion.coords.latitude;
        //    thisDevice.installLong = installPostion.coords.longitude;
        //}
        PWCutilities.orgDataChecker(thisDevice.tableName, deviceData, pwcMethods.createAppTable, pwcMethods.deviceDataTableError);
        //DbMethods.insertData(PlatwareDb.DbObj, "deviceTable",deviceData,pwcMethods.createAppTable,pwcMethods.deviceDataTableError)
    },
    createAppTable: function () {
        DbMethods.checkTable(PlatwareDb.DbObj, application.tableName, function () {
            pwcMethods.getAppData(pwcMethods.checkPWCdata, function () {
                pwcMethods.getAppURL(application.ORGID, application.Id, pwcMethods.getInstallId, pwcMethods.URLGetError)
            });
        }, function () {
            DbMethods.createTable(PlatwareDb.DbObj, application.tableName, application.dataColumns, function (result, tableName) {
                pwcMethods.getAppURL(pwcMethods.getInstallId, pwcMethods.URLGetError);
            }, pwcMethods.appTableError)
        })
        //  DbMethods.dropTable(PlatwareDb.DbObj, "appTable", function (tableName) {

        //}, function (error, tableName) {
        // });
    },
    deviceDataTableError: function () {
        alert("heh")

    },
    getAppData: function (successCallback, errorCallback) {

        var pwcDb = PlatwareDb.DbObj;
        DbMethods.readData(pwcDb, application.tableName, ["*"], [{"name": "ORGID", "operator": "=", "value": application.ORGID}], {}, function (data) {
            if (data.length > 0) {
                var recievedData = data[0];
                var keys = Object.keys(application);
                //alert(JSON.stringify(data));
                for (var i = 0; i < keys.length; i++) {
                    application[keys[i]] = recievedData[keys[i]]
                }
                // alert(JSON.stringify(application));
                successCallback();
            }
            else {
                // alert("noq")
                errorCallback(pwcMethods.getInstallId, pwcMethods.URLGetError);
            }
            //pwcMethods.checkPWCdata();

        });
    },
    saveAppTable: function () {
        var appData = [
            {
                name: "URL",
                value: "text"
            },
            {
                name: "id",
                value: "text"
            },
            {
                name: "ORGID",
                value: "text"
            },
            {
                name: "authenticated",
                value: "text"
            },
            {
                name: "status",
                value: "text"
            },
            {
                name: "userId",
                value: "text"
            },
            {
                name: "password",
                value: "text"
            },
            {
                name: "installTS",
                value: "text"
            },
            {
                name: "version",
                value: "text"
            },
            {
                name: "versionOnServer",
                value: "text"
            },
            {
                name: "versionUpgradeAvailable",
                value: "text"
            },
            {
                name: "versionUpdateURL",
                value: "text"
            },
            {
                name: "versionUpdateMandatory",
                value: "text"
            },
            {
                name: "orgConfigLoaded",
                value: ""
            },
            {
                name: "pwcConfigLoaded",
                value: "text"
            },
            {
                name: "pushNotificationId",
                value: "text"
            },
            {
                name: "pushNotificationAppId",
                value: "text"
            },
            {
                name: "pushNotificationPreference",
                value: "text"
            },
            {
                name: "changeUser",
                value: "text"
            },
            {
                name: "changeUserOnOrgApp",
                value: "text"
            },
            {
                name: "loginIdPrevious",
                value: "text"
            },
            {
                name: "passwordPrevious",
                value: "text"
            },
            {
                name: "lastUseTS",
                value: "text"
            },
            {
                name: "lastUserSessionId",
                value: "text"
            },
            {
                name: "lastAuthTS",
                value: "text"
            },
            {
                name: "sessionId",
                value: "text"
            },
            {
                name: "sessionExpirable",
                value: "text"
            },
            {
                name: "SessionExpirationTS",
                value: "text"
            },
            {
                name: "lastServerConnectTS",
                value: "text"
            },
            {
                name: "lastServerConnectSuccessTS",
                value: "text"
            },
            {
                name: "lockCode",
                value: "text"
            },
            {
                name: "lockCodeAttempts",
                value: "text"
            },
            {
                name: "lockCodeType",
                value: "text"
            },
            {
                name: "insertInPendingQueue",
                value: "text"
            },
            {
                name: "checkLastSyncDate",
                value: "text"
            },
        ]
    },
    appTableError: function () {

    },
    getAppURL: function (successCallback, errorCallback) {
        /*var getURLRequest = {
         ORG_ID: ORGID,
         APP_ID: APPID
         }
         var getURLRequestOptions = {
         callMethod: "GET"
         }
         webService.ajaxCall(Platware.URL, getURLRequest, function (data, status, xhr) {
         // alert("Success\n\n" + JSON.stringify(data) + "\n\n" + JSON.stringify(status) + "\n\n" + JSON.stringify(xhr))
         var AppURL = "";
         //alert(JSON.stringify(data))
         if (data["PW"]["ERROR"] === "") {
         AppURL = data["PW"]["URL"];
         
         if (AppURL && AppURL.length > 0) {
         console.log("URL:\n\n"+AppURL)
         pwcMethods.setAppURL(AppURL)
         return successCallback(pwcMethods.getORGConfig,pwcMethods.installIdError);
         }
         else {
         return errorCallback("APP URL not url found! check ORG ID or APP ID");
         }
         
         }
         else {
         return errorCallback(data["PW"]["ERROR"]);
         }
         
         },
         function (error, status, xhr) {
         return errorCallback(error);
         }, getURLRequestOptions);*/
        var AppURL = "http://128.136.227.190/PlatwareAnalyzer_03_02_00/GatewayAnalyserJson?ORG_ID=";
        // var AppURL = "http://mplas.ezw.com//PlatwareAnalyserOracle_01/GatewayAnalyserJson?ORG_ID=";

        //var AppURL = "http://decsit.decimaltech.net/PlatwareAnalyzer_03_01_00/GatewayAnalyserJson?ORG_ID=";
        pwcMethods.setAppURL(AppURL);
        successCallback(pwcMethods.getORGConfig, pwcMethods.installIdError);
    },
    checkId: function (id) {
        var isId = false
        if (id) {
            if (id.length > 0) {
                isId = true;
            }
        }
        return isId;
    },
    setAppURL: function (appURL) {
        pwcProperties.URL = appURL;
    },
    getInstallId: function (successCallback, errorCallback) {
        alert("getting install id")
        var orgID = pwcProperties.ORGID;
        var appID = pwcProperties.Id;
        var appURL = pwcProperties.URL + orgID;
        pwcProperties.platwareRequest.PWSESSIONRS.PWPROCESSRS.PWHEADER.ORG_ID = orgID;
        pwcProperties.platwareRequest.PWSESSIONRS.PWPROCESSRS.PWHEADER.APP_ID = appID;
        pwcProperties.platwareRequest.PWSESSIONRS.PWPROCESSRS.PWHEADER.LOGIN_ID = pwcProperties.userId;
        pwcProperties.platwareRequest.PWSESSIONRS.PWPROCESSRS.PWHEADER.PASSWORD = pwcProperties.password;
        //Platware.Request.PWSESSIONRS.PWPROCESSRS.PWHEADER.OUT_PROCESS_ID = "PWAPPINSTALL";
        var requestArr = [
            {
                processName: "PWAPPINSTALL",
                data: [
                    {
                        org_id: orgID,
                        app_id: appID,
                        platform: pwcProperties.platform,
                        install_time: pwcProperties.installTS
                    }
                ]
            },
        ]

        PWCutilities.callPlatware(appURL, requestArr, function (successData, status, xhr) {

            var data = PWCutilities.getResponseRowData(successData.PWSESSIONRS[0]);
            var installId = data[0].installation_id;
            // alert(installId);
            pwcMethods.setInstallId(installId);
            return successCallback(pwcMethods.saveOrgConfig, pwcMethods.orgConfigError)
        }, errorCallback);

    },
    installIdError: function (error, status, xhr) {
        console.log(JSON.stringify(error));
    },
    setInstallId: function (installId) {
        pwcProperties.installationId = installId;
        pwcProperties.platwareRequest.PWSESSIONRS.PWPROCESSRS.PWHEADER.INSTALLATION_ID = installId;
    },
    getORGConfig: function (successCallback, errorCallback) {
        var orgId = pwcProperties.ORGID;
        var appId = pwcProperties.Id
        var requestData = [
            {
                processName: "PWORGCONFIG",
                data: [
                    {
                        org_id: orgId,
                        app_id: appId
                    }

                ]
            }
        ];
        PWCutilities.callPlatware(pwcProperties.URL + orgId, requestData, function (successData, status, xhr) {
            var data = PWCutilities.getResponseRowData(successData.PWSESSIONRS[0]);
            successCallback(data, pwcMethods.Authentication, pwcMethods.orgConfigSaveError);
        },
                errorCallback)

    },
    saveOrgConfig: function (data, successCallback, errorCallback) {
        PWCutilities.orgDataChecker("configuration", data, function () {
            //   alert("saved org config")
            pwcProperties.orgConfigLoaded = "Y"
            return successCallback(pwcMethods.checkVersion, pwcMethods.AuthenticationError);
        },
                function () {
                    return errorCallback()
                })
    },
    orgConfigError: function (error, status, xhr) {
        console.log("errr:\n" + JSON.stringify(error) + "\n" + status + "\n" + JSON.stringify(xhr))
    },
    orgConfigSaveError: function (error) {
        console.log(error);
    },
    Authentication: function (successCallback, errorCallback) {
        var tempAuthTS = pwcProperties.lastAuthTS;
        console.log("username is : " + pwcProperties.userId + "\npassword is : " + pwcProperties.password)
        var authData = [
            {
                processName: "PWAUTH",
                data: [{
                        org_id: pwcProperties.ORGID,
                        app_id: pwcProperties.Id
                    }
                ]
            }
        ];
        //Platware.Request.PWSESSIONRS.PWPROCESSRS.PWHEADER.OUT_PROCESS_ID="PWAUTH"
        pwcProperties.platwareRequest.PWSESSIONRS.PWPROCESSRS.PWHEADER.LOGIN_ID = pwcProperties.userId;
        pwcProperties.platwareRequest.PWSESSIONRS.PWPROCESSRS.PWHEADER.PASSWORD = pwcProperties.password;
        PWCutilities.callPlatware(pwcProperties.URL + pwcProperties.ORGID, authData, function (data) {

            var authData = PWCutilities.getResponseRowData(data.PWSESSIONRS[0]);

            if (authData[0].is_auth == "Y" || authData[0].is_auth == "YES" || authData[0].is_auth == "Yes") {
                pwcProperties.lastAuthTS = PWCutilities.toTimestamp(new Date());
                PWCutilities.saveLastAuthTS(tempAuthTS);
                console.log("authenticated");
                pwcProperties.authenticated = authData[0].is_auth;

                successCallback(pwcMethods.saveLocalData, pwcMethods.checkVersionError);
            }
            else {
                errorCallback();
            }

        }, function (err) {
            //alert(JSON.stringify(error))
            errorCallback();
        })
    },
    saveLocalData: function (successCallback, errorCallback) {
        //platwareData
        //TODO create methods for org check and then insert or update...

        /*
         //get app version from the manifest.
         //
         */
        var pwcDB = PlatwareDb.DbObj;
        var appItemsObj = [
            {
                URL: application.URL,
                app_id: application.Id,
                ORGID: application.ORGID,
                authenticated: application.authenticated,
                status: application.status,
                userId: application.userId,
                password: application.password,
                installTS: application.installTS,
                installationId: application.installationId,
                version: application.version,
                versionOnServer: application.versionOnServer,
                versionUpgradeAvailable: application.versionUpgradeAvailable,
                versionUpdateURL: application.versionUpdateURL,
                versionUpdateMandatory: application.versionUpdateMandatory,
                orgConfigLoaded: application.orgConfigLoaded,
                checkTableDefOC: application.checkTableDefOC,
                pushNotificationId: application.pushNotificationId,
                pushNotificationAppId: application.pushNotificationAppId,
                pushNotificationPreference: application.pushNotificationPreference,
                changeUser: application.changeUser,
                changeUserOnOrgApp: application.changeUserOnOrgApp,
                loginIdPrevious: application.loginIdPrevious,
                passwordPrevious: application.passwordPrevious,
                lastUseTS: application.lastUseTS,
                lastUserSessionId: application.lastUserSessionId,
                lastAuthTS: application.lastAuthTS,
                sessionId: application.sessionId,
                sessionExpirable: application.sessionExpirable,
                lastServerConnectTS: application.lastServerConnectTS,
                lastServerConnectSuccessTS: application.lastServerConnectSuccessTS,
                lockCode: application.lockCode,
                lockCodeAttempts: application.lockCodeAttempts,
                lockCodeType: application.lockCodeType,
                insertInPendingQueue: application.insertInPendingQueue,
                checkLastSyncDate: application.checkLastSyncDate
            }
        ];
        PWCutilities.orgDataChecker(application.tableName, appItemsObj, function () {
        }, function () {
        })
        //  DbMethods.insertData(pwcDB,"platwareData");
        //alert(")
        successCallback(function () {
            alert("success");
            pwcMethods.initSuccessCallback();

        }, function () {
            alert("err");
            pwcMethods.initErrorCallback();
        });

    },
    checkVersion: function (successCallback, errorCallback) {
        console.log("checking version");
        pwcProperties.platwareRequest.PWSESSIONRS.PWPROCESSRS.PWHEADER.VERSION_ID = "1.0";
        var checkVerData = [
            {
                processName: "PWCHKV",
                data: [{
                        org_id: pwcProperties.ORGID,
                        app_id: pwcProperties.Id,
                        platform: pwcProperties.platform,
                    }
                ]
            }
        ];
        //PWCutilities.callPlatware(application.URL + application.ORGID, checkVerData, function (successData) {
        //    alert(JSON.stringify(successData));
        //},
        //function (e) {
        //    alert(JSON.stringify(e))
        //})
        pwcProperties.versionOnServer = "" //TODO save app version returned from the server
        pwcProperties.versionUpgradeAvailable = "" //TODO save Y/N accordingly
        if (pwcProperties.versionUpgradeAvailable == "Y" || pwcProperties.versionUpgradeAvailable == "y" || pwcProperties.versionUpgradeAvailable == "YES" || pwcProperties.versionUpgradeAvailable == "yes") {
            pwcProperties.versionUpdateMandatory = "" //TODO save Y/N accordingly
        }


        successCallback(pwcMethods.GetProcessConfig, function () {
        });

    },
    checkVersionError: function () {

    },
    GetProcessConfig: function (successCallback, errorCallback) {
        console.log("getting proccess mapping")
        var timeStamp = PWCutilities.toTimestamp(new Date());
        var processData = {
            org_id: pwcProperties.ORGID,
            app_id: pwcProperties.Id,
            timestamp: timeStamp
        }
        var processorData = [
            {
                processName: "PWPROCESSCONFIGAS",
                data: [processData]
            },
            {
                processName: "PWPROCESSCONFIGSA",
                data: [processData]
            },
            {
                processName: "PWPROCESSPARAMAS",
                data: [processData]
            },
            {
                processName: "PWPROCESSPARAMSA",
                data: [processData]
            },
            {
                processName: "PWPROCESSCONFIGMAP",
                data: [processData]
            },
            {
                processName: "PWPROCESSPARAMMAP",
                data: [processData]
            }
        ];
        //  alert(application.URL + application.ORGID);

        PWCutilities.callPlatware(pwcProperties.URL + pwcProperties.ORGID, processorData, function (data) {
            var length = data.PWSESSIONRS.length;
            var i = 0;

            PWCutilities.orgDataChecker("process_master_as", PWCutilities.getResponseRowData(data.PWSESSIONRS[i]), function () {
                i++;
                PWCutilities.orgDataChecker("process_master_sa", PWCutilities.getResponseRowData(data.PWSESSIONRS[i]), function () {
                    i++;
                    PWCutilities.orgDataChecker("process_parameter_master_as", PWCutilities.getResponseRowData(data.PWSESSIONRS[i]), function () {
                        i++;
                        PWCutilities.orgDataChecker("process_parameter_master_sa", PWCutilities.getResponseRowData(data.PWSESSIONRS[i]), function () {
                            i++;
                            PWCutilities.orgDataChecker("process_table_mapping", PWCutilities.getResponseRowData(data.PWSESSIONRS[i]), function () {
                                i++;
                                PWCutilities.orgDataChecker("process_parameter_mapping", PWCutilities.getResponseRowData(data.PWSESSIONRS[i]), function () {
                                    pwcProperties.checkTableDefOC = "Y";

                                    //// DbMethods.readData(PlatwareDb.DbObj, "proccess_master_as", ["*"], [], { name: "tableId", ordering: "ASC" }, function (result) { JSON.stringify(result); }, function () { })
                                    //DbMethods.checkTable(PlatwareDb.DbObj, "proccess_master_as", function () {
                                    //}, function () {
                                    //})
                                    successCallback();
                                }, errorCallback, ["process_id", "parameter_name"])
                            }, errorCallback, ["process_id", "table_name"])
                        }, errorCallback, ["process_id", "parameter_sequence", "parameter_name"]);
                    }, errorCallback, ["process_id", "parameter_sequence", "parameter_name"]);
                }, errorCallback, ["process_id"]);
            }, errorCallback, ["process_id"]);
        }, function (err) {
            alert(JSON.stringify(err));
        })
    },
    checkPWCdata: function () {
        if (pwcProperties.URL.length > 0) {
            if (pwcProperties.installationId !== "") {
                pwcMethods.Authentication(function () {
                    if (pwcProperties.orgConfigLoaded === "Y") {
                        PWCutilities.checkParamCount("process_master_as", "process_parameter_master_as", function () {
                            PWCutilities.checkParamCount("process_master_sa", "process_parameter_master_sa", function () {
                                pwcMethods.initSuccessCallback();
                            }, function () {

                            })
                        }, function () {
                            alert("n1")
                        });
                    }
                    else {
                        alert("org config not loaded");
                        pwcMethods.getORGConfig(pwcMethods.saveOrgConfig, pwcMethods.orgConfigError);
                    }
                }, function () {
                })
            }
            else {
                alert("install id not found");
                pwcMethods.getInstallId(pwcMethods.getORGConfig, pwcMethods.installIdError)
            }
        }
        else {
            alert("url not found");
            pwcMethods.getAppURL(pwcMethods.getInstallId, pwcMethods.URLGetError);
        }
    },
    AuthenticationError: function (err) {
        alert("in auth error")
        alert(JSON.stringify(err));
    },
    submit: function (pID, data) {

        // check pid from process_master_as
        // check group or not
        //check delimited or not
        //check param count
        //(if not delimited/ is json)check proccess_param_as for json keys
        //check params encrypted or not
        // check encoding
        //
        //encrypted or not
        //
    },
    URLGetError: function (error) {
        console.log("Error while fetching APP URL\n" + error)
    },
    initializeWithLastLogin: function () {

    }






};
var PWCerrorHandlers = {
};

var PWCutilities = {
    createDataJSON: function (dataArr) {
        var length = dataArr.length;
        var tempPnames = [];
        var pwData = {};

        while (tempPnames.length < length) {
            var rowArr = [];
            var data = dataArr[tempPnames.length].data;
            //alert(JSON.stringify(data))
            var dataLength = data.length;
            if (dataLength > 0) {
                rowArr.length = 0;

                for (var i = 0; i < dataLength; i++) {
                    var rowItem = {};
                    for (var prop in data[i]) {
                        rowItem[prop] = data[i][prop];
                        //alert(data[i].prop+"\n"+data[i][prop])
                    }
                    rowArr.push(rowItem);
                }

                pwData[dataArr[tempPnames.length].processName] = {Row: rowArr};
                //   alert(JSON.stringify(pwData));
                tempPnames.push(dataArr[tempPnames.length].processName);
            }
            else {
                pwData[dataArr[tempPnames.length].processName] = "";
                tempPnames.push(dataArr[tempPnames.length].processName);
            }
        }
        pwcProperties.platwareRequest.PWSESSIONRS.PWPROCESSRS.PWHEADER.OUT_PROCESS_ID = tempPnames.join("~");
        // pwcProperties.platwareRequest.PWSESSIONRS.PWPROCESSRS.PWHEADER.PW_SESSION_ID = PWCutilities.createPWsessionId();
        pwcProperties.platwareRequest.PWSESSIONRS.PWPROCESSRS.PWDATA = pwData;
        pwcProperties.platwareRequest.PWSESSIONRS.PWPROCESSRS.PWERROR = "";

        var returnData = '{"PWSESSIONRS":{"PWPROCESSRS":{"PWHEADER":' + JSON.stringify(pwcProperties.platwareRequest.PWSESSIONRS.PWPROCESSRS.PWHEADER) + ',' + '"PWDATA":' + JSON.stringify(pwcProperties.platwareRequest.PWSESSIONRS.PWPROCESSRS.PWDATA) + ',' + '"PWERROR":""}}}';
        returnData = returnData.trim();
        return returnData;
    },
    createPWsessionId: function () {
        // PWCutilities.saveLastPlatwareSessionId(Platware.lastPlatwareSessionId);
        var dates = new Date();
        var returnVal = "";
        var monthStr = PWCutilities.toDoubleDigits(dates.getMonth() + 1);
        var TS = dates.getFullYear() + monthStr + "" + PWCutilities.toDoubleDigits(dates.getDate()) + "" + PWCutilities.toDoubleDigits(dates.getHours()) + "" + PWCutilities.toDoubleDigits(dates.getMinutes()) + "" + PWCutilities.toDoubleDigits(dates.getSeconds()) + "" + PWCutilities.toDoubleDigits(dates.getMilliseconds());
        returnVal = pwcProperties.platwareRequest.PWSESSIONRS.PWPROCESSRS.PWHEADER.INSTALLATION_ID + "" + TS;
        return returnVal;
    },
    toTimestamp: function (date) {
        var returnDate = "";
        //alert(Object.prototype.toString.call(date))
        switch (Object.prototype.toString.call(date)) {
            case "[object String]":
                try {
                    var dates = new Date(date);
                    if (dates == "Invalid Date") {
                        throw "Cannot convert to timestamp: Invalid date";
                    }
                    else {
                        var monthStr = PWCutilities.toDoubleDigits(dates.getMonth() + 1);
                        returnDate = dates.getFullYear() + "-" + monthStr + "-" + dates.getDate() + " " + PWCutilities.toDoubleDigits(dates.getHours()) + ":" + PWCutilities.toDoubleDigits(dates.getMinutes()) + ":" + PWCutilities.toDoubleDigits(dates.getSeconds());
                    }
                } catch (error) {
                    console.log(error);
                    return false;
                }
                break;
            case "[object Date]":
                var dates = date;
                var monthStr = PWCutilities.toDoubleDigits(dates.getMonth() + 1);
                returnDate = dates.getFullYear() + "-" + monthStr + "-" + dates.getDate() + " " + PWCutilities.toDoubleDigits(dates.getHours()) + ":" + PWCutilities.toDoubleDigits(dates.getMinutes()) + ":" + PWCutilities.toDoubleDigits(dates.getSeconds());
                break;
            default:
                console.log("Cannot convert to timestamp: Invalid date");
                return false;
                break;
        }

        return returnDate;
    },
    toDoubleDigits: function (value) {
        var returnVal = "";
        value < 10 ? returnVal = "0" + value : returnVal = value;
        return returnVal;
    },
    callPlatware: function (url, data, successCallback, errorCallback, requestOptions, requestMethods, returnParams) {
        var callData = PWCutilities.createDataJSON(data);
        var rowDataArr = [];
        webService.ajaxCall(
                url,
                callData,
                function (successData, status, xhr)
                {
                    var JsonCallData = JSON.parse(callData);
                    pwcProperties.lastPlatwareSessionId = JsonCallData.PWSESSIONRS.PWPROCESSRS.PWHEADER.PW_SESSION_ID;
                    successData = JSON.parse(successData);
                    var noOfProcesses = successData.PWSESSIONRS.length;
                    //TODO check if any proccessId is PWDESTRUCT then change the app status to the returned app status//
                    for (var i = 0; i < noOfProcesses; i++) {
                        if (successData.PWSESSIONRS[i].PWPROCESSRS.PWERROR !== "") {
                            var thisProcessId = successData.PWSESSIONRS[i].PWPROCESSRS.PWHEADER.IN_PROCESS_ID;
                            errorCallback(successData.PWSESSIONRS[i].PWPROCESSRS.PWERROR[thisProcessId]["Row"]["Message"], status, xhr, returnParams);
                            return;
                        }
                    }

                    successCallback(successData, status, xhr, returnParams);
                },
                function (error, status, xhr)
                {
                    errorCallback(error, status, xhr, returnParams);
                },
                requestOptions,
                requestMethods,
                returnParams);

    },
    getResponseRowData: function (data) {
        var data = data;
        var processName = data.PWPROCESSRS.PWHEADER.IN_PROCESS_ID;
        var PWdata = data.PWPROCESSRS.PWDATA
        var rowData;
        try {
            if (PWdata[processName]) {
                rowData = PWdata[processName].Row;
            }
            else {
                throw "data not found for corresponding process name";
            }
        }
        catch (error) {
            console.log(error);
        }
        return rowData;



    },
    saveLastPlatwareSessionId: function (pwsId) {
        console.log("saving lastpwsid:   " + pwsId)
        var pwcDb = PlatwareDb.DbObj;
        var platwareItemObj = [
            {
                name: "lastPlatwareSessionId",
                value: pwsId
            }
        ];

        DbMethods.updateData(pwcDb, "platwareData", platwareItemObj, [], function () {
        }, function () {
        })
    },
    saveLastAuthTS: function (AuthTS) {
        var pwcDb = PlatwareDb.DbObj;
        var authItemObj = [{
                name: "lastAuthTS",
                value: AuthTS
            }];
        DbMethods.updateData(pwcDb, pwcProperties.tableName, authItemObj, [{name: "tableId", operator: "=", value: "1"}], function () {

        }, function () {
        });
        //update app table
    },
    orgDataChecker: function (tableName, data, successCallback, errorCallback, keypaths) {
        if (data.length > 0) {
            var dataObj = data;
            var dataItem = dataObj[0];
            var tempColumnArr = (Object.keys(dataItem).toString()).split(",");
            // alert(tempColumnArr);
            var pwcDb = PlatwareDb.DbObj;
            DbMethods.checkTable(pwcDb, tableName, function () {
                DbMethods.readData(PlatwareDb.DbObj, tableName, ["*"], {}, {name: "tableId", ordering: "ASC"}, function (tableData) {

                    var tableRows = tableData.length;
                    console.log(tableName + " with rows : " + tableRows)
                    switch (tableRows) {
                        case 0:
                        case "0":
                            proceedInsert(tableName, "1");
                            break;
                        case 1:
                        case "1":
                            // console.log(tableData)
                            if (tableData[0]["ORGID"] === pwcProperties.ORGID) {
                                if (tableData[0]["app_id"] === pwcProperties.Id) {
                                    proceedUpdate(tableName, "1")
                                }
                                else {
                                    var updateData = [{
                                            name: "tableId",
                                            value: "2"
                                        }
                                    ];
                                    var whereObj = [
                                        {
                                            name: "tableId",
                                            operator: "=",
                                            value: "1"
                                        }
                                    ];
                                    DbMethods.updateData(pwcDb, tableName, updateData, whereObj, function (result, tableName) {
                                        alert("updated")
                                        proceedInsert(tableName, "1");
                                    }, function (err) {
                                    });
                                }
                            }
                            else {
                                var updateData = [{
                                        name: "tableId",
                                        value: "2"
                                    }
                                ];
                                var whereObj = [
                                    {
                                        name: "tableId",
                                        operator: "=",
                                        value: "1"
                                    }
                                ];
                                DbMethods.updateData(pwcDb, tableName, updateData, whereObj, function (result, tableName) {
                                    proceedInsert(tableName, "1");
                                }, function (err) {
                                });
                            }
                            break;
                        case 2:
                        case "2":
                            if (tableData[0]["ORGID"] != tableData[1]["ORGID"]) {
                                if (tableData[0]["ORGID"] === pwcProperties.ORGID) {
                                    if (tableData[0]["app_id"] === pwcProperties.Id) {
                                        proceedUpdate(tableName, "1")
                                    }
                                    else {
                                        var clearObj = [
                                            {
                                                name: "tableId",
                                                operator: "=",
                                                value: "2"
                                            }
                                        ];
                                        clearData(clearObj, function () {
                                            var updateData = [{
                                                    name: "tableId",
                                                    value: "2"
                                                }
                                            ];
                                            var whereObj = [
                                                {
                                                    name: "tableId",
                                                    operator: "=",
                                                    value: "1"
                                                }
                                            ];
                                            DbMethods.updateData(pwcDb, tableName, updateData, whereObj, function (result, tableName) {
                                            }, function () {
                                                proceedInsert(tableName, "1");
                                            }, function () {
                                            })
                                        }, function () {

                                        })

                                    }
                                }
                                else if (tableData[1]["ORGID"] === pwcProperties.ORGID) {
                                    if (tableData[1]["app_id"] === pwcProperties.Id) {
                                        var updateData = [{
                                                name: "tableId",
                                                value: "2"
                                            }
                                        ];
                                        var whereObj = [
                                            {
                                                name: "tableId",
                                                operator: "=",
                                                value: "1"
                                            }
                                        ];
                                        DbMethods.updateData(PlatwareDb.DbObj, tableName, updateData, whereObj, function (result, tableName) {
                                            var updateData = [{
                                                    name: "tableId",
                                                    value: "1"
                                                }
                                            ];
                                            var whereObj = [
                                                {
                                                    name: "tableId",
                                                    operator: "=",
                                                    value: "2"
                                                },
                                                {
                                                    name: "ORGID",
                                                    operator: "=",
                                                    value: pwcProperties.ORGID
                                                },
                                                {
                                                    name: "app_id",
                                                    operator: "=",
                                                    value: pwcProperties.Id
                                                }
                                            ];
                                            clearData(whereObj, function () {
                                                proceedInsert(tableName, "1")
                                            }, function () {
                                            });
                                        }, function (err) {
                                        });
                                    }
                                    else {
                                        var clearObj = [
                                            {
                                                name: "tableId",
                                                operator: "=",
                                                value: "2"
                                            }
                                        ];
                                        clearData(clearObj, function () {
                                            var updateData = [{
                                                    name: "tableId",
                                                    value: "2"
                                                }
                                            ];
                                            var whereObj = [
                                                {
                                                    name: "tableId",
                                                    operator: "=",
                                                    value: "1"
                                                }
                                            ];
                                            DbMethods.updateData(PlatwareDb.DbObj, tableName, updateData, whereObj, function (result, tableName) {
                                                proceedInsert(tableName, "1")
                                            }, function () {
                                            })
                                        }, function () {
                                        });

                                    }
                                }
                                else {
                                    var clearObj = [
                                        {
                                            name: "tableId",
                                            operator: "=",
                                            value: "2"
                                        }
                                    ];
                                    clearData(clearObj, function () {
                                        var updateData = [{
                                                name: "tableId",
                                                value: "2"
                                            }
                                        ];
                                        var whereObj = [
                                            {
                                                name: "tableId",
                                                operator: "=",
                                                value: "1"
                                            }
                                        ];
                                        DbMethods.updateData(PlatwareDb.DbObj, tableName, updateData, whereObj, function (result, tableName) {
                                            proceedInsert(tableName, "1")
                                        }, function () {
                                        })
                                    }, function () {
                                    });

                                }
                            }
                            else
                            {
                                if (tableData[0]["ORGID"] === pwcProperties.ORGID) {
                                    if (tableData[0]["app_id"] != tableData[1]["app_id"]) {
                                        if (tableData[0]["app_id"] === pwcProperties.Id) {
                                            proceedUpdate(tableName, "1");
                                        }
                                        else if (tableData[1]["app_id"] === pwcProperties.Id) {
                                            var updateData = [{
                                                    name: "tableId",
                                                    value: "2"
                                                }];
                                            var whereObj = [{
                                                    name: "tableId",
                                                    operator: "=",
                                                    value: "1"
                                                }];
                                            DbMethods.updateData(PlatwareDb.DbObj, tableName, updateData, whereObj, function (result, tableName) {
                                                var whereObj = [{
                                                        name: "tableId",
                                                        operator: "=",
                                                        value: "2"

                                                    },
                                                    {
                                                        name: "ORGID",
                                                        operator: "=",
                                                        value: pwcProperties.ORGID

                                                    },
                                                    {
                                                        name: "app_id",
                                                        operator: "=",
                                                        value: pwcProperties.Id

                                                    }];

                                                clearData(whereObj, function () {
                                                    proceedInsert(tableName, "1")
                                                }, function () {
                                                });
                                            }, function () {
                                            })
                                        }
                                        else {
                                            var whereObj = [{
                                                    name: "tableId",
                                                    operator: "=",
                                                    value: "2"

                                                },
                                            ];

                                            clearData(whereObj, function () {
                                                var updateData = [{
                                                        name: "tableId",
                                                        value: "2"
                                                    }];
                                                var whereObj = [{
                                                        name: "tableId",
                                                        operator: "=",
                                                        value: "1"
                                                    }];
                                                DbMethods.updateData(PlatwareDb.DbObj, tableName, updateData, whereObj, function (result, tableName) {
                                                    proceedInsert(tableName, "1")
                                                });
                                            }, function () {
                                            });
                                        }
                                    }
                                }
                                else {
                                    var clearObj = [{name: "ORGID", operator: "=", value: orgId}, {name: "tableId", operator: "=", value: "2"}]
                                    clearData(clearObj, function () {
                                        var updateData = [{
                                                name: "tableId",
                                                value: "2"
                                            }];
                                        var whereObj = [{
                                                name: "tableId",
                                                operator: "=",
                                                value: "1"
                                            }];
                                        DbMethods.updateData(PlatwareDb.DbObj, tableName, updateData, whereObj, function (result, tableName) {
                                            proceedInsert(tableName, "1")
                                        });
                                    },
                                            function () {
                                            });
                                }

                            }
                            break;
                        default:
                            if (tableData[0]["ORGID"] === pwcProperties.ORGID) {
                                if (tableData[0]["app_id"] === pwcProperties.Id) {
                                    var clearObj = [{name: "tableId", operator: "=", value: "1"}]
                                    clearData(clearObj, function () {
                                        proceedInsert(tableName, "1");
                                    },
                                            function () {
                                            })
                                }
                                else {
                                    var clearObj = [{name: "tableId", operator: "=", value: "2"}]
                                    clearData(clearObj, function () {
                                        var updateData = [{
                                                name: "tableId",
                                                value: "2"
                                            }
                                        ];
                                        var whereObj = [
                                            {
                                                name: "tableId",
                                                operator: "=",
                                                value: "1"
                                            }
                                        ];
                                        DbMethods.updateData(pwcDb, tableName, updateData, whereObj, function (result, tableName) {
                                            proceedInsert(tableName, "1");
                                        }, function () {
                                        });
                                    },
                                            function () {
                                            })
                                }
                                //proceed delete with table id 1 and then insert
                            }
                            else if (tableData[tableRows - 1]["ORGID"] === pwcProperties.ORGID) {
                                if (tableData[tableRows - 1]["app_id"] === pwcProperties.Id) {
                                    var clearObj = [{name: "tableId", operator: "=", value: "2"}]
                                    clearData(clearObj, function () {
                                        var updateData = [{
                                                name: "tableId",
                                                value: "2"
                                            }
                                        ];
                                        var whereObj = [
                                            {
                                                name: "tableId",
                                                operator: "=",
                                                value: "1"
                                            }
                                        ];
                                        DbMethods.updateData(pwcDb, tableName, updateData, whereObj, function (result, tableName) {
                                            proceedInsert(tableName, "1");
                                        }, function () {
                                        });
                                    },
                                            function () {
                                            })
                                }
                                else {
                                    var clearObj = [{name: "tableId", operator: "=", value: "2"}]
                                    clearData(clearObj, function () {
                                        var updateData = [{
                                                name: "tableId",
                                                value: "2"
                                            }
                                        ];
                                        var whereObj = [
                                            {
                                                name: "tableId",
                                                operator: "=",
                                                value: "1"
                                            }
                                        ];
                                        DbMethods.updateData(pwcDb, tableName, updateData, whereObj, function (result, tableName) {
                                            proceedInsert(tableName, "1");
                                        }, function () {
                                        });
                                    },
                                            function () {
                                            });
                                }
                                //proceed delete with table id 2 , update tableid 1 to 2 and then proceed insert
                            }
                            else {
                                var clearObj = [{name: "tableId", operator: "=", value: "2"}]
                                clearData(clearObj, function () {
                                    var updateData = [{
                                            name: "tableId",
                                            value: "2"
                                        }
                                    ];
                                    var whereObj = [
                                        {
                                            name: "tableId",
                                            operator: "=",
                                            value: "1"
                                        }
                                    ];
                                    DbMethods.updateData(pwcDb, tableName, updateData, whereObj, function (result, tableName) {
                                        proceedInsert(tableName, "1");
                                    }, function () {
                                    });
                                },
                                        function () {
                                        });
                                //proceed delete with table id 2 , update tableid 1 to 2 and then proceed insert
                            }

                    }
                }, function () {

                })
            }, function () {

                var tempColumns = [
                    {
                        name: "tableId",
                        datatype: "integer"

                    },
                    {
                        name: "ORGID",
                        datatype: "text"
                    },
                    {
                        name: "app_id",
                        datatype: "text"
                    }
                ]
                for (var i = 0; i < tempColumnArr.length; i++) {
                    if ((tempColumnArr[i].toLowerCase() != "org_id") && (tempColumnArr[i].toLowerCase() != "app_id")) {
                        var tempColItem = {
                            name: tempColumnArr[i],
                            datatype: "text"
                        }
                        tempColumns.push(tempColItem);
                    }
                }
                //console.log(tempColumns);
                DbMethods.createTable(pwcDb, tableName, tempColumns, function (result, tableName) {

                    proceedInsert(tableName, "1");
                },
                        function () {

                        }, "", keypaths)
            });
            function proceedInsert(tableName, tableId) {
                console.log("Inserting " + tableName + " data");
                var finalData = [];
                // alert(JSON.stringify(dataObj))
                for (var j = 0; j < dataObj.length; j++) {
                    var rowData = [
                        {
                            name: "tableId",
                            value: tableId
                        },
                        {
                            name: "ORGID",
                            value: pwcProperties.ORGID
                        },
                        {
                            name: "app_id",
                            value: pwcProperties.Id
                        }
                    ];
                    var tempRowData = rowData;
                    for (var i = 0; i < tempColumnArr.length; i++) {
                        if ((tempColumnArr[i].toLowerCase() != "org_id") && (tempColumnArr[i].toLowerCase() != "app_id")) {
                            var tempRowItem = {
                                name: tempColumnArr[i],
                                value: dataObj[j][tempColumnArr[i]]
                            }

                            tempRowData.push(tempRowItem);
                        }

                    }
                    finalData.push(tempRowData);

                    //alert(JSON.stringify(finalData));
                }

                //  console.log("finaldata" + JSON.stringify(finalData))
                DbMethods.insertData(PlatwareDb.DbObj, tableName, finalData, function (result, tableName) {
                    successCallback();
                }, function (error, tableName) {
                    errorCallback()
                });
            }
            function proceedUpdate(tableName, tableId) {
                console.log("updating data : orgDataChecker");
                var whereObj = [
                    {
                        name: "ORGID",
                        operator: "=",
                        value: pwcProperties.ORGID
                    },
                    {
                        name: "app_id",
                        operator: "=",
                        value: pwcProperties.Id
                    }

                ];
                var rowData = [
                    {
                        name: "tableId",
                        value: tableId
                    },
                    {
                        name: "ORGID",
                        value: pwcProperties.ORGID
                    },
                    {
                        name: "app_id",
                        value: pwcProperties.Id
                    }
                ];

                for (var i = 0; i < tempColumnArr.length; i++) {
                    if ((tempColumnArr[i].toLowerCase() != "org_id") && (tempColumnArr[i].toLowerCase() != "app_id")) {
                        var tempRowItem = {
                            name: tempColumnArr[i],
                            value: dataObj[0][tempColumnArr[i]]
                        }
                        rowData.push(tempRowItem);
                    }

                }
                DbMethods.updateData(PlatwareDb.DbObj, tableName, rowData, whereObj, function (result) {
                    console.log(JSON.stringify(result))
                    successCallback()
                }, function () {
                    errorCallback()
                });

            }
            function clearData(whereObj, clearSuccess, clearError) {
                DbMethods.deleteData(pwcDb, tableName, whereObj, clearSuccess, clearError);
            }
        }
        else {
            successCallback();
            //DbMethods.createTable(pwcDb, tableName, [], function (result, tableName) {
            //    alert("created")
            //    successCallback();
            //    // proceedInsert(tableName, "1");
            //}, function () {

            //});

        }
    },
    checkParamCount: function (configTable, paramTable, successCallback, errorCallback) {
        var pwcDb = PlatwareDb.DbObj;
        var paramCount = 0;
        var paramRows = 0;
        DbMethods.readData(pwcDb, configTable, ["*"], [], [], function (data, table) {
            //   console.log(table)
            //  console.table(data)
            for (var i = 0; i < data.length; i++) {
                paramCount += parseInt(data[i]["parameter_count"]);
                //     console.log("current at "+i+":" + parseInt(data[i]["parameter_count"]) + "\ntotal:" + paramCount)
            }
            //alert(paramCount)
            if (data.length > 0) {
                if (paramCount > 0) {
                    DbMethods.readData(pwcDb, paramTable, ["*"], [], [], function (data, table) {
//                        console.log("params=="+table)
                        //                      console.table(data);
                        paramRows = data.length;
                        //            alert(paramRows)
                        if (paramCount === paramRows) {
                            successCallback();
                        }
                        else {
                            errorCallback();
                        }
                    }, errorCallback);
                }
                else {
                    //alert("data in "+paramTable+" exists but parameter_count in " + configTable + " is " + paramCount);
                    successCallback();
                }
            }
            else {

                errorCallback();
            }
        }, errorCallback);
    },
    getDeviceInfo: function () {
        var deviceInfo = {
            platform: "",
            model: "",
            make: "",
            osVersion: "",
        }
        var deviceType;
        try {
            if (device) {
                deviceType = "mobile"
            } else {
                deviceType = "PC"
            }
        }
        catch (exception) {
            deviceType = "PC";
        }
        console.log(deviceType);
        switch (deviceType) {
            case "mobile":
                (device.platform).toUpperCase() === "IPAD" ? deviceInfo = "IPHONE" : deviceInfo = (device.platform).toUpperCase();
                deviceInfo.model = device.model;
                deviceInfo.osVersion = device.version;
                break;
            case "PC":
                if (navigator.platform.toLowerCase().indexOf("win") >= 0 && navigator.platform.toLowerCase().indexOf("mac") < 0 && navigator.platform.toLowerCase().indexOf("linux") < 0 && navigator.platform.toLowerCase().indexOf("unix") < 0) {
                    deviceInfo.platform = "windows";
                    deviceInfo.osVersion = navigator.userAgent.toLowerCase().substr(navigator.userAgent.toLowerCase().indexOf("win") + 7, 7);
                }
                else if (navigator.platform.toLowerCase().indexOf("win") < 0 && navigator.platform.toLowerCase().indexOf("mac") >= 0 && navigator.platform.toLowerCase().indexOf("linux") < 0 && navigator.platform.toLowerCase().indexOf("unix") < 0) {
                    deviceInfo.platform = "mac";
                    deviceInfo.osVersion = navigator.userAgent.toLowerCase().substr(navigator.userAgent.toLowerCase().indexOf("mac os x") + 8, 6);
                }
                else if (navigator.platform.toLowerCase().indexOf("win") < 0 && navigator.platform.toLowerCase().indexOf("mac") < 0 && navigator.platform.toLowerCase().indexOf("linux") >= 0 && navigator.platform.toLowerCase().indexOf("unix") < 0) {
                    deviceInfo.platform = "linux";
                    deviceInfo.osVersion = navigator.userAgent.toLowerCase()
                }
                else if (navigator.platform.toLowerCase().indexOf("win") < 0 && navigator.platform.toLowerCase().indexOf("mac") < 0 && navigator.platform.toLowerCase().indexOf("linux") < 0 && navigator.platform.toLowerCase().indexOf("unix") >= 0) {
                    deviceInfo.platform = "unix";
                    deviceInfo.osVersion = navigator.userAgent.toLowerCase();

                } else {
                    deviceInfo.platform = navigator.platform;
                }

                if (navigator.userAgent.toLowerCase().indexOf("trident") > 0) {
                    deviceInfo.make = "IE";
                    deviceInfo.model = navigator.userAgent.substr(navigator.userAgent.toLowerCase().indexOf("trident") + 8, 2);
                }
                else if (navigator.userAgent.toLowerCase().indexOf("firefox") > 0) {
                    deviceInfo.make = "Firefox";
                    deviceInfo.model = navigator.userAgent.substr(navigator.userAgent.toLowerCase().indexOf("firefox") + 8, 2);
                }
                else if (navigator.userAgent.toLowerCase().indexOf("chrome") > 0) {
                    deviceInfo.make = "Chrome";
                    deviceInfo.model = navigator.userAgent.substr(navigator.userAgent.toLowerCase().indexOf("chrome") + 7, 2);
                }
                else if (navigator.userAgent.toLowerCase().indexOf("safari") > 0 && navigator.userAgent.toLowerCase().indexOf("chrome") < 0) {
                    deviceInfo.make = "Safari";
                    deviceInfo.model = navigator.userAgent.substr(navigator.userAgent.toLowerCase().indexOf("safari") + 7, 2);
                }
                else if (navigator.userAgent.toLowerCase().indexOf("opera") > 0 && navigator.userAgent.toLowerCase().indexOf("presto") > 0) {
                    deviceInfo.make = "opera";
                    deviceInfo.model = navigator.userAgent.substr(navigator.userAgent.toLowerCase().indexOf("opera") + 7, 2) || navigator.userAgent.substr(navigator.userAgent.toLowerCase().indexOf("presto") + 7, 2);
                }
                else {
                    deviceInfo.make = navigator.userAgent;
                    deviceInfo.model = navigator.userAgent;
                }
                break;
            default:

        }
        return deviceInfo;

    }
}
