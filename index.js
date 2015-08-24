var express = require('express');
var app = express();

var applicationConfigAdapter = require('./lib/applicationConfigAdapter/command');
var events = [];

app.get('/applicationConfig', function(req, res) {
    applicationConfigAdapter(function(error, event) {
        eventReporter(error, event);
        res.send(event);
    });
});

app.get('/events', function(req, res) {
    res.send(events);
});

function eventReporter(error, event) {
    events.push({
        time: Date.now(),
        error: error,
        event: event
    });

    if(error) {
        console.log('Error', error);
    }
    else {
        console.log('Event', event);
    }
}

var server = app.listen(9000, function() {
    var host = 'localhost';
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});