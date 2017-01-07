class CurrencyExchangeRateCreate {
    // all the class properties and methods without any event binding.

    private form: JQuery = $("#createForm");
    private submitButton: JQuery = $("#submitButton");

    // a suggestion for the constructor:
    constructor(createUrl, indexUrl) {
      this.createUrl = createUrl;
      this.indexUrl  = indexUrl;
    }

    // some changes in create method:

    public Create() {
        var self = this;
        var ajaxOptions: JQueryAjaxSettings = {
            async: true,
            url: this.createUrl,
            data: form.serialize(), //<----remove self from here.
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

}


var button = document.querySelector('#submitButton');

button.addEventListener('click', function(e){
    e.preventDefault(); // stop the form submission.
    var createUrl = @Url.Action("Create", "Currency"),
        indexUrl  = @Url.Action("Index", "Currency");

    var x         = new CurrencyExchangeRateCreate(createUrl, indexUrl);
        x.Create(); // call the create method here.
});
