export const cypressWhatsNew = {
  visit: () => cy.visit("https://www.cypress.io/features"),
  form: () => cy.get("form#subscribe-form>div>p"),
  emailtoSubscribe: () =>
    cy.get("form#subscribe-form").within(($form) => {
      return cy.get("input#input-footer-email");
    }),
  subscribButton: () => cy.get("form#subscribe-form>button"),
  subscribForError: () =>
    cy.get("form#subscribe-form").within(($form) => {
      return cy.get('p[class*="styled__Error"]');
    }),

  subscriptionMessage: () =>
    cy.get("footer>div.container").within(($elem) => {
      return cy.get("div>div>p[class^=Subscribe__Label-]");
    }),
  // .within(($form) => {
  //   return cy.get("button");
  // }),
};
