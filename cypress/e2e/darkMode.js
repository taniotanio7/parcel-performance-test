describe("App has dark theme support", () => {
  it("it reads and applies default theme from system preference", () => {
    // The value must be read from window.matchMedia in order to pass test
    cy.visitWithTheme("/", "dark")
      .findByLabelText(/zmień motyw kolorystyczny/i)
      .should("have.value", "dark");
  });
  it("it can change default theme", () => {
    cy.visitWithTheme("/", "dark")
      .findByLabelText(/zmień motyw kolorystyczny/i)
      .click()
      .should("have.value", "light");
  });
});
