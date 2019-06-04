describe('Home Phone Lite Legal Copy', function() {
    it('Gets, types and asserts', function() {
      
      cy.visit('https://www.telus.com/en/bc/shop/home/home-phone/plans')

      //Verify term and conditions
      cy.contains('Terms and conditions').click()
      .should('contain.text','Terms and conditions')
      //Verify Legal copy
      cy.get('[data-testid=terms]').should('contain.text','Terms and conditionsCalling features available in most areas. Prices may vary by area. Some restrictions apply; visit telus.com/serviceterms for details.Long Distance service terms | Home Phone service terms')

      

    })
})