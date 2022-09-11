import { linkedInHome } from "../support/pageobject/linkedIn-home-po";
import { linkedInSignIn } from "../support/pageobject/linkedIn-signIn-po";

Cypress.Commands.add("LinkedInAcceptcookies", (accept) => {
  var catval;
  if (accept) {
    catval = {
      ADVERTISING: 1,
      ANALYTICS_AND_RESEARCH: 1,
      FUNCTIONAL: 1,
    };
  } else {
    catval = {
      ADVERTISING: 2,
      ANALYTICS_AND_RESEARCH: 2,
      FUNCTIONAL: 2,
    };
  }
  cy.request({
    method: "POST",
    url: "/cookie-consent/",
    body: {
      CATEGORIES: catval,
    },
  }).then((response) => {
    cy.log("Cookies Set: " + response.isOkStatusCode);
    cy.reload();
  });
});

Cypress.Commands.add("LinkedInLogin", (username, password) => {
  linkedInHome.signInButton().click();
  linkedInSignIn.usernameInput().type(username);
  linkedInSignIn.passwordInput().type(password);
  linkedInSignIn.loginButton().click();
});

Cypress.Commands.add("LinkedInLogout", () => {
  linkedInHome.visit();
  cy.getCookie("JSESSIONID").then((sessionID) => {
    cy.log(sessionID.value);
    cy.request({
      method: "GET",
      url: "/uas/logout",
      qs: {
        csrfToken: JSON.parse(sessionID.value),
      },
    }).then((response) => {
      cy.log(response.status);
      linkedInHome.reload();
    });
  });
});
