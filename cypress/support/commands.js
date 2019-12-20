// Allows visiting the website with dark theme on/off
Cypress.Commands.add("visitWithTheme", (website, theme = 'light') => {
  cy.visit(website, {
    onBeforeLoad(win) {
      cy.stub(win, "matchMedia")
        .withArgs("(prefers-color-scheme: dark)")
        .returns({
          matches: theme !== 'light'
        });
    }
  });
});
