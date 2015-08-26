var request = require('request');

function generateIsSupportedResponse(event, callback) {
    var responseEvent = {};

    request('http://localhost:8080/api/arc/google/chrome', function(error, response, arcEvent) {
        if(arcEvent && arcEvent.arc) {
            responseEvent.ait = "http://mytvapp.mycompany.com/ait/launch.aitx?broadcast=true";
            responseEvent.direct = "http://mytvapp.mycompany.com/?"
        }


        console.log('Is Supported ARC Response', error, arcEvent);

        callback(null, responseEvent);
    });
}

module.exports = generateIsSupportedResponse;