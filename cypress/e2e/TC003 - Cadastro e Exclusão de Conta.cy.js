describe("TC003 - Cadastro e Exclusão de Conta", function() {
  beforeEach(function() {
    cy.acessarAplicacao(); 
  });

    it("Cadastro de Conta", function() {

    //Verificar se a página inicial é exibida corretamente
    cy.url().should('include', '/'); 
    //Clicar no botão 'Signup / Login'
    cy.get('button[type="submit"]').click()  

    //Verifica e clica no botão Signup
    cy.get('a[href="/login"]').click(); 
  
    //Verifica se a mensagem 'New User Signup!' está visível
    cy.get('h2').contains('New User Signup!').should('be.visible');
  
     //Inserir nome e endereço de e-mail invalido.
    cy.get('input[data-qa="signup-name"]').type('Guilherme').should('have.value', 'Guilherme');
    cy.get('input[data-qa="signup-email"]').type('teste@examploTeste.com').should('have.value', 'teste@examploTeste.com');
   

    //Clicar no botão 'Signup'
    cy.get('button[data-qa="signup-button"]').should('have.text', 'Signup'); 
    cy.get('button[data-qa="signup-button"]').click()

    //Verificar se a mensagem 'ENTER ACCOUNT INFORMATION' está visível.
    cy.get('b').contains('Enter Account Information').should('be.visible');

    //Preencher os seguintes dados: 

    // Título
    cy.get('label[for="id_gender1"]').click();
    cy.get('#id_gender1').should('be.checked');

    // Nome
    cy.get('input[data-qa="name"]').should('have.value', 'Guilherme');

    // E-mail
    cy.get('input[data-qa="email"]').invoke('val').should('eq', 'teste@examploTeste.com');
    
    // Senha 
    cy.get('input[data-qa="password"]').type('teste1123');

    // Data de Nascimento
    cy.get('select[data-qa="days"]').select('11').should('have.value', '11');
    cy.get('select[data-qa="months"]').select('3').should('have.value', '3');
    cy.get('select[data-qa="years"]').select('1970').should('have.value', '1970');

    //Marcar a opção 'Sign up for our newsletter!'.
    cy.get('#newsletter').check().should('be.checked');

    //Marcar a opção 'Receive special offers from our partners!'
    cy.get('#optin').check().should('be.checked');

    //Preencher os seguintes dados:
    //Nome
    cy.get('input[data-qa="first_name"]').type('Guilherme').should('have.value', 'Guilherme');
    
    //Sobrenome
    cy.get('input[data-qa="last_name"]').type('teste').should('have.value', 'teste');
    //Empresa
    cy.get('input[data-qa="company"]').type('ABC LTDA').should('have.value', 'ABC LTDA');

    //Endereço
    cy.get('input[data-qa="address"]').type('Rua Carvalho de Mendonça').should('have.value', 'Rua Carvalho de Mendonça');
    
    //Endereço 2
    cy.get('input[data-qa="address2"]').type('Rua Tolentino Filgueiras').should('have.value', 'Rua Tolentino Filgueiras');

    //País
    cy.get('select[data-qa="country"]')
    .select('Singapore')
    .find('option:selected')
    .should('have.text', 'Singapore');
  

    //Estado
    cy.get('input[data-qa="state"]').type('North Region').should('have.value', 'North Region');

    //Cidade
    cy.get('input[data-qa="city"]').type('Singapura').should('have.value', 'Singapura');

    //CEP
    cy.get('input[data-qa="zipcode"]').type('11080-000').should('have.value', '11080-000');


    // Número de Celular
    cy.get('input[data-qa="mobile_number"]').type('13-12345-6789').should('have.value', '13-12345-6789');

    //Clicar no botão 'Create Account'
    cy.get('button[data-qa="create-account"]').should('have.text', 'Create Account'); 
    cy.get('button[data-qa="create-account"]').click();
      

    //Verificar se a mensagem 'ACCOUNT CREATED!' está visível.
    cy.get('b').contains('Account Created!').should('be.visible');

    //Clicar no botão 'Continue'
    cy.get('a[data-qa="continue-button"]').click();


    //Verificar se a mensagem 'Logged in as username' está visível.
    cy.get('i.fa.fa-user').should('be.visible'); // Verifica se o ícone do usuário está visível
    cy.get('b').should('have.text', 'Guilherme'); // Verifica se o nome "Guilherme" está sendo exibido

    });

    it("Exclusão de conta", function() {

      //Realizar Login
      //Clicar no botão 'Signup / Login'
      cy.get('a[href="/login"]').click();
      
      //Digitar o e-mail
      cy.get('input[data-qa="login-email"]').type('teste@examploTeste.com');
      
      //Digitar senha
      cy.get('input[data-qa="login-password"]').type('teste1123');
      
      //Clicar em Login
      cy.get('button[data-qa="login-button"]').click();

      //Clicar no botão 'Delete Account'
      cy.get('a[href="/delete_account"]').click();

      //Verificar se a mensagem 'ACCOUNT DELETED!.

      cy.contains('b', 'Account Deleted!').should('be.visible');

      //Clicar em continue
      cy.get('a[data-qa="continue-button"]').click();




    });
  });

    



