describe('ClearCookies', function() {
    it('clearCookies', function() {
      
      cy.visit(Cypress.env('baseUrl'))
  
     
      // clear cookies 
      cy.clearCookies().end()
       
  
      
      })
  })
  