/// <reference path="jquery.d.ts" />
var AjaxLibrary;
(function (AjaxLibrary) {
    var ajaxContainer = (function () {
        function ajaxContainer() {
            this.settings = {};
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
                },
                processData: false,
                data: '',
                'Access-Control-Allow-Origin': '*',
                'error': function (data) {
                    console.log(data.statusText);
                }
            };
        }
        ajaxContainer.prototype.SendRequest = function (url, data, method) {
            this.settings['url'] = url;
            this.settings['data'] = data;
            this.settings['method'] = method;
            return $.when($.ajax(this.settings));
        };
        return ajaxContainer;
    }());
    AjaxLibrary.ajaxContainer = ajaxContainer;
})(AjaxLibrary || (AjaxLibrary = {}));
window.onload = function () {
    var object1 = new AjaxLibrary.ajaxContainer();
    var returnedVal = object1.SendRequest("http://finance.google.com/finance/info?client=ig&q=NASDAQ:NVDA", "", "get");
    console.log("returnedVal" + returnedVal);
};
//# sourceMappingURL=ajaxUtil.js.map