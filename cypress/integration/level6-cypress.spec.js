/// <reference types="cypress" />

import { cypressWhatsNew } from "../support/pageobject/cypress-whatsnew-po";
describe("Level 6 challenge", function () {
  it("Cypress Scroll the feature section to footer", () => {
    cypressWhatsNew.visit();
    cy.get("section").each(($section) => {
      cy.wrap($section).scrollIntoView();
    });
  });

  it("Cypress Suscribe to newsletter correct email", () => {
    cypressWhatsNew.visit();

    cy.get("input[name='formId']")
      .invoke("attr", "value")
      .then((sometext) => cy.log(sometext));

    cypressWhatsNew.emailtoSubscribe().type("abcd@gmail.com");
    cypressWhatsNew.subscribButton().click();

    cypressWhatsNew
      .subscriptionMessage()
      .should("contain.text", "Thanks for submitting the form.");
  });

  it("Cypress Suscribe to newsletter wrong email", () => {
    cypressWhatsNew.visit();
    cypressWhatsNew.emailtoSubscribe().type("abcd");
    cypressWhatsNew.subscribButton().click();
    cy.get("input:invalid").should("have.length", 1);
  });

  it("Cypress Suscribe to newsletter empty email", () => {
    cypressWhatsNew.visit();
    cypressWhatsNew.emailtoSubscribe().type("a{backspace}");
    cypressWhatsNew.subscribButton().click();
    cy.get("input:invalid").should("have.length", 1);
  });
});

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
