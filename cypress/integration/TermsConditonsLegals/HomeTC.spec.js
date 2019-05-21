describe('Global Legal Copy', function() {
    it('Gets, types and asserts', function() {
      
      cy.visit(Cypress.env('baseUrl'))

      //Verify term and conditions
      cy.contains('Terms and conditions').click()
      .should('contain.text','Terms and conditions')
      
      //Verify Legal copy

      cy.get('.TDS_Box-modules__betweenBottomMargin-2___31zX_').should('contain.text','Pik TV does not require a term contract. Service agreement required for duration of subscription. TELUS Internet customers adding Pik TV will receive a $10 discount with the set up of new Pik TV Subscription. Regular monthly price of $10 per month applies thereafter. Offer available until further notice. Offer available once per household. Not available to existing Optik TV or Satellite TV customers.')
      
      

    })
})
