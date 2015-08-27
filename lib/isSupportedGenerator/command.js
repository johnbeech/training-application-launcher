var request = require('request');

function generateIsSupportedResponse(event, callback) {
    var responseEvent = {};

    request('http://localhost:9100/arc.json?brand=google&model=chrome', function(error, response, body) {
        var arcEvent = parseBody(body);
        if(arcEvent && arcEvent.arc) {
            responseEvent.ait = "http://mytvapp.mycompany.com/ait/launch.aitx?broadcast=true";
            responseEvent.direct = "http://mytvapp.mycompany.com/?"
        }

        if(error) {
            console.log('Unable to service issuported request, defaulting to empty response.', error);
        }
        else {
            console.log('Is Supported ARC Response', error, arcEvent);
        }

        callback(null, responseEvent);
    });
}

function parseBody(body) {
    var result;
    try {
        result = JSON.parse(body);
    }
    catch(exception) {
        result = false;
    }
    return result;
}

module.exports = generateIsSupportedResponse;