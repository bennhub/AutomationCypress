describe('ClearCookies', function() {
    it('clearCookies', function() {
      
        cy.visit(Cypress.env('stageUrl'))
  
      // clear cookies 
      cy.clearCookies().end()
       
  
      
      })
  })
  