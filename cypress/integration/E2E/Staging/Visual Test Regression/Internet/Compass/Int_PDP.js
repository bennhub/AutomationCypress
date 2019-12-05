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
   
//visit internet 150 2yr PDP
cy.visit('https://www.telus.com/en/shop/home/product/internet-150-30')

//Opens T & C section
cy.contains('View terms and conditions').click()
         .wait(2000) 

//snapshots page for comparison
cy.eyesOpen({
    appName: 'E2E CATA',
    testName: 'Internet_PDP',
    browser: { width: 1024, height: 768, name: 'chrome' },
  });
cy.eyesCheckWindow('Int_150_24_PDP');

cy.eyesClose();

//go to internet 150 no-term PDP
cy.contains('Switch to no term plan').click()
         .wait(2000) 

//Opens T & C section
cy.contains('View terms and conditions').click()
         .wait(2000) 

//snapshots page for comparison
cy.eyesOpen({
    appName: 'E2E CATA',
    testName: 'Internet_150_noTerm',
    browser: { width: 1024, height: 768, name: 'chrome' },
    });
    cy.eyesCheckWindow('Int_150_noTerm_PDP');
        
    cy.eyesClose(); 
    
//visit internet 75 2yr PDP
cy.visit('https://www.telus.com/en/shop/home/product/internet-75')

//Opens T & C section
cy.contains('View terms and conditions').click()
         .wait(2000) 


//snapshots page for comparison
cy.eyesOpen({
    appName: 'E2E CATA',
    testName: 'Internet_75_2yr',
    browser: { width: 1024, height: 768, name: 'chrome' },
    });
    cy.eyesCheckWindow('Int_75_2yr');
        
    cy.eyesClose();

//go to internet 75 no-term PDP
cy.contains('Switch to no term plan').click()
         .wait(2000) 
        
 //Opens T & C section
cy.contains('View terms and conditions').click()
        .wait(2000) 
                 

//snapshots page for comparison
cy.eyesOpen({
    appName: 'E2E CATA',
    testName: 'Internet_75_noTerm',
    browser: { width: 1024, height: 768, name: 'chrome' },
    });
    cy.eyesCheckWindow('Int_75_noTerm_PDP');
        
    cy.eyesClose();




    })
  })
  