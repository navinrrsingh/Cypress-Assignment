/// <reference types="cypress" />
import { linkedInHome } from "../support/pageobject/linkedIn-home-po";

describe("Level #3: Use REST API for to facilitate test steps", function () {
  it("LinkedIn Accept Cookies with REST API", () => {
    linkedInHome.visit();
    linkedInHome.acceptConsetComponent().should("be.visible");
    cy.LinkedInAcceptcookies(true);
    linkedInHome.acceptConsetComponent().should("not.exist");
  });
});

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
