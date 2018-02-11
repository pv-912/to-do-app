var expect = require('expect'); // mjackson expect git
var utils = require('./utils.js');

it('should be 44', () => {
	var res = utils.add(11,33);

	if(res != 44 ){
		throw new Error(`Expected 44 but came ${res}.`);
	}
});

it('should be 25', () => {
	var res = utils.square(5);

	expect(res).toBe(25).toBeA('number');
});

it('add by asynchronous method', (done) => {     // use for asynchronous call to run 
	utils.addAsync(5, 6, (sum) => {
		expect(sum).toBe(11).toBeA('number');
		done();
	});

});

it('check name', () => {
	var location = {
		address : 'IIT R',
		age : 25
	};

	var res = utils.user(location, 'prashant verma');
	expect(location).toBe(res);
	expect(res).toInclude({
		firstName : 'prashant',
		lastName : 'verma'
	});
});

// using describe 
describe('Utils', () => {

	describe('#add', () => {
		it('testing', () => {
		// var res = utils.square(5);
		expect(25).toBe(25).toBeA('number');
		expect({name : "prashant"}).toEqual({name : "prashant"}).toBeA('object');
		expect([1,2,3]).toInclude(2).toBeA('array');
		expect([1,2,3]).toExclude(0).toBeA('array');

		});
	});
});