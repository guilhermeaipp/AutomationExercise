describe("TC002 - Verifica título da aplicação", function() {
    beforeEach(function() {
      cy.acessarAplicacao(); // Usa o comando customizado
    });
  
    it("Verifica se o título da página é 'Automation Exercise'", function() {
      cy.title().should('be.equal', 'Automation Exercise');
    });
  });
  