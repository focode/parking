// import * as $ from 'jquery'
/// <reference path="jquery.d.ts" />
/// <reference path="jquery.dataTables.d.ts" />
module Home {
    export class HomeContainer {
        private content: HTMLElement;
        private _possessions: Array<string> = new Array<string>();
        private _possessions1: Array<string> = [];

        constructor(value?: any) {
            //    document.body.innerHTML = value;
            var num:number = 0
            var count:number = 0;
            var el: HTMLElement = document.getElementById('grid1');
            $(el).css({ "color": "blue" });
            for(num = 0;num<=100;){
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
            $('#example tbody').on('click', 'tr', function() {
                var detailRows = [];
                var tr = $(this).closest('tr');
                var row = dt.row(tr);
                console.log(dt.row(this).data());
                localStorage.setItem

            });



        }

    }


}

window.onload = () => {
    var object1 = new Home.HomeContainer("ram");
}
