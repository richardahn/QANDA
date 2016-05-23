exports.config = {
  // Which testing framework to use?
  framework: 'jasmine',

  // Where are our tests located?
  specs: ['test/e2e/testSpec.js'],

  // If I set baseUrl here, I don't need to write the full address in my tests
  baseUrl: 'http://localhost:8080/',

  // Which browser do I want my tests to run on?(to run multiple instances, use multiCapabilities)
  capabilities: {
    browserName: 'chrome'
  },

  // Configuration to start my selenium server WITH my test scripts(instead of running a separate one and connecting to it)
  seleniumServerJar: null,
  seleniumPort: null,
  seleniumArgs: null
};
