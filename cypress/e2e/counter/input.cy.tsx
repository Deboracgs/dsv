describe("Counter - Input Test", () => {
  it("Increment", () => {
    cy.visit("http://localhost:3000/");
    cy.get("input[name=input-number-counter]").should("be.disabled");
    cy.get('#button-input').click();
    cy.get("input[name=input-number-counter]").should("be.not.disabled");
    cy.get("input[name=input-number-counter]").type("10");
    cy.get('#button-increment').click();
    cy.get('span[data-testid=counter-value]').should("contain.text", "10");
    cy.get('#button-increment').click();
    cy.get('span[data-testid=counter-value]').should("contain.text", "20");
  });

  it("Decrement", () => {
    cy.get('#button-decrement').click();
    cy.get('span[data-testid=counter-value]').should("contain.text", "10");

  });
});
