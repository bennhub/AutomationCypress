describe('Pik Channels Legal Copy', function() {
    it('Gets, types and asserts', function() {
      
      cy.visit('https://www.telus.com/en/bc/shop/home/pik/channels')

      //Verify term and conditions
      cy.contains('Terms and conditions').click()
      .should('contain.text','Terms and conditions')
      
      //Verify Legal copy
      cy.get('[data-testid=terms]').should('contain.text','Terms and conditionsHBO Canada® and related service marks are property of Home Box Office, Inc., used under license. All rights reserved. All images, artwork and trademarks are the property of their respective owners.Subscription to Pik TV and channel required. Not available with all channels. All channels require TELUS Internet service – some channels are not available when not on the TELUS Home Internet service. Mobile access is for use in Canada only, on select devices within wireless network coverage areas. Data charges may apply for mobile service outside Wi-Fi coverage. Select On Demand titles available. On Demand titles cannot be rented on iOS devices, must be rented through Pik TV to be watched on mobile devices. Regular rental charges apply. Additional subscription fees may apply for streaming apps.Pik TV does not require a term contract. Service agreement required for duration of subscription. TELUS Internet customers adding Pik TV will receive a $10 discount with the set up of new Pik TV Subscription. Regular monthly price of $10 per month applies thereafter. Offer available until further notice. Offer available once per household. Not available to existing Optik TV or Satellite TV customers.For the channels selected within your Pik TV pack, for example, the 5 channels included in your Pik 5, each channel is allocated a nominal retail price of $1.')

      

    })
})