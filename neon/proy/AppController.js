require('neon');
require('./Downloader.js');

Class('AppController')({
    myClassFunc : function(){

    },

    myClassProperty : 'myString',

    getinstace : function(){
        //normally used for singleton instances
    },

    prototype : {

        _status : 'serverUp',

        init : function(config){
            console.log('This is my constructor', config.instanceParamOne);
            //start webserver
            //this.webServer = new Webserver();
            this._bindEvents();
        },


        _bindEvents : function(){
            //this.webServer Listen to new data from client
            //then handle data

        },

        _handleData : function(){
           //this.sources Controller we need to wait for data to executre this
        },

        checkServerStatus : function(){

            return 'Ok';
        },

        getServerStatus : function(){
            return this._status;
        }
    }
});

AppController.myClassFunc();

var myAppInstace = new AppController({
    instanceParamOne : 343
});

console.log('This is the server Status: ', myAppInstace.checkServerStatus());
console.log('This is the server Status: ', myAppInstace.getServerStatus());




