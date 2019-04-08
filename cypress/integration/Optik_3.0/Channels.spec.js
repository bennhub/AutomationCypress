describe('Optik TV', function() {
    it('Gets, types and asserts', function() {

cy.visit(Cypress.env('testUrlE'))

cy.get('#autocomplete-form-address')
.type(Cypress.env('address_150'))

cy.contains('Check availability').click()
    

cy.xpath('//INPUT[@id="confirm-address"]').click()

cy.xpath('//button[@id="confirm-form-submit"]').click()
.wait(8000)
      
//cy.visit('https://digital:notwebchannel@www.wctest.telus.com/en/bc/shop/home/optik/channels')

//cy.get('[data-qa=button-optik]').click()

 
   

        
      
     
  
    })
  })
  