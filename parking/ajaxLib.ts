/// <reference path="jquery.d.ts" />
/// <reference path="jquery.dataTables.d.ts" />
/// <reference path="q.d.ts" />
module AjaxLib {

    export class AjaxContainer {

        constructor(value?: any) {

            var self = this;
            //  var recievedDataFromConstructor: string = this.getData();
            //  console.log("recievedDataFromConstructor::"+recievedDataFromConstructor);

            console.log("from constructor::+data");
            var button = document.querySelector('#formSubmit');
            button.addEventListener('click', function(e){

                // this.showProgress();
                // console.log("on submit");
                // var someValue = self.searchAjax();
                  var url = "http://finance.google.com/finance/info?client=ig&q=NASDAQ:GOOGL";
                self.myFunc(url).done((valFromPromiseOne: any) => { alert("valFromPromiseOne:"+valFromPromiseOne); })
        });
      }


    public  myFunc(urlData: string): JQueryPromise<any>
      {
          console.log("urlData::"+urlData);
          var dfd = $.Deferred<void>();

          $.ajax({
              url: urlData,
              data: "",
              success: function(value?: string) {
                  console.log("success");
                  dfd.resolve(value);
              },
              error: function(textStatus, errorThrown){
                console.log("error");
                dfd.resolve("mycustomerror");
              },
              type: "GET",
              // async: true,
              // dataType: "jsonp"
          });

          return dfd.promise();
      }


    }
}
window.onload = () => {
    var object1 = new AjaxLib.AjaxContainer();

}
