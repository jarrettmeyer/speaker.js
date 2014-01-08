// Load external modules. The require function is provided
// is provided by the Node runtime. If you wanted this to
// work in a browser, you would use something like requirejs
// to load external modules instead.
var MemoryBuffer = require("./MemoryBuffer");
var _ = require("underscore");

// Define a Speaker inside of a functional closure. The functional
// closure will return its own Speaker function (object).
var Speaker = (function (){
  "use strict";

  var defaults = {
    buffer: new MemoryBuffer(),
    name: "Ann"
  };

  // Speaker constructor. This takes an options argument.
  function Speaker(options) {
    this.options = _.extend({}, defaults, options);
    initialize(this);
    return this;
  }

  // The say method will be publicly exposed on instances of
  // Speaker.
  //
  //   var speaker = new Speaker();
  //   speaker.say("Hello");
  //
  Speaker.prototype.say = function (toSay) {
    var message = '"' + toSay + '," said ' + this.name + '.';
    this.options.buffer.write(message);
    this.timesSpoken += 1;
    addToThingsSaid(this, toSay);
    return message;
  };

  // This function will be local to the functional closure. You
  // will be unable to access addToThingsSaid() from outside
  // this functional closure, effectively making a private function.
  function addToThingsSaid(speaker, said) {
    if (!_.contains(speaker.thingsSaid, said)) {
      speaker.thingsSaid.push(said);
      speaker.numberOfThingsSaid += 1;
    }
  }

  // This is private to the functional closure, like addToThingsSaid().
  function initialize(speaker) {
    speaker.name = speaker.options.name;
    speaker.timesSpoken = 0;
    speaker.thingsSaid = [];
    speaker.numberOfThingsSaid = 0;
  }

  // This returns the local Speaker function, exposing it
  // outside the functional closure, along with anything that
  // was prototyped onto the Speaker function.
  return Speaker;

})();

module.exports = Speaker;