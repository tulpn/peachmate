process.env.NODE_ENV = 'test';

const app = require("./app")
const request = require('supertest');


describe('App', () => {
    describe('GET /', function() {
        it('responds with json', function(done) {
            request(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
        });
    });
});