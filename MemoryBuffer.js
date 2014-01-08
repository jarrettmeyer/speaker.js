var MemoryBuffer = (function (){

  function MemoryBuffer() {
    this.messages = [];
  }

  MemoryBuffer.prototype.write = function (message) {
    this.messages.push(message);
  };

  return MemoryBuffer;

})();

module.exports = MemoryBuffer;