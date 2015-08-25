function doDeviceIdentification(event, callback) {
    var identifiedDeviceEvent = {
        brand: "google",
        model: "chrome"
    };

    callback(null, identifiedDeviceEvent);
}

module.exports = doDeviceIdentification;