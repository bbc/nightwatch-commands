exports.command = function (selector, value) {
  var self = this;

  // We want to wait for the dropbox to be visible on the screen
  self.waitForElementVisible(selector);

  // Click the dropdown to open it and then select the value
  self.click(selector, () => {
    self.click('option[value="' + value +'"]');
  });
};
