exports.command = function (callback) {
  // Execute some basic javascript to return the size of the screen
  this.execute(function () {
    return window.innerWidth;
  }, [], function (result) {
    callback.call(this, result.value);
  });
};
