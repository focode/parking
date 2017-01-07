/// <reference path="jquery.d.ts" />
/// <reference path="jquery.dataTables.d.ts" />
module ajaxUtil {
  export class Helpers {
     public static Recreate<T>(typeT: { new (): T; }, sourceObj: T, targetObj?: T) {

         if (targetObj == null) {
             targetObj = new typeT();
         }

         for (var property in sourceObj) {
             targetObj[property] = sourceObj[property];
         }

         return targetObj;
     }
 }

 export class MyData {

     constructor(fromObj?: MyData) {
         this.C = 0;

         if (fromObj != null) {
             Helpers.Recreate(MyData, fromObj, this);
         }

         this.C += 2;
     }

     public A: number;
     public B: number;
     public C: number;
     public get D(): number { return this.A + this.B + this.C; }
 }

 export class ClassDemo {
     constructor() {

         var ajaxSettings: JQueryAjaxSettings = {
             url: "http://finance.google.com/finance/info?client=ig&q=NASDAQ:GOOGL", // Returns {"A":6,"B":4}
             type: "GET",
             dataType: "json",
             cache: false
         };

         var jqXhr: JQueryXHR = $.ajax(ajaxSettings);
         jqXhr.done(this.loadSucceeded);
         jqXhr.fail( /* ... */);
     }

     private loadSucceeded(data: MyData, text: string, jqXhr: JQueryXHR) {

         // Illustrates the problem that MyData.C and MyData.D are undefined even though the type is in the signature
         // Displays "6 + 4 + undefined = undefined"
         alert(data.A + " + " + data.B + " + " + data.C + " = " + data.D);

         // The default output for a brand new MyData object; undefined and NaN values are as expected
         // Displays "undefined + undefined + 2 = NaN"
         var plainData: MyData = new MyData();
         alert(plainData.A + " + " + plainData.B + " + " + plainData.C + " = " + plainData.D);

         // This creates a real instance of MyData using the helper method directly and produces the right output
         // Displays "6 + 4 + 2 = 12"
         var recreatedData: MyData = Helpers.Recreate(MyData, data);
         alert(recreatedData.A + " + " + recreatedData.B + " + " + recreatedData.C + " = " + recreatedData.D);

         // This uses the helper method located in the constructor to rebuild 'data' from itself and produces the right output
         // Displays "6 + 4 + 2 = 12"
         data = new MyData(data);
         alert(data.A + " + " + data.B + " + " + data.C + " = " + data.D);
     }
 }
}

var sample = new ajaxUtil.ClassDemo();
