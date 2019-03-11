  describe('Optik TV', function() {
    it('Gets, types and asserts', function() {
      cy.clearCookies() 
        .wait(5000)
      
      cy.visit(Cypress.env('baseUrl'))

      cy.get('[data-qa=button-optik]').click()

      // Should be on a new URL which includes '/commands/actions'
      cy.url().should('include', '/optik/plans')

      cy.get('[data-qa=button-essentials-mediaroomtv-hs2-0]').contains('About this plan').click()

      cy.contains('Check availability').click()
        .wait(600)

      cy.get('#autocomplete-form-address')
        .type(Cypress.env('address'))

      cy.contains('Check availability').click()
        .wait(9000)

      cy.get('[data-qa=button-addToCartCta]').click()
      
      cy.contains('Select an Internet plan').click({force: true})

 
      cy.get('[data-qa=button-internet-150-30]').click({multiple: true})

      cy.get('[data-qa=button-addToCartCta]').click()

      cy.get('.css-hmxcde').click()

        
      
     
  
    })
  })
  