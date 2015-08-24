var express = require('express');
var app = express();

var deviceIdentification = require('./lib/deviceIdentification/command');
var eventReporter = require('./lib/eventReporter/command');

var events = [];

app.get('/deviceIdentification', function(req, res) {
    var deviceIdentificationRequestedEvent = {
        userAgent: req.get('user-agent'),
        params: req.params
    };
    eventReporter.logEvent(null, deviceIdentificationRequestedEvent);

    deviceIdentification(deviceIdentificationRequestedEvent, function(error, event) {
        eventReporter.logEvent(error, event);
        res.send(event);
    });
});

app.get('/ait/launch.aitx', function(req, res) {
    var requestEvent = {
        userAgent: req.get('user-agent'),
        params: req.params
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