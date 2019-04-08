describe('Pik Addons Legal Copy', function() {
    it('Gets, types and asserts', function() {
      
      cy.visit('https://www.telus.com/en/bc/shop/home/pik/channels')

      cy.get(':nth-child(3) > .css-1gjxe0z').click()

      //Verify term and conditions
      cy.contains('Terms and conditions').click()
      .should('contain.text','Terms and conditions')
      
      //Verify Legal copy
      cy.get('[data-testid=terms]').should('contain.text','Terms and conditionsCustomers must pay back the balance of the Apple TV over a 24 month period via equal monthly payments. Apple TV is $9.55/month (total no term price: $229) on a 2 year TELUS Easy Payment plan for 24 months. Interest rate is 0%. Once the purchase price has been paid, Pik TV will continue on a month-to-month basis without the monthly charge for the Apple TV. Subject to approved credit. Only available at participating locations. Taxes are extra. The taxes are calculated based on the total no term price and must be paid in full at the time of purchase in compliance with tax legislation. The taxation rate is based on the province where the purchase is made. Customers who cancel service before the end of their term will be charged the remainder of their TELUS Easy Payment balance on the last bill for the service.Subscription to Pik TV and channel required. Not available with all channels. All channels require TELUS Internet service – some channels are not available when not on the TELUS Home Internet service. Mobile access is for use in Canada only, on select devices within wireless network coverage areas. Data charges may apply for mobile service outside Wi-Fi coverage. Select On Demand titles available. On Demand titles cannot be rented on iOS devices, must be rented through Pik TV to be watched on mobile devices. Regular rental charges apply. Additional subscription fees may apply for streaming apps.Pik TV does not require a term contract. Service agreement required for duration of subscription. TELUS Internet customers adding Pik TV will receive a $10 discount with the set up of new Pik TV Subscription. Regular monthly price of $10 per month applies thereafter. Offer available until further notice. Offer available once per household. Not available to existing Optik TV or Satellite TV customers.')

      

    })
})