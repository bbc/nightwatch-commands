//TODO: Currently does not support page objects or xpaths
exports.command = function (selector, locateStrategy = 'css selector') {
  var self = this;

  self.waitForElementVisible(selector, function () {
    // If the selector starts with a . or # we strip that out
    if (locateStrategy === 'css selector' && selector[0] === '.' || selector[0] === '#') {
      selector = selector.substring(1);
    }

    // Execute the javascript to hide the element
    var javascript = 'document.getElementById("' + selector + '").style.opacity = "0";';
    self.execute(javascript, [], function () { console.log(' \033[0;32m\u2714\u001b[0m Successfully hidden ' + selector + '.'); });
  });
};
