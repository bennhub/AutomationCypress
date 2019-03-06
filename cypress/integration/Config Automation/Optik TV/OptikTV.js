describe('My First Test', function() {
    it('Gets, types and asserts', function() {
      cy.clearCookies() 
      cy.visit('https://telus.com/en/bc/shop/home')
  
      cy.contains('Shop Optik TV').click()
  
      // Should be on a new URL which includes '/commands/actions'
      cy.url().should('include', '/optik/plans')

      cy.contains('About this plan').click()

      cy.contains('Check availability').click()
      cy.wait(600)

      cy.get('#autocomplete-form-address')
      .type('1043 BRUNETTE AVE COQUITLAM BC')

      cy.contains('Check availability').click()
      cy.wait(9000)
      cy.get('Add to cart').click()
      cy.get('.css-1uway3t').click()
      
      cy.clearCookies()   
  
    })
  })