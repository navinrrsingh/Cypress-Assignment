/// <reference types="cypress" />

import { linkedInHome } from "../support/pageobject/linkedIn-home-po";

import { linkedInUserHomepage } from "../support/pageobject/linkedIn-user-homepage-po";

describe("Level #4: Automate login and logout tests on Linkedin site", function () {
  // automating authentication to production application is not best practise.
  // Specially when there are secuirty check to detect if user is human
  // In real-life automation, we disable MFA and Security check in test env to do functional test automation
  it("LinkedIn Login Failure due to Security Checks", () => {
    linkedInHome.visit();
    linkedInHome
      .heading()
      .should("contain.text", "Welcome to your professional community");
    cy.LinkedInAcceptcookies(true);

    // Still I have done basic automation which does not work obviousely
    cy.LinkedInLogin(Cypress.env("username"), Cypress.env("password"));
    linkedInUserHomepage.navBar().should("exist").should("be.visible");
  });

  // For logout - JSESSIONID is used as param to logout endpoint
  // Since login in not working not possible to test it.
  it("LinkedIn Logout failure as login failed", () => {
    cy.visit("/");
    cy.LinkedInAcceptcookies(true);
    cy.LinkedInLogin(Cypress.env("username"), Cypress.env("password"));
    linkedInUserHomepage.navBar().should("exist").should("be.visible");

    // cy.LinkedInLogout().should("not.be.true");
    // linkedInHome.heading().should("contain.text", "Sign in");
  });
});

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
