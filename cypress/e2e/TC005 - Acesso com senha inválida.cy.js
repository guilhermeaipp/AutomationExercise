describe("TC005 - Acesso com senha inválida", function() {
    beforeEach(function() {
      cy.acessarAplicacao(); 
    });
  
      it("Acesso com senha inválida", function() {
    //Verificar se a página inicial é exibida corretamente.
    cy.title().should('be.equal', 'Automation Exercise');

    //Clicar no botão 'Signup / Login'.
    cy.get('a[href="/login"]').click(); 

    //Verificar se a mensagem 'New User Signup!' está visível.
    cy.get('h2').contains('Login to your account').should('be.visible');

    //Inserir nome e endereço de e-mail e uma senha incorreta.
    cy.get('input[data-qa="login-email"]').type('teste@examploTest2.com').should('have.value', 'teste@examploTest2.com');
    cy.get('input[data-qa="login-password"]').type('123123');
    
    //Clicar no botão 'Login'.
    cy.get('button[data-qa="login-button"]').click();
    
    //O sistema deve exibir a mensagem: "Your email or password is incorrect!", informando que os dados de login estão incorretos.
    cy.contains('Your email or password is incorrect!').should('be.visible');

});
});