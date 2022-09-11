export const linkedInSignIn = {
  usernameInput: () => cy.get("#username"),
  passwordInput: () => cy.get("#password"),
  loginButton: () => cy.get(".login__form_action_container > button"),
};
