# Integration / Component testing.

The motivation for running the evaluation of posibble Selenium replacement was driven by the following factors:
* Current Selenium setup is hillariously unreliable 
* Test execution is slow and prone to timeouts
* It utilizes the Test Service and is strictly bound to the current architecture with it's Consul requirements
* Current test codebase is large and hard to maintain without providing enough benefit to justify the 
* Hard to migrate to the Digital Platform public cloud envionment

## Requirements 
Following requirements were taken into account when evaluating the possible solutions:
* Developer friendly
* Small, readable and maintanable codebase
* Fast test execution
* Self-contained solution with as few external dependencies as possbile
* Works with multiple browsers
* provides plugins for cloud based cross-browser testing providers (BrowserStack and SauceLabs are required, everyting else comes as a plus)

## Evaluation

Evaluated solutions:
* [Cypress](https://www.cypress.io/)
* [Nightwatch](http://nightwatchjs.org/)
* [TestCafe](https://devexpress.github.io/testcafe/)
* [Selenium](https://www.seleniumhq.org/)


Cypress produces extremally small codebase footprint and allows for fastest prototyping and test overview, but sadly at it's current state it works only with Google Chrome and doesn't provide any Integration with CI systems worth this name.

Nightwatch is actually a rather shiny overlayer on Selenium webdriver with all it's pros and cons. Cons mostly, as it requires the Selenium grid / server setup to work

From all the evaluated solutions TestCafe is the most promising one. It provides all required functionality, is rather fast to work with, it is built on the well known paradigms, like Page Model pattern. 

## Install and usage

Please follow the TestCafe [Getting Started](https://devexpress.github.io/testcafe/documentation/getting-started/) document.

### Prerequisites
* Nodejs
* npm
* IDE to work with - [Visual Studio Code](https://code.visualstudio.com/) is rather a fine example of what's available free of charge.


### Code Structure
the test runner wrapper script is to be found at `tests/main.js` and it's to be run with `node tests/main.js`.  It will run all the test fixtures found under `integrationTests` directory.

The test scripts, called `fixtures` in TestCafe lingo contain multiple test cases, defined with `test` function. 

Page models are grouped at `tests/pagemodels` directory. The test scripts should explicitly import required model(s) and avoid ad-hoc selector definitions in the test scripts.

### Individual test execution
Follow TestCafe [Command Line Interface](https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html) documentation.

in case of accompanying project:
```
testcafe --proxy bluecoat.media-saturn.com chrome tests/integrationTests/fixture1.js 
```
![example]


[example]: docs/example1.png