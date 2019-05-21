describe('Internet GWP Legal Copy', function() {
    it('Gets, types and asserts', function() {
      
      cy.visit('https://www.telus.com/en/bc/shop/home/internet/gifts')

      //Verify term and conditions
      cy.contains('Terms and conditions').click()
      .should('contain.text','Terms and conditions')
      //Verify Legal copy
      cy.get('[data-testid=terms]').should('contain.text','Terms and conditionsTELUS Visa* Prepaid Cards are issued by Peoples Trust Company pursuant to a license by Visa Int. Trademark of Visa Int., used under license. No cash access or recurring payments. Card valid for up to 12 months; unused funds will be forfeited at midnight EST the last day of the month of the valid thru date. Card terms and conditions apply, see MyPrepaidCenter.com/site/visa-univ-can. Offer subject to change without notice, while quantities last and cannot be combined with promotional prices. Offer available to residential customers who have not subscribed to TELUS Internet in the past 90 days. Minimum system requirements apply. Final eligibility for the services will be determined by a TELUS representative. Internet access is subject to usage limits; additional charges apply for exceeding the included data. A cancellation fee applies for early termination of the service agreement and will be the value of the promotional gift received in return for your term commitment multiplied by the number of months remaining in the term (with a partial month counting as a full month), divided by the total number of months in the term, plus applicable taxes.')

      

   
    })
})