// import * as $ from 'jquery'
/// <reference path="jquery.d.ts" />
/// <reference path="jquery.dataTables.d.ts" />
module RegisterParking {
    export class registerParkingContainer {
        private content: HTMLElement;


        constructor(value?: any) {
            //    document.body.innerHTML = value;

            var el: HTMLElement = document.getElementById('grid1');
            $(el).css({ "color": "blue" });
            var button = document.querySelector('#submitButton');
            button.addEventListener('click', function(e){
            e.preventDefault();
            console.log("in sumit");
              // var HouseNo: HTMLElement = document.getElementById('HouseNo');
              var HouseNo = (<HTMLInputElement>document.getElementById("HouseNo")).value;
              var StreetName = (<HTMLInputElement>document.getElementById("StreetName")).value;
              var Pincode = (<HTMLInputElement>document.getElementById("Pincode")).value;
              var Locality = (<HTMLInputElement>document.getElementById("Locality")).value;
              var City = (<HTMLInputElement>document.getElementById("City")).value;
              var Mobile = (<HTMLInputElement>document.getElementById("Mobile")).value;
              var ParkingType = (<HTMLInputElement>document.getElementById("ParkingType")).value;
              var Rate = (<HTMLInputElement>document.getElementById("Rate")).value;
              console.log("searching...");
              console.log("HouseNo:"+HouseNo+" StreetName:"+StreetName+" Pincode:"+Pincode+
              " Locality:"+Locality+" City:"+City+" Mobile:"+Mobile+" ParkingType:"+ParkingType+" Rate"+Rate);
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
    var object1 = new RegisterParking.registerParkingContainer("ram");
}
