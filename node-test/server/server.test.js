var request = require('supertest');
var expect = require('expect')
var app = require('./server').app;

it('should run ', (done) => {   	// done dshould be added ad asynschronous call are going
	request(app)
		.get('/')
		.expect(200)
		.expect('hello world')
		// .expect((res) => {
		// 	expect(res.body).toInclude({
		// 		error : 'page not found'
		// 	});
		// })
		.end(done);
});