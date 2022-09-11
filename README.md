Level #0: Setup a Cypress multi-site test framework
To run test for either LinkedIn or Cypess use following command in terminal:
npx cypress run --env app=LinkedIn
npx cypress run --env app=Cypress


Level #1: Document your cypress project in README.md file

<!-- pre-requisite: -->
node.js need to be installed

<!-- install dependencies: -->
1. clone the code
2. Open in vscode
3. (node.js should be installed as prerequisite)
4. run npm install in terminal

<!-- recommended IDE: -->
VSCode but you can used any suitable IDE

<!-- Common Commands -->
1. Run all the test:
   npx cypress run
2. Run specific test:
   npx cypress run --env app=Cypress
   npx cypress run --env app=LinkedIn
   Note: value of environment variable app is used fliter test with that name and only those test will be executed
3. Open Cypress:
   npx cypress open
4. passing username and password to test:
   npx cypress run --env app=LinkedIn username=<username you want to test> password=<actual password>

5. Reports will be created in cypress/reports/testreports:
   npx cypress run
   cypress/reports/testreports/index.html will be create
   
   
Level #2: Manipulate cookies
I have done English to Swedish


Level #3: Use REST API for to facilitate test steps
I have used endpoint /cookie-consent/ and added to commands.js to be used as cy.LinkedInAcceptcookies()


Level #4: Automate login and logout tests on Linkedin site
Automating authentication to production application is not best practise.Specially when there are secuirty check to detect if user is human.
In real-life automation, we disable MFA and Security check in test env to do functional test automation


Level #5: Automate two features on LinkedIn site
Feature #1 - I as a linkedin user, after login, can search jobs on page https://www.linkedin.com/jobs/ so that I can find relevant job ads.
I did it without authentication


Feature #2 - I as a linkedin user, after login, can send private messages to one of my connections on page https://www.linkedin.com/messaging/thread/new/
Can not be done without authentication. so skipped it.


Level #6: Automate two features on Cypress site
Feature #1 - I as a visitor, can scroll section by section until reaching footer part on page https://www.cypress.io/features

Feature #2 - I as a visitor, can subscribe newsletters on page https://www.cypress.io/whats-new
There was chances of flaky test so changed the approach



Level #7: Generate a HTML report after test run of all specs
Used cypress-mochawesome-reporter and settings in cypress.json
reporter
reporterOptions



Level #8: Add additional test context info into the HTML report
I do not know much in report. It will need sometime to investigate it so skipped it.



Level #9: Shine your way
My crrent project is bdd with cucumber using cypress-cucumber-preprocessor.
I would love to show I manage my test automation to impress you. But I would be able to do monday evening.
