describe('Registration', () => {
  
    before(() => {
      cy.visit('/');
    });
    
    it('should provide an ability to add product', () => {
      cy.contains('#itemc', 'Phone').click();
      cy.contains('.hrefch', 'Samsung galaxy s6').click();
      cy.contains('.btn', 'Add to cart').click();
      cy.get('#cartur').click();
      cy.get('td').should('contain', 'Samsung galaxy s6');
    });
  });
  