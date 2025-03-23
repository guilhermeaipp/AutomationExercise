describe("TC004 - Tentativa de criar conta com email já cadastrado.CY", function() {
    beforeEach(function() {
      cy.acessarAplicacao(); 
    });
  
      it("Tentativa de criar conta com email já cadastrado.CY", function() {
    //Verificar se a página inicial é exibida corretamente.
    cy.title().should('be.equal', 'Automation Exercise');

    //Clicar no botão 'Signup / Login'.
    cy.get('a[href="/login"]').click(); 

    //Verificar se a mensagem 'New User Signup!' está visível.
    cy.get('h2').contains('New User Signup!').should('be.visible');

    //Inserir nome qualquer e um endereço de e-mail (um e-mail que já tenha sido cadastrado anteriormente).
    cy.get('input[data-qa="signup-name"]').type('Guilherme').should('have.value', 'Guilherme');
    cy.get('input[data-qa="signup-email"]').type('teste@guilherme.com').should('have.value', 'teste@guilherme.com');
   
    //Clicar no botão 'Signup'.
    cy.get('button[data-qa="signup-button"]').should('have.text', 'Signup'); 
    cy.get('button[data-qa="signup-button"]').click()

    //O sistema deve apresentar a mensagem: "Email Address already exist!", indicando que o e-mail já está registrado.
    cy.contains('Email Address already exist!').should('be.visible');
    

      });
    });


      



