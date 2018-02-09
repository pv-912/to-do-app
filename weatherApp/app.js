var yargs = require('yargs');
var geocode = require('./geocode/geocode');


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
		console.log(JSON.stringify(results, undefined, 2));
	}
});