var express = require('express');
var app = express();

var deviceIdentification = require('../deviceIdentification/command');
var eventReporter = require('../eventReporter/command');
var isSupportedGenerator = require('../isSupportedGenerator/command')

var events = [];

app.get('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/deviceIdentification', function(req, res) {
    var requestEvent = {
        userAgent: req.get('user-agent'),
        query: req.query,
        url: req.originalUrl
    };
    eventReporter.logEvent(null, requestEvent);

    deviceIdentification(requestEvent, function(error, event) {
        eventReporter.logEvent(error, event);
        res.send(event);
    });
});

app.get('/ait/issupported', function(req, res) {
    var requestEvent = {
        userAgent: req.get('user-agent'),
        query: req.query,
        url: req.originalUrl
    };
    eventReporter.logEvent(null, requestEvent);

    isSupportedGenerator(requestEvent, function(error, event) {
        res.json(event);
    });
});

app.get('/ait/launch.aitx', function(req, res) {
    var requestEvent = {
        userAgent: req.get('user-agent'),
        query: req.query,
        url: req.originalUrl
    };
    eventReporter.logEvent(null, requestEvent);

    deviceIdentification(requestEvent, function(error, event) {
        eventReporter.logEvent(error, event);
        res.type('application/xml');
        res.send({
            error: true,
            message: 'Not implemented'
        });
    });
});

app.get('/events', function(req, res) {
    res.send(eventReporter.events);
});

module.exports = app;