exports.command = function (expectedURL) {
  var self = this;

  // Wait until the url contains the expected URL
  self.pause(function () { self.verify.urlContains(expectedURL) });

  // Wait until we verify that the url is the expected URL
  self.pause(function () { self.verify.urlEquals(expectedURL) });
};

