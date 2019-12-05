describe('Internet GWP Legal Copy', function() {
    it('Gets, types and asserts', function() {
      
      cy.visit('https://www.telus.com/en/bc/shop/home/internet/addons')

      //Verify term and conditions
      cy.contains('Terms and conditions').click()
      .should('contain.text','Terms and conditions')
      //Verify Legal copy
      cy.get('[data-testid=terms]').should('contain.text','Terms and conditionsNot available in all areas. Offer of $5/mo. for 24 months is only available via financing to TELUS Internet customers on a term agreement. Interest rate is 0%. No term price of TELUS Wi-Fi Boost is $120. Subject to approved credit. Not available to customers on the credit limit program. Taxes are extra. Offer subject to change without notice. Offer available to residential TELUS Internet customers only. Maximum of 1 Starter Pack per account. Minimum system requirements apply. Final eligibility for service will be determined by a TELUS representative.')

      

   
    })
})