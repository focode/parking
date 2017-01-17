/// <reference path="jquery.d.ts" />
/// <reference path="jquery.dataTables.d.ts" />
/// <reference path="q.d.ts" />
/// <reference path="ajaxLib.ts" />
module UltimateAjax {

    export class AjaxContainer {
        private submitButton: JQuery;
        private spinnerVisible: boolean = true;
        private button: JQuery = $('#formSubmit');

        constructor(value?: any) {
            this.hideProgress();
            var self = this;
            //  var recievedDataFromConstructor: string = this.getData();
            //  console.log("recievedDataFromConstructor::"+recievedDataFromConstructor);

            console.log("from constructor::+data");
            var button = document.querySelector('#formSubmit');
            button.addEventListener('click', function(e){
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
                  var someValue =  self.searchAjax();
                  //return someValue;
                //}
                //this.someValueGlobal = await getAjax();
                //console.log("AFTER ASYNC");
                console.log("someValue::"+JSON.stringify(someValue));
                // async.map(myArray, self.searchAjax());

                //var object1 = new AjaxLib.AjaxContainer();
            });



        }







  public  searchAjax(): any
        {
        return $.ajax({
          url: "http://finance.google.com/finance/info?client=ig&q=NASDAQ:GOOGL",
          data: "",
          async:true,
            // data: { data },
            success: function (return_data:any)
            {
                console.log("in success::"+JSON.stringify(return_data));
                return JSON.stringify(return_data);
            },
            error: function (xhr:any, status:any, error:any)
            {
                // var err = eval("(" + xhr.responseText + ")");
                // console.log(err.Message);
                // console.log("in error");
                return error.Message;
            }
});
}

        public showProgress() {
            if (!this.spinnerVisible) {
                $("div#spinner").fadeIn("fast");
                this.spinnerVisible = true;
            }
        };

        public hideProgress() {
            if (this.spinnerVisible) {
                var spinner = $("div#spinner");
                spinner.stop();
                spinner.fadeOut("fast");
                this.spinnerVisible = false;
            }
        };
    }
}

 window.onload = () => {
     var object1 = new UltimateAjax.AjaxContainer();

 }
