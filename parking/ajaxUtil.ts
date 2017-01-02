/// <reference path="jquery.d.ts" />
module AjaxLibrary {
    export class ajaxContainer {
        private receivedData: any;
        private settings = {};

        constructor() {

            this.settings = {
                async: true,
                crossDomain: false,
                dataType: 'jsonp',
                url: '',
                method: '',
                headers: {
                    'cache-control': "pubilc",
                    'content-type': "application/json",
                    'Access-Control-Allow-Origin': '*'
                    // 'Access-Control-Allow-Origin': "*",
                    // 'origin': "*",
                    //'p3p': 'CP=IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT',

                },
                processData: false,
                data: '',
                'Access-Control-Allow-Origin': '*',
                'error': function(data?: any) {
                console.log(data.statusText);


                }
            };

        }

        public SendRequest(url?: any, data?: any, method?: any): any {
            this.settings['url'] = url;
            this.settings['data'] = data;
            this.settings['method'] = method;
            return $.when($.ajax(this.settings));
        }
    }
}

window.onload = () => {
    var object1 = new AjaxLibrary.ajaxContainer();
    var returnedVal = object1.SendRequest("http://finance.google.com/finance/info?client=ig&q=NASDAQ:NVDA","","get");
    console.log("returnedVal"+returnedVal);
}
