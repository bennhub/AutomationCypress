describe('Home Phone Lite Legal Copy', function() {
    it('Gets, types and asserts', function() {
      
      cy.visit('https://www.telus.com/en/bc/shop/home/home-phone/plans')

      //Verify term and conditions
      cy.contains('Terms and conditions').click()
      .should('contain.text','Terms and conditions')
      //Verify Legal copy
      cy.get('[data-testid=terms]').should('contain.text','Terms and conditionsOffer subject to change without notice. Available to residential customers who have not subscribed to Home Phone in the past 90 days. Promotional pricing is not available in regulated areas. Check if your local service area is deregulated. Customers in regulated areas, add an additional $5 per month. 911 service charges and taxes are extra. Prices may change without notice. For customers in regulated areas, promotional pricing is available only when Home Phone service is combined with TELUS Internet or TV. Check if your local service area is deregulated. Customers in regulated areas, add an additional $5 per month. A minimum $35 one-time connection fee applies to new line installations outside of a TELUS home bundle in regulated local areas. Additional client requested on-site service not included. Some conditions and restrictions may apply. 911 service charges and taxes are extra. Prices may change without notice. Calling features available in most areas. Prices may vary by area. Some restrictions apply; visit telus.com/serviceterms for details.Calling features available in most areas. Prices may vary by area. Some restrictions apply; visit telus.com/serviceterms for details.Long Distance service terms | Home Phone service terms')

      

    })
})