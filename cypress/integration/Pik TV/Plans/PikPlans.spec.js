describe('Optik TV', function() {
    it('Gets, types and asserts', function() {
      
      cy.visit(Cypress.env('baseUrl'))

      cy.get('[data-qa=button-pik]').click()

      // Should be on a new URL which includes '/pik/plans'
      cy.url().should('include', '/pik/plans')

      //Verify image is visible
      cy.get('.css-1ne2uoa').should('be.visible')

       //Verify pricing
      cy.get('.css-0 > :nth-child(2)').should('contain.text','$10/month')

       //Verify pricing details
      cy.get('.css-14w0bz > :nth-child(1) > :nth-child(3)').should('contain.text','Pay $0 for the first month1')

      //Verify term and conditions
      cy.contains('Terms and conditions').click()
      .should('contain.text','Terms and conditions')
      
      //Verify Legal copy
      cy.get('[data-testid=terms]').should('contain.text','Terms and conditionsOffer subject to change without notice. TELUS reserves the right to modify regular pricing without notice. Minimum system requirements apply. Final eligibility for service will be determined by a TELUS representative.')

      

      //cy.get('.css-14w0bz > :nth-child(1) > :nth-child(3)').should('have.text','Pay $25 for the first 6 months2')

      // I click on Essentials 2year term in cat
      //cy.get('data-qa=button-prime-time-and-my-5-tvx]').click()

       // I click add to cart and verify that the button is visible
      //cy.get('[data-qa=button-addToCartCta]').click().should ('be.visible')
      
      //cy.contains('Select an Internet plan').click({force: true})
         //.wait(4000)

      //cy.get('.css-vbu1if:nth-child(2) .TDS_BaseButton-modules__sizing___2kf7G').click({force: true})
       

      //cy.get('[data-qa=button-addToCartCta]').click({force: true})

      //cy.get('.css-hmxcde').click()

        
      
     
  
    })
  })
  