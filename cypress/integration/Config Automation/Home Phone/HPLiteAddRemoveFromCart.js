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

     // Verify correct image is visible on pdp page
      cy.get('.css-lv63rw').should('be.visible');

     // Verify correct pricing and details on pdp page
      cy.get('.css-14w0bz > :nth-child(1)').should('have.text', 'No term  $30/monthPay $15 for the first 3 months2');
      
      // I add to cart
      cy.contains('Add to cart').click()
      cy.wait(3000)

      // Then click review cart on panel
      cy.contains('Review cart').click() 
      cy.wait(3000)

      // I Verify correct pricing and text in summary box 
      cy.get('.summary-box__container').should('have.text', 'SummaryMonthly billFirst billHome Phone$15.00$15.00SubtotalBefore taxes$15.00Monthly bill$15.00First billCheck outContinue shoppingClose');
       
      // I remove from cart
      cy.contains('Remove').click()
      cy.wait(3000)

     // Then verify homephone was removed and correct copy is displayed
      cy.get('.action-error__copy > .TDS_Link-modules__base___1BUGa').should('have.text', 'add items'); 

      // clear cookies 
      cy.clearCookies()   
       

      
      })
  })