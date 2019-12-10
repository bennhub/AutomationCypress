describe('Internet Plans', function() {
    it('Gets, types and visual tests', function() {


//Visits Home and begins to qual
cy.visit(Cypress.env('baseUrl'))
cy.contains('Get started').click()

//Quals Compass address
cy.get('#autocomplete-form-address-google')
        .type(Cypress.env('address_150'))
  
cy.contains('Check availability').click()
         .wait(7000) 
   
//lands back on home page
//Go to internet plans 
cy.get('[data-qa=button-optik]').click()
        .wait(2000)

 

//Opens T & C section
cy.contains('View terms and conditions').click()
.wait(2000) 

//snapshot Optik for comparison
cy.eyesOpen({
      appName: 'E2E CATA',
      testName: 'Optik PLP',
      browser: { width: 1440, height: 900, name: 'chrome' }
    
    });
cy.eyesCheckWindow('Optik Plans Page');//shop whole page

cy.eyesClose();




    })
  })
  