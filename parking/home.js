// import * as $ from 'jquery'
/// <reference path="jquery.d.ts" />
/// <reference path="jquery.dataTables.d.ts" />
var Home;
(function (Home) {
    var HomeContainer = (function () {
        function HomeContainer(value) {
            this._possessions = new Array();
            this._possessions1 = [];
            //    document.body.innerHTML = value;
            var num = 0;
            var count = 0;
            var el = document.getElementById('grid1');
            $(el).css({ "color": "blue" });
            for (num = 0; num <= 100;) {
                this._possessions.push("hi");
                this._possessions1.push("hi2");
            }
            // $.ajax({
            //   url: "http://finance.google.com/finance/info?client=ig&q=NASDAQ:GOOGL",
            //   data: "",
            //   success: function (value?:string) {
            //         alert("success");
            //         alert(value);
            //     },
            //
            //   type: "GET",
            // });
            var dt = $('#example').DataTable({
                "ajax": "http://api.myjson.com/bins/75grb",
                "columns": [
                    { "data": "name" },
                    { "data": "position" },
                    { "data": "office" },
                    { "data": "extn" },
                    { "data": "start_date" },
                    { "data": "salary" }
                ]
            });
            // $('#example tbody').on('click', 'tr', function () {
            //   var tr = $(this).parents('tr');
            //   var row = dt.row(tr);
            //     alert("row was ");
            //
            //   } );
            $('#example tbody').on('click', 'tr', function () {
                var detailRows = [];
                var tr = $(this).closest('tr');
                var row = dt.row(tr);
                console.log(dt.row(this).data());
                localStorage.setItem;
            });
        }
        return HomeContainer;
    }());
    Home.HomeContainer = HomeContainer;
})(Home || (Home = {}));
window.onload = function () {
    var object1 = new Home.HomeContainer("ram");
};
//# sourceMappingURL=home.js.map