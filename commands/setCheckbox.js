exports.command = function (locateStrategy, selector, value) {
  var self = this;

  // We want to wait for the checkbox to be visible on the screen
  self.waitForElementVisible(selector);

  // Find the selector with the locateStrategy
  self.element(locateStrategy, selector, function (response) {
    self.elementIdSelected(response.value.ELEMENT, function (result) {
      // If the value is what we want then click it
      if (result.value !== value) {
        self.click(selector);
      }
    });

    // Assert that we have set the checkbox to the correct value
    self.elementIdSelected(response.value.ELEMENT, function (result) {
      self.assert.ok(selector, 'attempted to set to ' + value);
    });
  });
};

