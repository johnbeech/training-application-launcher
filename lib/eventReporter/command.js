var events = [];

function logEvent(error, event) {
    events.push({
        time: Date.now(),
        error: error,
        event: event
    });

    if(events.length > 10) {
        events.shift();
    }

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