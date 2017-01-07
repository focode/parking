/// <reference path="jquery.d.ts" />
/// <reference path="jquery.dataTables.d.ts" />
/// <reference path="q.d.ts" />
module UltimateAjax {

    export class AjaxContainer {
        private submitButton: JQuery;
        private spinnerVisible: boolean = true;
        private button: JQuery = $('#formSubmit');
        constructor(value?: any) {
            this.hideProgress();
            //  var recievedDataFromConstructor: string = this.getData();
            //  console.log("recievedDataFromConstructor::"+recievedDataFromConstructor);

            console.log("from constructor::+data");
            $("#formSubmit").on("click", (event) => {
                this.showProgress();
                console.log("As you can see, the link no longer took you to timecockpit.com");
                // var houseNo= document.getElementById("houseNo").;
                var houseNo = (<HTMLInputElement>document.getElementById("houseNo")).value;
                console.log("houseNo:" + houseNo);
                var recievedDataFromConstructor: string = this.getData();
                console.log("recievedDataFromConstructor::" + recievedDataFromConstructor);
                this.hideProgress();
            });
        }

        public getData(): string {
            var recievedData: string;
            $.ajax({
                url: "http://finance.google.com/finance/info?client=ig&q=NASDAQ:GOOGL",
                data: "",
                success: function(value?: string) {
                    recievedData = value;
                },

                type: "GET",
                async: false,
                //  dataType: "jsonp"
            });

            return recievedData;
        }


    public Create() {
        var self = this;
        var ajaxOptions: JQueryAjaxSettings = {
            async: true,
            url: "http://finance.google.com/finance/info?client=ig&q=NASDAQ:GOOGL",
            data: "", //<----remove self from here.
            method: "POST",
            global: true,
            success: function () {
                window.location.href = this.indexUrl;
            },
            error: function () {
            }
        }
        $.ajax(ajaxOptions);
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
