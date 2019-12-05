describe('Bundles_Compass', function() {
    it('Gets, types and visual tests', function() {

//Visits Home and begins to qual
cy.visit(Cypress.env('stageUrl'))
cy.contains('Get started').click()

//Quals Compass address
cy.get('#autocomplete-form-address-google')
        .type(Cypress.env('address_150'))
  
cy.contains('Check availability').click()
         .wait(7000) 
   
//visit internet Addons PLP
cy.visit('https://digital:notwebchannel@www.wcstage.telus.com/en/shop/home/bundle/plans')

//Opens FAQ section
//cy.contains('Frequently Asked Questions').click()
         //.wait(2000) 

//Opens T & C section
cy.contains('View terms and conditions').click()
         .wait(2000) 

//snapshots page for comparison
cy.eyesOpen({
    appName: 'E2E CATA',
    testName: 'Bundles_PLP',
    browser: { width: 1024, height: 768, name: 'chrome' },
  });
cy.eyesCheckWindow('Bundles_PLP');

cy.eyesClose();

//visit Bundles Optik 7-1 + Int 150 PDP
cy.visit('https://digital:notwebchannel@www.wcstage.telus.com/en/shop/home/product/optik-7plus1-int150?bundle')

//Opens T & C section
cy.contains('View terms and conditions').click()
         .wait(2000) 

//snapshots page for comparison
cy.eyesOpen({
    appName: 'E2E CATA',
    testName: 'Bundles 7-1+Int_150',
    browser: { width: 1024, height: 768, name: 'chrome' },
  });
cy.eyesCheckWindow('Bundles 7-1+Int_150');

cy.eyesClose();



    })
  })
  