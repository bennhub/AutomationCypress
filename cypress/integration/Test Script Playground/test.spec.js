describe('Hello Cypress, This is Applitools', () => {
  it('works', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })

    cy.visit('https://www.telus.com/en/shop/home/');
    cy.eyesOpen({
      appName: 'Hello Cypress, This is Applitools!',
      testName: 'My first Cypress Test',
      browser: { width: 1024, height: 768, name: 'chrome' },
    });
    cy.eyesCheckWindow('Home Page');
    

    cy.eyesClose();
  });
});