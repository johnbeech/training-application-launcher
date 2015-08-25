var request = require('supertest'),
    express = require('express');

var app = require('../lib/service/app');

describe('GET /events', function() {
    it('should respond with json', function(done) {
        request(app)
            .get('/events')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200, done);
    });
});

describe('GET /', function() {
    it('should respond with html', function(done) {
        request(app)
            .get('/')
            .set('Accept', 'text/html')
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect(600, done);
    });
});
