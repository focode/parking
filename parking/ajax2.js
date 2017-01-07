/// <reference path="jquery.d.ts" />
/// <reference path="jquery.dataTables.d.ts" />
var ajax2;
(function (ajax2) {
    var Helpers2 = (function () {
        function Helpers2() {
            var obj1 = new Helpers3();
            obj1._loadAsync("http://www.google.com");
        }
        return Helpers2;
    }());
    ajax2.Helpers2 = Helpers2;
    var Helpers3 = (function () {
        function Helpers3() {
        }
        Helpers3.prototype._loadAsync = function (url) {
            var deferred = $.Deferred();
            $.ajax({
                url: "http://finance.google.com/finance/info?client=ig&q=NASDAQ:GOOGL",
                data: "",
                success: function (value) {
                    alert("success");
                    alert(value);
                },
                type: "GET",
            }).done(function () { return deferred.resolve(); })
                .fail(function () { return deferred.reject(); });
            return deferred.promise();
        };
        return Helpers3;
    }());
    ajax2.Helpers3 = Helpers3;
})(ajax2 || (ajax2 = {}));
window.onload = function () {
    var object1 = new ajax2.Helpers2();
};
//# sourceMappingURL=ajax2.js.map