describe('Pik PDP Legal Copy', function() {
    it('Gets, types and asserts', function() {
      
      cy.visit('https://www.telus.com/en/bc/shop/home/product/prime-time-and-my-5-tvx')

      //Verify term and conditions
      cy.contains('Terms and conditions').click()
      .should('contain.text','Terms and conditions')
      
      //Verify Legal copy
      cy.get('[data-testid=terms]').should('contain.text','Terms and conditionsPik TV does not require a term contract. Service agreement required for duration of subscription. TELUS Internet customers adding Pik TV will receive a $10 discount with the set up of new Pik TV Subscription. Regular monthly price of $10 per month applies thereafter. New Pik TV and TELUS Internet customers who sign up on a TELUS Internet 2 year service agreement will receive a 24 month promotional pricing of Pik TV for $5 per month. Regular pricing applies from the end of the promotional period. New TELUS Internet and Pik customers will receive a $5 discount with the set-up of a new Pik TV subscription for the first 3 months. Eligible on TELUS Internet 15 or above. Offer available until further notice. Offer available once per household. Not available to existing Optik TV or Satellite TV customers.Offer subject to change without notice. TELUS reserves the right to modify regular pricing without notice. Minimum system requirements apply. Final eligibility for service will be determined by a TELUS representative.Must have TELUS Internet. Regular pricing will apply from month 25 onwards. TELUS reserves the right to modify regular pricing without notice. Minimum system requirements apply. Final eligibility for the services will be determined by a TELUS representative.1GB of bonus data for $0 per month available for TELUS mobility customers on select plans. To share data, all additional lines need to be on the same shareable data plan as the primary mobile device. If account exceeds maximum data option allowance, standard data overage charges for usage will apply. Available in BC/AB for new TELUS home services customers. Customers must link the mobility and home services account to get this offer. After 24 months, the 1GB of bonus data will be removed from the customer’s account. It may take up to 8 business days from date of activation for the 1GB of bonus data to be available for use. Limit of one promotional offer of 1GB of bonus data for $0/month for 24 months per customer account.')

      

    })
})