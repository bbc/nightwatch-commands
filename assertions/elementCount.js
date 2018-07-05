exports.assertion = function (locateStrategy, selector, count) {
  this.message = 'Testing if element <' + selector + '> has count: ' + count;

  this.expected = count;

  this.pass = function (val) {
    return val === this.expected;
  };

  this.value = function (res) {
    return res.value.length;
  };

  this.command = function (callback) {
    return this.api.elements(locateStrategy, selector, callback);
  };
};
