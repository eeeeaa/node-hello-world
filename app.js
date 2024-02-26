const file = require("./js/fileExample.js");
const server = require("./js/serverExample.js");
const event = require("./js/EventExample.js");

main();

function main() {
  event.setupListener();
  event.emitStartEvent();
}
