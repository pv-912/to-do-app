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

	try{
		var noteData = fs.readFileSync('./json/store-data.js');
		notes = JSON.parse(noteData);
	} catch(e){

	}
	
var duplicateNotes = notes.filter((note) => note.title === title  );

	if(duplicateNotes.length ===0 ){
		notes.push(note);
		fs.writeFileSync('./json/store-data.js',JSON.stringify(notes));
	}
};


module.exports = {
	addNote,
	addArray
}