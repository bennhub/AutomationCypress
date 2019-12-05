describe('Optik 4TP Plan', function() {
    it('Gets, types and asserts', function() {
    
      
    cy.visit('https://www.telus.com/en/bc/shop/home/optik/plans')
    
    cy.contains('Get started').click()

    cy.get('#autocomplete-form-address-google')
        .type(Cypress.env('address_150'))
  
      cy.contains('Check availability').click()
         .wait(9000) 
    
    



    

        
      
     
  
    })
  })
  