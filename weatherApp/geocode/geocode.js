var request = require('request');

var geocodeAddress = (address, callback) => {
	var encodedAddress = encodeURIComponent(address);
	request({
			url : `https://maps.google.com/maps/api/geocode/json?address=${encodedAddress}`,
			json : true
		} , (error, response, body) => {
			if(error){
				callback('Unable to connect google server');
			} else if(body.status === "ZERO_RESULTS"){
				callback('not a valid address');
			} else if(body.status === "OK"){
				callback(undefined, {
					address : body.results[0].formatted_address,
					Longitude : body.results[0].geometry.location.lat,
					Latitude : body.results[0].geometry.location.lng
				});
			}
		});
	};

module.exports.geocodeAddress = geocodeAddress; 