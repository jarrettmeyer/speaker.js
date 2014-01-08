var ConsoleBuffer = (function (){

  function ConsoleBuffer() {
  }

  ConsoleBuffer.prototype.write = function (message) {
    console.log(message);
  };

  return ConsoleBuffer;

})();

module.exports = ConsoleBuffer;