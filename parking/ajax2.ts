/// <reference path="jquery.d.ts" />
/// <reference path="jquery.dataTables.d.ts" />
module ajax2 {
    export class Helpers2 {

        constructor() {
            var obj1: Helpers3 = new Helpers3();
            obj1._loadAsync("http://www.google.com")
        }
    }

    export class Helpers3 {
        constructor() { }
        public _loadAsync(url:string):JQueryPromise<any> {
           var deferred = $.Deferred();
           $.ajax({
             url: "http://finance.google.com/finance/info?client=ig&q=NASDAQ:GOOGL",
             data: "",
             success: function (value?:string) {
                   alert("success");
                   alert(value);
               },

             type: "GET",
           }).done(() => deferred.resolve())
             .fail(() => deferred.reject());

             return deferred.promise();
       }

	}

}



window.onload = () => {
    var object1 = new ajax2.Helpers2();
}
