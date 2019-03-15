  describe('Optik TV', function() {
    it('Gets, types and asserts', function() {
      cy.clearCookies() 
        .wait(5000)
      
      cy.visit(Cypress.env('baseUrl'))

      cy.get('[data-qa=button-optik]').click()

      // Should be on a new URL which includes '/optik/plans'
      cy.url().should('include', '/optik/plans')

      // I click on Essentials 2year term in cat
      cy.get('.css-vbu1if:nth-child(2) .TDS_BaseButton-modules__sizing___2kf7G').click({force: true })
      
      // I check if its available based on address
      cy.contains('Check availability').click()
        .wait(600)

      cy.get('#autocomplete-form-address')
        .type(Cypress.env('address_150'))

      cy.contains('Check availability').click()
        .wait(9000)
      // I verify correct pricing and details
      cy.get('.css-m66d9f').should('have.text','$38/month')
      cy.get('.css-14w0bz > :nth-child(1) > :nth-child(3)').should('have.text','Pay $25 for the first 6 months2')

       // I click add to cart and verify that the button is visible
      cy.get('[data-qa=button-addToCartCta]').click().should ('be.visible')
      
      cy.contains('Select an Internet plan').click({force: true})
         .wait(4000)

      cy.get('.css-vbu1if:nth-child(2) .TDS_BaseButton-modules__sizing___2kf7G').click({force: true})
       

      cy.get('[data-qa=button-addToCartCta]').click({force: true})

      cy.get('.css-hmxcde').click()

        
      
     
  
    })
  })
  