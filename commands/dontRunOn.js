exports.command = function (environments, callback) {
  callback = callback || function () {};

  // Added a . to each of the environments
  environments.forEach(function (env, key) {
    environments[key] = env + '.';
  });

  // Get the position of LIVE and replace it with an empty string
  var index = environments.indexOf('live.');
  if (index !== -1) {
    environments[index] = '';
  }

  // Check whether we need to run the test on this environment
  var env = process.env.ENV;
  this.execute (function () {
    if (environments.indexOf(env) > -1) {
      return true;
    }
    return this;
  }, [], function (result) {
    callback.call(this, result);
  });
};
