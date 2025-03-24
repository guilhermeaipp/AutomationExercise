describe("TC006 - Adicionar Produtos ao Carrinho e Verificar Detalhes", function() {
    beforeEach(function() {
      cy.acessarAplicacao(); 
    });
  
      it("Adicionar Produtos ao Carrinho e Verificar Detalhes", function() {
    //Verificar se a página inicial é exibida corretamente.
    cy.title().should('be.equal', 'Automation Exercise');

    //Clicar no botão 'Products'.
    cy.get('a[href="/products"]').click(); 

    //Passar o mouse sobre o primeiro produto e clicar em 'Add to cart'.

    
    cy.contains('p', 'Blue Top')
    .should('be.visible') // Valida se o título está visível
    .then(() => {
    
  });
    cy.get('img[src="/get_product_picture/1"]')
    .parents('div.productinfo.text-center') // Encontra o elemento pai div.productinfo.text-center
    .trigger('mouseover') // Passa o mouse sobre o elemento pai
    .find('a.add-to-cart') // Encontra o botão "Add to cart" dentro do elemento pai
    .click(); // Clica no botão

  //Clicar no botão 'Continue Shopping'.
  cy.contains('button', 'Continue Shopping').click();

    cy.get('img[src="/get_product_picture/1"]')
    .parents('div.productinfo.text-center') // Encontra o elemento pai div.productinfo.text-center
    .trigger('mouseover') // Passa o mouse sobre o elemento pai
    .find('a.add-to-cart') // Encontra o botão "Add to cart" dentro do elemento pai
    .click(); // Clica no botão

    //Clicar no botão 'Continue Shopping'.
    cy.contains('button', 'Continue Shopping').click();

    //Passar o mouse sobre o segundo produto e clicar em 'Add to cart'.

    cy.contains('p', 'Summer White Top')
  .should('be.visible') 
  .then(() => {

  });
    cy.get('img[src="/get_product_picture/6"]')
    .parents('div.productinfo.text-center') 
    .trigger('mouseover') 
    .find('a.add-to-cart') 
    .click(); 
    
    //Clicar no botão 'Continue Shopping'.
    cy.contains('button', 'Continue Shopping').click();


    //Verificar se os dois produtos foram adicionados ao carrinho.
    cy.get('i.fa-shopping-cart').parent('a[href="/view_cart"]').click();

    //Valida o "Blue Top" esta presente
    cy.get('a[href="/product_details/1"]')
    .should('be.visible')
    .contains('Blue Top');

    // Valida se o "Sleeveless Dress" esta presente.
    cy.get('a[href="/product_details/6"]')
    .should('be.visible')
    .contains('Summer White Top');

    //Verificar se os preços, quantidades e o valor total estão corretos.
    //Quantidade
    cy.get('#product-1 .cart_quantity button').should('have.text', '2');
    cy.get('#product-6 .cart_quantity button').should('have.text', '1');

    //valor final
    cy.get('#product-1 .cart_total_price').should('have.text', 'Rs. 1000');
    cy.get('#product-6 .cart_total_price').should('have.text', 'Rs. 400');


    //Validar o valor por unidade
    cy.get('#product-6 .cart_price p').should('have.text', 'Rs. 400');
    cy.get('#product-1 .cart_price p').should('have.text', 'Rs. 500');

    


    

      });



    });




