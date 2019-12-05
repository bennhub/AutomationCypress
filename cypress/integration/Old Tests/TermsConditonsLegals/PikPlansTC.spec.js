describe('Pik Cata Legal Copy', function() {
    it('Gets, types and asserts', function() {
      
      cy.visit('https://www.telus.com/en/bc/shop/home/pik/plans')

      //Verify term and conditions
      cy.contains('Terms and conditions').click()
      .should('contain.text','Terms and conditions')
      
      //Verify Legal copy

      //Verify Legal copy
      cy.get('[data-testid=terms]').should('contain.text','Terms and conditionsOffer subject to change without notice. TELUS reserves the right to modify regular pricing without notice. Minimum system requirements apply. Final eligibility for service will be determined by a TELUS representative.')

      

    })
})