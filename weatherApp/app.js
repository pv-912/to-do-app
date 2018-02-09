var yargs = require('yargs');
var geocode = require('./geocode/geocode');
var weather = require('./weather/weather');

var argv  = yargs
	.options({
		a : {
			demand : true,
			alias : 'address',
			describe : 'Address to fetch for weather app',
			string : true
		}
	})
	.help()
	.alias('help','h')
	.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
	if(errorMessage){
		console.log(errorMessage);
	} else{
		console.log(results.address);
		console.log(results.Latitude);
		console.log(results.Longitude);

		weather.weatherInfo(results.Latitude,results.Longitude , (errorMessage, weatherResults) => {
			if(errorMessage){
				console.log(errorMessage);
			}else{
				console.log(`It's is ${weatherResults.temperature} degree Celcius But it feels like ${weatherResults.apparentTemperature} deg.` );
			}
		});
	}
});



