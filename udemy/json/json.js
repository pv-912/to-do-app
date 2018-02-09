// var obj = {
// 	"name" : "prashant"
// };

// var stringObj = JSON.stringify(obj);
// console.log(stringObj);

// var person = '{"name" : "prashant","age" : 25}';
// var personParse = JSON.parse(person);
// console.log(typeof personParse);
// console.log(personParse);
// console.log(person);

var fs = require('fs');

var obj = {
	name : 'prashant',
	class : 'Chemical',
	college : 'iitr'
}

var dataToSave = JSON.stringify(obj);
fs.writeFileSync('store.js',dataToSave);

var readData = fs.readFileSync('store.js');
var dataToRetrieve = JSON.parse(readData);

console.log(typeof dataToRetrieve); 
console.log(dataToRetrieve.name); 