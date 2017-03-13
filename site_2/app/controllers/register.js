import Ember from 'ember';

export default Ember.Controller.extend({
	
	actions: {
    register: function() {
		var ownerName = document.getElementById("ownerName").value;
		var houseFlatNo = document.getElementById("houseFlatNo").value;
		var societyName = document.getElementById("societyName").value;
		var areaName = document.getElementById("areaName").value;
		var street = document.getElementById("street").value;
		var state = document.getElementById("state").value;
		var city = document.getElementById("city").value;
		var country = document.getElementById("country").value;
		var pinZip = document.getElementById("pinZip").value;
		var type = document.getElementById("type").value;
		var rate = document.getElementById("rate").value;
		var contactNo = document.getElementById("contactNo").value;
		var time = document.getElementById("time").value;
		
		var restisterData = {};
		restisterData.ownerName = ownerName;					 
		restisterData.houseNo = houseFlatNo;
//		restisterData.societyName = societyName;
		restisterData.areaName = areaName;
		restisterData.streetName = street;
		restisterData.city = city;
		restisterData.stateProvince = state;
		restisterData.country = country;
		restisterData.pinZip = pinZip;
		restisterData.shaded = type;
		restisterData.rate = rate;
//		restisterData.time = time;
		restisterData.contactNo = contactNo;
		var actualData = JSON.stringify(restisterData);
		console.log(actualData);
		$.ajax({		
		method: "POST",
		async:true,
		cache: false,		
		url: "http://185.62.38.196:3001/addParking",		
		dataType: "json",
		crossDomain: true,
		data: actualData,
		contentType: "application/json;charset=UTF-8",
		headers: {
          'Content-Type':'application/json;charset=UTF-8'
                 },
		success: function (json) {
                   alert("Success:"+json);
                    },
		
		error: function(jqXHR,textStatus,errorThrown){
			alert("failed"+errorThrown);
			console.log("failed:"+errorThrown);
		}
		
		});
		
		alert("registered:"+JSON.stringify(restisterData));
	}}
	
	
});
