var events = [];

function logEvent(error, event) {
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

module.exports = {
    logEvent: logEvent,
    events: events
}