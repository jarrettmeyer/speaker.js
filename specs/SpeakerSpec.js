var MemoryBuffer = require("../MemoryBuffer");
var Speaker = require("../Speaker");

describe("Speaker", function () {

  it("can be instantiated", function () {
    var speaker = new Speaker();
    expect(speaker instanceof Speaker).toBeTruthy();
  });

  it("has a name attribute", function () {
    var speaker = new Speaker();
    expect(speaker.name).toBe("Ann");
  });

  it("can change the name in the constructor", function () {
    var speaker = new Speaker({ name: "Bonnie" });
    expect(speaker.name).toBe("Bonnie");
  });

  it("returns the expected message", function (){
    var speaker = new Speaker();
    var result = speaker.say("Hi");
    expect(result).toBe('"Hi," said Ann.');
  });

  it("adds the message to an output buffer", function () {
    var buffer = new MemoryBuffer();
    expect(buffer.messages.length).toBe(0);

    var speaker = new Speaker({ buffer: buffer });
    speaker.say("Hi");
    expect(buffer.messages.length).toBe(1);
  });

  it("counts the number of times spoken", function () {
    var speaker = new Speaker();
    speaker.say("Hi");
    speaker.say("Hi");
    speaker.say("Bye");
    expect(speaker.timesSpoken).toBe(3);
  });

  it("counts the number of things said", function () {
    var speaker = new Speaker();
    speaker.say("Hi");
    speaker.say("Hi");
    speaker.say("Bye");
    expect(speaker.numberOfThingsSaid).toBe(2);
  });

});

