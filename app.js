var express = require('express');
var toDoControllers = require('./controllers/todoControllers')

var app = express();

app.set('view engine','ejs');

app.use(express.static('./public'));

toDoControllers(app);

app.listen(3000);
console.log('you r listening to port 3000');