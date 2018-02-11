var express = require('express');

var app = express();

app.get('/', (req, res) => {
	res.send('hello world');
	// res.send({
	// 	error : 'page not found'
	// });
});

app.listen(3000);

module.exports.app = app;



// to test run npm run test-watch or nodemon --exec 'npm test'