// Import commands.js using ES2015 syntax:
import "./commands";
import "cypress-mochawesome-reporter/register";

// Alternatively you can use CommonJS syntax:
// require('./commands')

//app environment variable can be set by cli : npx cypress run --env app=LinkedIn
beforeEach(function () {
  const testFilter = Cypress.env("app");
  if (!testFilter) {
    return;
  }

  const testName = Cypress.mocha.getRunner().test.fullTitle();
  if (!testName.includes(testFilter)) {
    this.skip();
  }
});
