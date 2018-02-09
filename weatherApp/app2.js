var yargs = require('yargs');
var axios = require('axios');
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

	var encodedAddress = encodeURIComponent(argv.address);
	var encodedUrl = `https://maps.google.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(encodedUrl).then((response) =>{
	if(response.data.status === "ZERO_RESULTS"){
		throw new Error(' Unable to find that address');
	}

	var lat = response.data.results[0].geometry.location.lat;
	var lng = response.data.results[0].geometry.location.lng;

	var weatherUrl = `https://api.darksky.net/forecast/6c1ad2e860ed7189d561bf60ef3c9e9f/${lat},${lng}`;
	console.log(response.data.results[0].formatted_address);

	return axios.get(weatherUrl);
	}).then((response) => {
			console.log(response.data.currently.temperature);
	}).catch((e) => {
		if(e.code === "ENOTFOUND"){
			console.log(' Unable to connect to API server. ');
		}else {
			console.log(e.message);
		}
	});


