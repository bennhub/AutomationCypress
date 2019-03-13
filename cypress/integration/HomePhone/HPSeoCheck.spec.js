describe('Home Phone SEO', () => {
    beforeEach(() => {
      cy.visit('https://www.telus.com/en/bc/shop/home/product/home-phone')
    })
  
    it('looks inside the head content using `cy.document()`', () => {
      // this will yield the entire window.document object
      // if you click on DOCUMENT from the command log,
      // it will output the entire #document to the console 
      cy.document()
  
    })
  
    // or make assertions on any of the metadata in the head element
  
    it('looks inside <title> tag', () => {
      cy.get('head title')
        .should('contain', 'TELUS Home Phone - Landlines starting at $25')
    })
  
    it('looks inside <meta> tag for description', () => {
      cy.get('head meta[name="description"]')
        .should('have.attr', 'content', 'Feel safe and secure at home with a TELUS Home Phone. Adding a landline allows you to stay connected even during power outages or emergencies. Get TELUS Home Phone today.')

        
    })

    it('looks inside <meta> tag for keywords', () => {
        cy.get('head meta[name="keywords"]')
          .should('have.attr', 'content', 'home phone, landline')
  
          
      })
  
  })