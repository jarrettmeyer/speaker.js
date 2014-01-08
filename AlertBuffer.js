var AlertBuffer = (function (){

  function AlertBuffer() {
  }

  AlertBuffer.prototype.write = function (message) {
    alert(message);
  };

  return AlertBuffer;

})();

module.exports = AlertBuffer;