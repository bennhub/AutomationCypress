describe('Internet Plans', function() {
    it('Gets, types and visual tests', function() {

    
  cy.visit(Cypress.env('Int_PDP'))


  //snapshots page for comparison
  cy.eyesOpen({
    appName: 'CATA E2E',
    testName: 'Int PDP',
    browser: { width: 1024, height: 768, name: 'chrome' },
  });
  cy.eyesCheckWindow('Int_PDP');
     

  cy.contains('Show available plans').click()
         .wait(3000) 
  
  //Clicks on get started
  //cy.contains('Get started').click()

  //Quals Compass address

  //cy.get('#autocomplete-form-address-google')
        //.type(Cypress.env('address_150'))
  
  //cy.contains('Check availability').click()
         //.wait(7000) 
  
  cy.eyesClose();
    })
  })
  