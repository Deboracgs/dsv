describe("Counter - Normal Test", () => {

  it("Increment", () => {
    cy.visit("http://localhost:3000/");
    cy.get('#button-normal').click();
    cy.get('#button-increment').click();
    cy.get('span[data-testid=counter-value]').should("contain.text", "1");
    cy.get('#button-increment').click();
    cy.get('span[data-testid=counter-value]').should("contain.text", "2");
    cy.get('#button-increment').click();
    cy.get('span[data-testid=counter-value]').should("contain.text", "3");
  });

  it("Decrement", () => {
    cy.get('#button-decrement').click();
    cy.get('span[data-testid=counter-value]').should("contain.text", "2");
  });
});
