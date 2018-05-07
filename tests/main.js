"use strict";
const createTestCafe = require('testcafe');
let runner = null;
let testcafe = null;

createTestCafe('localhost', 1337, 1338)
  .then((tc) => {
    testcafe = tc;
    runner = tc.createRunner();
    return runner
      // .useProxy('bluecoat.media-saturn.com')
      .src(['tests/integrationTests/fixture_dp.js'])
      .browsers(['saucelabs:Chrome@65.0:OS X 10.10'])
      .run();
  })
  .then((failedCount) => {
    console.log('Tests failed:' + failedCount);
    testcafe.close();
  });
