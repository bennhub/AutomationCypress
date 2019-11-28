describe('Home', function() {
    it('Gets, types and visual tests', function() {

  //Compass qual from Home 
    
  cy.visit(Cypress.env('baseUrl'))

  //snapshots page for comparison
  cy.eyesOpen({
    appName: 'CATA E2E',
    testName: 'Home Page',
    browser: { width: 1024, height: 768, name: 'chrome' },
  });
  cy.eyesCheckWindow('Home Page');
  
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
  
    cy.eyesCheckWindow('Internet PLP');
    
 

  //unfilter plans
  cy.get('.style__CloseButton-sc-1cjw4jg-4').click()

  //Takes me Internet 150 2Yr PDP
  cy.contains('Learn More').click()
  .wait(2000)

  //snapshots page for comparison

  cy.eyesCheckWindow('Int_150_24_PDP');


  //Takes you to internet 150 noterm plan
  cy.contains('Switch to no term plan').click()

  //snapshots page for comparison
 
  cy.eyesCheckWindow('Int_150_noTerm_PDP');
  
  cy.eyesClose();
  

  
  
  
 
    
  


    

        
      
     
  
    })
  })
  