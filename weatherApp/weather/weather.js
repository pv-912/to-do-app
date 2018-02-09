var request = require('request');

var weatherInfo = (lat, lng, callback) => {

	request({
		url : `https://api.darksky.net/forecast/6c1ad2e860ed7189d561bf60ef3c9e9f/${lat},${lng}`,
		json : true
	}, (error, response, body) => {
		if(error){
			callback('Unable to connect to forecast.io ');
		} else if(response.statusCode === 400){
			callback(' unable to fetch data ');
		} else if(response.statusCode === 200){
			callback(undefined,{
				temperature : body.currently.temperature,
				apparentTemperature : body.currently.apparentTemperature
			});
		}
	});
};

module.exports.weatherInfo = weatherInfo; 