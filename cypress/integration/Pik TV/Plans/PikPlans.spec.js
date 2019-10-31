describe('Optik TV', function() {
    it('Gets, types and asserts', function() {
      
      cy.visit(Cypress.env('baseUrl'))

      cy.get('[data-qa=button-pik]').click()

      // Should be on a new URL which includes '/pik/plans'
      cy.url().should('include', '/pik/plans')

      //Verify image is visible
      cy.get('.style__Image-fxrvoo-2').should('be.visible')

       //Verify pricing
      cy.get('.style__Container-sc-1yj7jeu-1').invoke('text').should('contain','$5/month')

       //Verify pricing details
       cy.get('.style__Container-sc-15in1n8-0').invoke('text').should('contain','24 months')

      //Verify term and conditions
      cy.contains('View terms and conditions').click()
      
      
      //Verify Legal copy
      cy.get('.List__StyledListItem-ju21tg-0').invoke('text').should('contain','Offer subject to change without notice')

      

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
  