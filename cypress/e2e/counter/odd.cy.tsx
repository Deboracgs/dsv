describe("Counter - Odd Test", () => {

  it("Increment", () => {
    cy.visit("http://localhost:3000/");
    cy.get('#button-odd').click();
    cy.get('#button-increment').click();
    cy.get('span[data-testid=counter-value]').should("contain.text", "1");
    cy.get('#button-increment').click();
    cy.get('span[data-testid=counter-value]').should("contain.text", "3");
  });

  it("Decrement", () => {
    cy.get('#button-decrement').click();
    cy.get('span[data-testid=counter-value]').should("contain.text", "1");
  });
});
