describe('Optik GWP', function() {
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
cy.visit('https://www.telus.com/en/shop/home/optik/gifts')

//Opens FAQ section
cy.contains('Frequently Asked Questions').click()
         .wait(2000) 

//Opens T &C section
cy.contains('View terms and conditions').click()
         .wait(2000) 

//snapshots page for comparison
cy.eyesOpen({
    appName: 'E2E CATA',
    testName: 'Optik_Gwp_Plp',
    browser: { width: 1024, height: 768, name: 'chrome' },
  });
cy.eyesCheckWindow('Opt_Gwp_Plp');

cy.eyesClose();

//visit internet GWP Visa PDP
cy.visit('https://www.telus.com/en/shop/home/product/500-visa')

//Opens FAQ section
cy.contains('Frequently Asked Questions').click()
         .wait(2000)

//Opens T & C section
cy.contains('View terms and conditions').click()
         .wait(2000) 

//snapshots page for comparison
cy.eyesOpen({
    appName: 'E2E CATA',
    testName: 'Opt_GWP_Visa_PDP',
    browser: { width: 1024, height: 768, name: 'chrome' },
  });
cy.eyesCheckWindow('Opt_GWP_Visa_PDP');

cy.eyesClose();



    })
  })
  