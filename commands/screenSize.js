exports.command = function (callback) {
  this.execute(function () {
    return window.innerWidth;
  }, [], function (result) {
    callback.call(this, result.value);
  });
};
