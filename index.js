var app = require('./lib/service/app');

var server = app.listen(9000, function() {
    var host = 'localhost';
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});