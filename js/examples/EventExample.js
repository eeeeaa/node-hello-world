//front-end -> user interactions i.e. mouse clicks listener, etc.
//back-end -> replicate that behavior with event emitters
const EventEmitter = require("node:events");

const eventEmitter = new EventEmitter();

//eventEmiiter object
//-> can have multiple events
//-> each event can have multiple listeners

//other methods
//once(): add a one-time listener
//removeListener() / off(): remove an event listener from an event
//removeAllListeners(): remove all listeners for an event

function setupListener() {
  startEventListener();
}

//on() -> listen to events (can also use "addListener()")
function startEventListener() {
  eventEmitter.on("start", (start, end) => {
    console.log(`started from ${start} to ${end}`);
  });
}

//emit() -> triggers an event (can also pass in arguments as well)
function emitStartEvent() {
  eventEmitter.emit("start", 1, 100);
}
