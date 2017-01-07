/// <reference path="jquery.d.ts" />
/// <reference path="jquery.dataTables.d.ts" />
var ajaxUtil;
(function (ajaxUtil) {
    var Helpers = (function () {
        function Helpers() {
        }
        Helpers.Recreate = function (typeT, sourceObj, targetObj) {
            if (targetObj == null) {
                targetObj = new typeT();
            }
            for (var property in sourceObj) {
                targetObj[property] = sourceObj[property];
            }
            return targetObj;
        };
        return Helpers;
    }());
    ajaxUtil.Helpers = Helpers;
    var MyData = (function () {
        function MyData(fromObj) {
            this.C = 0;
            if (fromObj != null) {
                Helpers.Recreate(MyData, fromObj, this);
            }
            this.C += 2;
        }
        Object.defineProperty(MyData.prototype, "D", {
            get: function () { return this.A + this.B + this.C; },
            enumerable: true,
            configurable: true
        });
        return MyData;
    }());
    ajaxUtil.MyData = MyData;
    var ClassDemo = (function () {
        function ClassDemo() {
            var ajaxSettings = {
                url: "http://finance.google.com/finance/info?client=ig&q=NASDAQ:GOOGL",
                type: "GET",
                dataType: "json",
                cache: false
            };
            var jqXhr = $.ajax(ajaxSettings);
            jqXhr.done(this.loadSucceeded);
            jqXhr.fail();
        }
        ClassDemo.prototype.loadSucceeded = function (data, text, jqXhr) {
            // Illustrates the problem that MyData.C and MyData.D are undefined even though the type is in the signature
            // Displays "6 + 4 + undefined = undefined"
            alert(data.A + " + " + data.B + " + " + data.C + " = " + data.D);
            // The default output for a brand new MyData object; undefined and NaN values are as expected
            // Displays "undefined + undefined + 2 = NaN"
            var plainData = new MyData();
            alert(plainData.A + " + " + plainData.B + " + " + plainData.C + " = " + plainData.D);
            // This creates a real instance of MyData using the helper method directly and produces the right output
            // Displays "6 + 4 + 2 = 12"
            var recreatedData = Helpers.Recreate(MyData, data);
            alert(recreatedData.A + " + " + recreatedData.B + " + " + recreatedData.C + " = " + recreatedData.D);
            // This uses the helper method located in the constructor to rebuild 'data' from itself and produces the right output
            // Displays "6 + 4 + 2 = 12"
            data = new MyData(data);
            alert(data.A + " + " + data.B + " + " + data.C + " = " + data.D);
        };
        return ClassDemo;
    }());
    ajaxUtil.ClassDemo = ClassDemo;
})(ajaxUtil || (ajaxUtil = {}));
var sample = new ajaxUtil.ClassDemo();
//# sourceMappingURL=ajaxUtil.js.map