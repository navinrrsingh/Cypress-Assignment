export const linkedInHome = {
  visit: () => cy.visit("/"),
  reload: () => cy.reload(),
  heading: () => cy.get("h1"),
  acceptConsetComponent: () => cy.get("div[type='COOKIE_CONSENT']"),
  signInButton: () =>
    cy.get(
      '[data-tracking-control-name="guest_homepage-basic_nav-header-signin"]'
    ),
};
