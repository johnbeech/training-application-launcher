function doStuff() {
    return {
        applicationConfig: true
    };
}

function loadApplicationConfig(callback) {
    var event = doStuff();

    callback(null, event);
}

module.exports = loadApplicationConfig;