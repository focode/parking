/// <reference path="jquery.d.ts" />
/// <reference path="jquery.dataTables.d.ts" />
/// <reference path="q.d.ts" />
var UltimateAjax;
(function (UltimateAjax) {
    var AjaxContainer = (function () {
        function AjaxContainer(value) {
            var _this = this;
            this.spinnerVisible = true;
            this.button = $('#formSubmit');
            this.hideProgress();
            //  var recievedDataFromConstructor: string = this.getData();
            //  console.log("recievedDataFromConstructor::"+recievedDataFromConstructor);
            console.log("from constructor::+data");
            $("#formSubmit").on("click", function (event) {
                _this.showProgress();
                console.log("As you can see, the link no longer took you to timecockpit.com");
                // var houseNo= document.getElementById("houseNo").;
                var houseNo = document.getElementById("houseNo").value;
                console.log("houseNo:" + houseNo);
                var recievedDataFromConstructor = _this.getData();
                console.log("recievedDataFromConstructor::" + recievedDataFromConstructor);
                _this.hideProgress();
            });
        }
        AjaxContainer.prototype.getData = function () {
            var recievedData;
            $.ajax({
                url: "http://finance.google.com/finance/info?client=ig&q=NASDAQ:GOOGL",
                data: "",
                success: function (value) {
                    recievedData = value;
                },
                type: "GET",
                async: false,
            });
            return recievedData;
        };
        AjaxContainer.prototype.Create = function () {
            var self = this;
            var ajaxOptions = {
                async: true,
                url: "http://finance.google.com/finance/info?client=ig&q=NASDAQ:GOOGL",
                data: "",
                method: "POST",
                global: true,
                success: function () {
                    window.location.href = this.indexUrl;
                },
                error: function () {
                }
            };
            $.ajax(ajaxOptions);
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
//# sourceMappingURL=newAjax.js.map