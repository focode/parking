  // import * as $ from 'jquery'
  import $ = require("jquery")
  export class AjaxContainer {
      private content: HTMLElement;

      constructor(engine: string) {
      alert(engine);

    //    document.body.innerHTML = value;

      var el: HTMLElement = document.getElementById('grid2');
      $(el).css({"color": "blue" });



      }

    }
