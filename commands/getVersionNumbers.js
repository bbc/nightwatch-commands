exports.command = function (selectors) {
  var self = this;

  // We get the source code of the entire page and find the version number we want be
  // converting it to a string an extracting the value after the instance of it
  // (ideally it looks for stylesheets by using the lastIndexOf, which is located near
  // the end of the html code)
  self.source(function (result) {
    selectors.forEach (function (selector) {
      var regex = new RegExp(selector + '\/[0-9]*.[0-9]*.[0-9]*-?[0-9]*', 'gmi');
      console.log(result.value.match(regex)[0]);
    });
  });
};