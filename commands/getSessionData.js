var request = require('request');

// Send the request with the Browserstack credentials
var options = {
  url: 'https://api.browserstack.com/automate/builds.json?status=running',
  auth: {
    'user': process.env.BROWSERSTACK_USERNAME,
    'pass': process.env.BROWSERSTACK_ACCESS_KEY,
  }
};

exports.command = function () {
  var self = this;
  request(options, function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      //console.log(body);
      builds = JSON.parse(body);
      builds.forEach(function(item) {
        // Compare the items received with the one we are currently running
        if(item.automation_build.name == self.options.desiredCapabilities.build) {
          console.log('https://automate.browserstack.com/builds/' + item.automation_build.hashed_id + '/sessions/' + self.sessionId);
        }
      });
    }
  });
};
