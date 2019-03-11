  describe('Optik TV', function() {
    it('Gets, types and asserts', function() {
      cy.clearCookies() 
      
      cy.visit(Cypress.env('baseUrl'))

      cy.get('[data-qa=button-optik]').click()

      // Should be on a new URL which includes '/commands/actions'
      cy.url().should('include', '/optik/plans')

      cy.contains('About this plan').click()

      cy.contains('Check availability').click()
        .wait(600)

      cy.get('#autocomplete-form-address')
        .type(Cypress.env('address'))

      cy.contains('Check availability').click()
        .wait(9000)

      cy.get('Add to cart').click()
      
      cy.get('.css-1uway3t').click()
      
      cy.clearCookies()   
  
    })
  })
  