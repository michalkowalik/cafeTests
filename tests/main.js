const createTestCafe = require('testcafe');
let runner = null;
let testcafe = null;

createTestCafe('localhost', 1337, 1338)
  .then((tc) => {
    testcafe = tc;
    runner = tc.createRunner();
    return runner
      .useProxy('bluecoat.media-saturn.com') // ugly, ugly hack!
      .src(['tests/integrationTests/fixture1.js'])
      .browsers(['chrome', 'firefox'])
      .run();
  })
  .then((failedCount) => {
    console.log('Tests failed:' + failedCount);
    testcafe.close();
  });
