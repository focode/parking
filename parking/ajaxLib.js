/// <reference path="jquery.d.ts" />
/// <reference path="jquery.dataTables.d.ts" />
/// <reference path="q.d.ts" />
var AjaxLib;
(function (AjaxLib) {
    var AjaxContainer = (function () {
        function AjaxContainer(value) {
            var self = this;
            //  var recievedDataFromConstructor: string = this.getData();
            //  console.log("recievedDataFromConstructor::"+recievedDataFromConstructor);
            console.log("from constructor::+data");
            var button = document.querySelector('#formSubmit');
            button.addEventListener('click', function (e) {
                // this.showProgress();
                // console.log("on submit");
                // var someValue = self.searchAjax();
                var url = "http://finance.google.com/finance/info?client=ig&q=NASDAQ:GOOGL";
                self.myFunc(url).done(function (valFromPromiseOne) { alert("valFromPromiseOne:" + valFromPromiseOne); });
            });
        }
        AjaxContainer.prototype.myFunc = function (urlData) {
            console.log("urlData::" + urlData);
            var dfd = $.Deferred();
            $.ajax({
                url: urlData,
                data: "",
                success: function (value) {
                    console.log("success");
                    dfd.resolve(value);
                },
                error: function (textStatus, errorThrown) {
                    console.log("error");
                    dfd.resolve("mycustomerror");
                },
                type: "GET",
            });
            return dfd.promise();
        };
        return AjaxContainer;
    }());
    AjaxLib.AjaxContainer = AjaxContainer;
})(AjaxLib || (AjaxLib = {}));
window.onload = function () {
    var object1 = new AjaxLib.AjaxContainer();
};
//# sourceMappingURL=ajaxLib.js.map