const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const add = require('./function.js');


const argv = yargs.argv;
var hey = argv._[0];
var command = process.argv[2];

console.log('hey', hey);
console.log('process', command);
console.log('yargs', argv);

// add.addNote(argv.title);
add.addArray(argv.title,argv.body);

