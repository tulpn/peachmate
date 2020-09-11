const app = require("./app")
const request = require('supertest');

describe('GET /', function() {
    it('responds with json', function(done) {
        request(app)
        .get('/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});


describe('GET /post', function() {
    it('Receives single post', function(done) {
        request(app)
        .get('/post')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});


describe('POST /post', function() {
    it('Inserts a post', function(done) {
        request(app)
        .post('/post')
        .send({message: "This is a simple test message"})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});