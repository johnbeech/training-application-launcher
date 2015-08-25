function generateIsSupportedResponse(event, callback) {
    var responseEvent = {};
    if(event) {
        responseEvent.ait = "http://mytvapp.mycompany.com/ait/launch.aitx?broadcast=true";
        responseEvent.direct = "http://mytvapp.mycompany.com/?"
    }

    callback(null, responseEvent);
}

module.exports = generateIsSupportedResponse;