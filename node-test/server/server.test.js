var request = require('supertest');
var expect = require('expect')
var app = require('./server').app;

it('should run ', (done) => {   	// done dshould be added ad asynschronous call are going
	request(app)
		.get('/')
		.expect(200)
		.expect('hello world')
		// .expect((res) => {
		// 	expect(res.body).toInclude({				using expect of mocha library
		// 		error : 'page not found'             
		// 	});
		// })
		.end(done);
});

// using describe
describe('Server', ()=> {

	describe('#about', () => {
		it('should run ', (done) => {
			request(app)
				.get('/about')
				.expect(200)
				.expect('about')
				.end(done);
		});
	});

	describe('profile', () => {
		it('should run ', (done) => {
			request(app)
				.get('/profile')
				.expect(200)
				.expect('profile')
				.end(done);
		});
	});
});


