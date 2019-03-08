describe('Home Phone', function() {
    it('Gets, types and asserts', function() {
      
      cy.visit(Cypress.env('baseUrl'))
  
      cy.contains('Shop Home Phone').click()
  
      // Should be on a new URL which includes '/commands/actions'
      cy.url().should('include', '/home-phone/plans')
      
      cy.get( ':nth-child(3) > .css-1gwvv4i > .css-bk3bmm > .css-d2oo9m > .TDS_Box-modules__verticalPadding-3___Fsv37 > .css-3lgnu6 > .css-1im66so > .TDS_BaseButton-modules__sizing___2kf7G')
        .click()
      cy.contains('Check availability').click()
      cy.wait(3000)
  
      cy.get('#autocomplete-form-address')
        .type(Cypress.env('address'))
  
      cy.contains('Check availability').click()
      cy.wait(9000) 
  
     // Verify correct image is visible on pdp page
      cy.get('.css-lv63rw').should('be.visible');
  
     // Verify correct pricing and details on pdp page
      cy.get('.css-14w0bz > :nth-child(1)').should('have.text', 'No term $40/monthPay $25 for the first 3 months2');
     
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
  