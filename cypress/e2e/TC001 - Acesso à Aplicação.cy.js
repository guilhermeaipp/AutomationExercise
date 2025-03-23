describe("TC001 - Acesso à Aplicação", function() {
    beforeEach(function() {
      cy.acessarAplicacao(); // Chama o comando customizado para acessar a aplicação
    });
  
    it("Verifica título da aplicação", function() {
      cy.title().should('be.equal', 'Automation Exercise');
    });
  });
  