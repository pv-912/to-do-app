var express = require('express');
var hbs = require('hbs');
var fs = require('fs');

var port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine', 'hbs');

// middlewares
app.use(express.static(__dirname+'/public'));
app.use((req, res, next) => {
	var currentTimestamp = new Date().toString();
	var log = `${currentTimestamp} : ${req.url} ${req.method}`;

	console.log(log);
	fs.appendFile('server.log', log + '\n', (err) => {
		if(err){
			console.log(err);
		}
	});
	next();
});

// helper can be added anywhere 
hbs.registerHelper('getYear', () => {
	return new Date().getFullYear();
});
hbs.registerHelper('screamIt', (text) => {
	return text.toUpperCase();
});

app.get('/', (req, res) => {
	res.render('home.hbs', {
		page : 'hello',
		title: 'prashant'
	});
});


app.get('/about', (req, res) => {
	res.render('about.hbs', {
		page : 'about',
		title : 'ritika'
	});
});

app.listen(port, (err) => {
	if(err){
		console.log(err);
	} console.log(`The server is running on port ${port}.`)
});