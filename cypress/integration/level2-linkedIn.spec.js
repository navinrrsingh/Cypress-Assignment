/// <reference types="cypress" />

import { linkedInHome } from "../support/pageobject/linkedIn-home-po";
describe("Level #2: Manipulate cookies", function () {
  it("LinkedIn Manupulate Cookes Change Language English to Swedish", () => {
    linkedInHome.visit();
    cy.getCookie("lang").then((cookie) => {
      if (cookie.value.includes("lang=en-us")) {
        linkedInHome
          .heading()
          .should("contain.text", "Welcome to your professional community");

        cy.setCookie("lang", "v=2&lang=sv-se", {
          domain: ".linkedin.com",
          path: "/",
        });
        linkedInHome.reload();

        linkedInHome
          .heading()
          .should("contain.text", "Välkommen till ditt professionella nätverk");
      }
    });
  });
});

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
