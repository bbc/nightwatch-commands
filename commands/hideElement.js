var common = require('../lib/common.js');

exports.command = function (selector) {
  var self = this;

  // Convert to a selector if it is a page object
  selector = common.convertPageObject(selector);

  // Convert to a css path from an xpath
  selector = common.convertXPath(selector);

  // Make a copy of the selector for easier reading
  var orginalSelector = selector;

  // Break down the entire selector to only have the last identifier
  selector = common.basicIdentity(selector);

  // Execute the javascript to hide the element
  var javascript = 'document.getElementById("' + selector + '").style.opacity = "0";';
  self.execute(javascript, [], function () { console.log(' \033[0;32m\u2714\u001b[0m Successfully hidden ' + orginalSelector + '.'); });
};
