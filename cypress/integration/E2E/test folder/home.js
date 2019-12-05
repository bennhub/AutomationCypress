describe('Home', function() {
    it('Gets, types and asserts', function() {

  //Compass qual from Home 
    
  cy.visit(Cypress.env('baseUrl'))

  //snapshots page for comparison
  cy.eyesOpen({
    appName: 'CATA E2E',
    testName: 'Home Page',
    browser: { width: 1024, height: 768, name: 'chrome' },
  });
  cy.eyesCheckWindow('Home Page');
  
  cy.eyesClose();

  //Clicks on get started
    
  cy.contains('Get started').click()

  //Quals Compass address

  cy.get('#autocomplete-form-address-google')
        .type(Cypress.env('address_150'))
  
  cy.contains('Check availability').click()
         .wait(7000) 
   
  //lands back on home page
  //Go to internet plans 
  cy.get('[data-qa=button-internet]').click()

    //snapshots page for comparison
    cy.eyesOpen({
      appName: 'E2E CATA',
      testName: 'Internet PLP',
      browser: { width: 1024, height: 768, name: 'chrome' },
    });
    cy.eyesCheckWindow('Home Page');
    
    cy.eyesClose();

  //unfilter plans
  cy.get('.style__CloseButton-sc-1cjw4jg-4').click()

  //assert internet-150 2yr term and no term is visible
  cy.get('[data-qa=internet-150-30-24]').should('be.visible')
  cy.get('[data-qa=internet-150-30-0]').should('be.visible')

  //
  cy.contains('Learn More').click()
  .wait(2000)
  //
  cy.contains('Switch to no term plan').click()
  //
  cy.get('[data-di-id=di-id-f296d19a-17d32605]').click()
  
  
  
 
    
  


    

        
      
     
  
    })
  })
  