describe('Home Phone', function() {
    it('Gets, types and asserts', function() {
      
      cy.visit(Cypress.env('baseUrl'))
  
      cy.contains('Shop Home Phone').click()
  
      // Should be on a new URL which includes '/commands/actions'
      cy.url().should('include', '/home-phone/plans')

      cy.contains('About this plan').click()

      cy.contains('Check availability').click()
      cy.wait(3000)

      cy.get('#autocomplete-form-address')
        .type(Cypress.env('address'))

      cy.contains('Check availability').click()
      cy.wait(9000)

     // Verify correct image is visible
      cy.get('.css-11bxvq').should('be.visible');

     // Verify correct pricing and details
      cy.get('.TDS_Box-modules__betweenRightMargin-1___XT_b2 > div').should('have.text', '$30/month');
      cy.get('.css-14w0bz > :nth-child(1) > :nth-child(3)').should('have.text', 'Pay $15 for the first 3 months1');
      
      cy.contains('Add to cart').click()
      cy.wait(3000)

      cy.get('.css-1uway3t').click() 
      cy.wait(3000)

      cy.contains('Remove').click()
      cy.wait(3000)

     // Verify removed from cart and action copy
      cy.get('.action-error__copy > .TDS_Link-modules__base___1BUGa').should('have.text', 'add items'); 

      // clear cookies 
      cy.clearCookies()   
       

      
      })
  })