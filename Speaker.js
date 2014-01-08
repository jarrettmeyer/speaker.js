var MemoryBuffer = require("./MemoryBuffer");
var _ = require("underscore");

var Speaker = (function (){

  var defaults = {
    buffer: new MemoryBuffer(),
    name: "Ann"
  };

  function Speaker(options) {
    this.options = _.extend({}, defaults, options);
    this.name = this.options.name;
    this.timesSpoken = 0;
    this.thingsSaid = [];
    this.numberOfThingsSaid = 0;
  }

  Speaker.prototype.say = function (toSay) {
    var message = '"' + toSay + '," said ' + this.name + '.';
    this.options.buffer.write(message);
    this.timesSpoken += 1;
    addToThingsSaid(this, toSay);
    return message;
  };

  function addToThingsSaid(speaker, said) {
    if (!_.contains(speaker.thingsSaid, said)) {
      speaker.thingsSaid.push(said);
      speaker.numberOfThingsSaid += 1;
    }
  }

  return Speaker;

})();

module.exports = Speaker;