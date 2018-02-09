var fs = require('fs');

var addNote = (title) => {
	console.log('hello woerls');
}

var addArray = (title, body) => {
	var notes = [];
	var note = {
		title,
		body
	};	

	notes.push(note);
	var stringify  =fs.writeFileSync('./json/store-data.js',JSON.stringify(note));
};

module.exports = {
	addNote,
	addArray
}