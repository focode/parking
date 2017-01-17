/// <reference path="jquery.d.ts" />
/// <reference path="jquery.dataTables.d.ts" />
/// <reference path="q.d.ts" />
/// <reference path="ajaxLib.ts" />
var UltimateAjax;
(function (UltimateAjax) {
    var AjaxContainer = (function () {
        function AjaxContainer(value) {
            this.spinnerVisible = true;
            this.button = $('#formSubmit');
            this.hideProgress();
            var self = this;
            //  var recievedDataFromConstructor: string = this.getData();
            //  console.log("recievedDataFromConstructor::"+recievedDataFromConstructor);
            console.log("from constructor::+data");
            var button = document.querySelector('#formSubmit');
            button.addEventListener('click', function (e) {
                var someValueGlobal = "";
                // this.showProgress();
                console.log("on submit");
                // var houseNo= document.getElementById("houseNo").;
                // var houseNo = (<HTMLInputElement>document.getElementById("houseNo")).value;
                // console.log("houseNo:" + houseNo);
                // var recievedDataFromConstructor: JQueryPromise<string> = this.getData();
                //
                // console.log("recievedDataFromConstructor::" + recievedDataFromConstructor);
                // this.hideProgress();
                //async function getAjax(){
                var someValue = self.searchAjax();
                //return someValue;
                //}
                //this.someValueGlobal = await getAjax();
                //console.log("AFTER ASYNC");
                console.log("someValue::" + JSON.stringify(someValue));
                // async.map(myArray, self.searchAjax());
                //var object1 = new AjaxLib.AjaxContainer();
            });
        }
        AjaxContainer.prototype.searchAjax = function () {
            return $.ajax({
                url: "http://finance.google.com/finance/info?client=ig&q=NASDAQ:GOOGL",
                data: "",
                async: true,
                // data: { data },
                success: function (return_data) {
                    console.log("in success::" + JSON.stringify(return_data));
                    return JSON.stringify(return_data);
                },
                error: function (xhr, status, error) {
                    // var err = eval("(" + xhr.responseText + ")");
                    // console.log(err.Message);
                    // console.log("in error");
                    return error.Message;
                }
            });
        };
        AjaxContainer.prototype.showProgress = function () {
            if (!this.spinnerVisible) {
                $("div#spinner").fadeIn("fast");
                this.spinnerVisible = true;
            }
        };
        ;
        AjaxContainer.prototype.hideProgress = function () {
            if (this.spinnerVisible) {
                var spinner = $("div#spinner");
                spinner.stop();
                spinner.fadeOut("fast");
                this.spinnerVisible = false;
            }
        };
        ;
        return AjaxContainer;
    }());
    UltimateAjax.AjaxContainer = AjaxContainer;
})(UltimateAjax || (UltimateAjax = {}));
window.onload = function () {
    var object1 = new UltimateAjax.AjaxContainer();
};
//# sourceMappingURL=UltimateAjax.js.map