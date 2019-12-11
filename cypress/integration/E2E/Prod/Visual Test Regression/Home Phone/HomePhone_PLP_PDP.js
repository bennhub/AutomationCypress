describe('Home Phone', function() {
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
//Go to HomePhone plans 
cy.get('[data-qa=button-home-phone]').click()
        .wait(2000)
 

//Opens T & C section
cy.contains('View terms and conditions').click()
.wait(2000) 

//snapshot Homephone for comparison
cy.eyesOpen({
      appName: 'E2E CATA',
      testName: 'Home Phone PLP',
      browser: { width: 1440, height: 900, name: 'chrome' }
    
    });
cy.eyesCheckWindow('Home Phone Plans Page');//shop whole page

cy.eyesClose();

//visit Home Phone Lite
cy.visit('https://www.telus.com/en/shop/home/product/home-phone-lite')


//Opens Calling Features section
cy.contains('Calling features').click()
         .wait(2000)

//Opens T & C section
cy.contains('View terms and conditions').click()
         .wait(2000) 

//snapshots page for comparison
cy.eyesOpen({
    appName: 'E2E CATA',
    testName: 'HomePhoneLite_PDP',
    browser: { width: 1024, height: 768, name: 'chrome' },
  });
cy.eyesCheckWindow('HomePhoneLite');

cy.eyesClose();

//visit basics + crave PDP
cy.visit('https://www.telus.com/en/shop/home/product/home-phone')


//Opens calling feautures section
cy.contains('Calling features').click()
         .wait(2000)         

//Opens T & C section
cy.contains('View terms and conditions').click()
         .wait(2000) 


//snapshots page for comparison
cy.eyesOpen({
    appName: 'E2E CATA',
    testName: 'HomePhone_PDP',
    browser: { width: 1024, height: 768, name: 'chrome' },
  });
cy.eyesCheckWindow('HomePhone_PDP');

cy.eyesClose();

    })
  })
  