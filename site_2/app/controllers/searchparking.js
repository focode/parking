import Ember from 'ember';


export default Ember.Controller.extend({
	
	data: '',
	isTableEnabled: false,
	
	actions: {
    search: function() {
        
		var tempData;
	    $.ajax({		
		type: "GET",
		async:false,
		cache: false,		
		url: "http://185.62.38.196:3001/all/parking",		
		dataType: "json",		
		contentType: "",
		success: function (json) {//On Successful service call
                   tempData = json;
                    },
		
		error: function(){
			alert("failed");
		}
		
		}); 
	  this.set('isTableEnabled', true);
	  this.set('data', tempData);
    }
	}
	
	
	
	
	
});