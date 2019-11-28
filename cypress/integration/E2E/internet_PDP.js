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
cy.get('[data-qa=button-internet]').click()
        .wait(2000)

cy.contains('Learn More').click()
        .wait(2000)

//snapshots page Internet PLP for comparison
cy.eyesOpen({
      appName: 'E2E CATA',
      testName: 'Internet_PDP',
      browser: { width: 1024, height: 768, name: 'chrome' },
    });
cy.eyesCheckWindow('Int_150_24_PDP');

cy.eyesClose();




    })
  })
  