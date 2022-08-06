describe("User - Search", () => {

    it("Searching a user", () => {
        cy.visit("http://localhost:3000/");
        cy.wait(5000)
        cy.get("input[id=search-user]").type("delphine");
        cy.get("div[data-testid=list-user]").should("contains.text", "Delphine");
    });

    it("Removing a user", () => {
        cy.get("input[id=search-user]").clear();
        cy.get("button[data-testid=button-Remove-user1").click();
        cy.get("div[data-testid=list-user]").should("not.contains.text", "Bret");
    });

    it("Restoring a user", () => {
        cy.get("input[id=search-user]").type("bret");
        cy.get("div[data-testid=list-user]").should("contains.text", "Bret");
        cy.get("button[data-testid=button-Restore-user0").click();
        cy.get("input[id=search-user]").clear();
        cy.get("div[data-testid=list-user]").should("contains.text", "Bret");
    });
  
});
  