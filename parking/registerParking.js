// import * as $ from 'jquery'
/// <reference path="jquery.d.ts" />
/// <reference path="jquery.dataTables.d.ts" />
var RegisterParking;
(function (RegisterParking) {
    var registerParkingContainer = (function () {
        function registerParkingContainer(value) {
            //    document.body.innerHTML = value;
            var el = document.getElementById('grid1');
            $(el).css({ "color": "blue" });
            var button = document.querySelector('#submitButton');
            button.addEventListener('click', function (e) {
                e.preventDefault();
                console.log("in sumit");
                // var HouseNo: HTMLElement = document.getElementById('HouseNo');
                var HouseNo = document.getElementById("HouseNo").value;
                var StreetName = document.getElementById("StreetName").value;
                var Pincode = document.getElementById("Pincode").value;
                var Locality = document.getElementById("Locality").value;
                var City = document.getElementById("City").value;
                var Mobile = document.getElementById("Mobile").value;
                var ParkingType = document.getElementById("ParkingType").value;
                var Rate = document.getElementById("Rate").value;
                console.log("searching...");
                console.log("HouseNo:" + HouseNo + " StreetName:" + StreetName + " Pincode:" + Pincode +
                    " Locality:" + Locality + " City:" + City + " Mobile:" + Mobile + " ParkingType:" + ParkingType + " Rate" + Rate);
                var data = {};
                data["houseNo"] = HouseNo;
                data["streetName"] = StreetName;
                data["pinZip"] = Pincode;
                data["city"] = City;
                data["contactNo"] = Mobile;
                data["shaded"] = ParkingType;
                data["rate"] = Rate;
                var json = JSON.stringify(data);
                alert(json);
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
        return registerParkingContainer;
    }());
    RegisterParking.registerParkingContainer = registerParkingContainer;
})(RegisterParking || (RegisterParking = {}));
window.onload = function () {
    var object1 = new RegisterParking.registerParkingContainer("ram");
};
//# sourceMappingURL=registerParking.js.map