/// <reference types="cypress" />

import { linkedInHome } from "../support/pageobject/linkedIn-home-po";

import { linkedInJobs } from "../support/pageobject/linkedIn-jobs-po";

describe("Level #5: Automate two features on LinkedIn sitee", function () {
  //Automated this test cases Since it was possible to search job without login
  it("LinkedIn Job search without login", () => {
    var jobsearchtext = "Quality Assurance";
    linkedInHome.visit();
    cy.LinkedInAcceptcookies(true);
    linkedInJobs.searchJob(jobsearchtext, "sweden");
    linkedInJobs.searchSummary().then(($elem) => {
      expect($elem.text().trim().toLowerCase()).to.contain(
        jobsearchtext.toLowerCase()
      );
    });
  });

  //Sending Message without login is not possible. So left this automation
  it("LinkedIn send private messages to one of my connections on page", () => {
    linkedInHome.visit();
    cy.LinkedInAcceptcookies(true);
    cy.LinkedInLogin(Cypress.env("username"), Cypress.env("password"));

    cy.visit("/messaging/thread/new/");
    cy.find("div .scaffold-layout__list-detail-inner").should("be.visible");
  });
});

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
