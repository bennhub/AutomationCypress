describe('Home Phone Lite', function() {
    it('Gets, types and asserts', function() {
      
      cy.visit(Cypress.env('baseUrl'))
  
      cy.contains('Shop Home Phone').click()
  
      // Should be on a new URL which includes '/home-phone/plans'
      cy.url().should('include', '/home-phone/plans')

      cy.get('[data-qa=button-home-phone-lite]').click({force: true})

      cy.contains('Check availability').click()
        .wait(3000)

      cy.get('#autocomplete-form-address')
        .type(Cypress.env('address_150'))

      cy.contains('Check availability').click()
        .wait(7000)

     // Verify correct image is visible on pdp page
      cy.get('.css-lv63rw').should('be.visible');

     // Verify correct pricing and details on pdp page
      cy.get('.css-0 > :nth-child(2)').should('have.text', '$30per month');
      
      // I add to cart
      cy.contains('Add to cart').click()
        .wait(3000)

      // Then click review cart on panel
      cy.contains('Review cart').click() 
        .wait(3000)

      // I Verify correct pricing and text in summary box 
      cy.get('.summary-box__footer-container').should('have.text', 'SubtotalBefore taxes$30.00Monthly bill$30.00First billCheck outContinue shoppingClose');
       
      // I remove from cart
      cy.contains('Remove').click()
        .wait(3000)

     // Then verify homephone was removed and correct copy is displayed
      cy.get('.action-error__copy > .TDS_Link-modules__base___1BUGa').should('have.text', 'add items'); 

      // clear cookies 
      cy.clearCookies()   
       

      
      })
  })