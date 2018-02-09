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
				// body is the data came back as a response as from google api a json is came  back
				//console.log(JSON.stringify(body, undefined, 2));  //JSON.stringify( string data, filter te data, space u want to indent) 
				// console.log(JSON.stringify(response, undefined, 2));
				// console.log(JSON.stringify(error, undefined, 2));
				// console.log(`Address : ${body.results[0].formatted_address}`);
				// console.log(`Longitude : ${body.results[0].geometry.location.lat}`);
				// console.log(`Latitude : ${body.results[0].geometry.location.lng}`);
			}

		});
};

module.exports.geocodeAddress = geocodeAddress; 