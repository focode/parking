// import * as $ from 'jquery'
/// <reference path="jquery.d.ts" />
/// <reference path="jquery.dataTables.d.ts" />
var LocateParking;
(function (LocateParking) {
    var locateParkingContainer = (function () {
        function locateParkingContainer(value) {
            //    document.body.innerHTML = value;
            var el = document.getElementById('grid1');
            $(el).css({ "color": "blue" });
            var button = document.querySelector('#submitButton');
            button.addEventListener('click', function (e) {
                e.preventDefault();
                console.log("in sumit");
                // var HouseNo: HTMLElement = document.getElementById('HouseNo');
                var houseNo = document.getElementById("HouseNo").value;
                var StreetName = document.getElementById("StreetName").value;
                var Pincode = document.getElementById("Pincode").value;
                var Locality = document.getElementById("Locality").value;
                var City = document.getElementById("City").value;
                var Mobile = document.getElementById("Mobile").value;
                var ParkingType = document.getElementById("ParkingType").value;
                var Rate = document.getElementById("Rate").value;
                console.log("searching...");
                console.log("HouseNo:" + houseNo + " StreetName:" + StreetName + " Pincode:" + Pincode +
                    " Locality:" + Locality + " City:" + City + " Mobile:" + Mobile + " ParkingType:" + ParkingType + " Rate" + Rate);
            });
            var dt = $('#example').DataTable({
                "ajax": "http://localhost:3001/all/parking",
                "columns": [
                    { "data": "ownerName" },
                    { "data": "houseNo" },
                    { "data": "streetName" },
                    { "data": "areaName" },
                    { "data": "city" },
                    { "data": "pinZip" }
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
        return locateParkingContainer;
    }());
    LocateParking.locateParkingContainer = locateParkingContainer;
})(LocateParking || (LocateParking = {}));
window.onload = function () {
    var object1 = new LocateParking.locateParkingContainer("ram");
};
//# sourceMappingURL=locateParking.js.map