var express = require('express');
var app = express();

var deviceIdentification = require('./lib/deviceIdentification/command');
var eventReporter = require('./lib/eventReporter/command');
var isSupportedGenerator = require('./lib/isSupportedGenerator/command')

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
        res.send(event);
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
        res.send({
            error: true,
            message: 'Not implemented'
        });
    });
});

app.get('/events', function(req, res) {
    res.send(eventReporter.events);
});


var server = app.listen(9000, function() {
    var host = 'localhost';
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});