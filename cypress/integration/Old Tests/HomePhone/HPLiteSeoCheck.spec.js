describe('Home Phone Lite SEO', () => {
    beforeEach(() => {
      cy.visit('https://www.telus.com/en/bc/shop/home/product/home-phone-lite')
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
        .should('contain', 'TELUS Home Phone Lite - Landlines starting at $15 | TELUS')
    })
  
    it('looks inside <meta> tag for description', () => {
      cy.get('head meta[name="description"]')
        .should('have.attr', 'content', 'TELUS Home Phone Lite is a cost effective way to ensure that you and your family can always stay connected. Adding a landline lets you stay connected even during power outages or emergencies. Get TELUS Home Phone today.')

        
    })

    it('looks inside <meta> tag for keywords', () => {
        cy.get('head meta[name="keywords"]')
          .should('have.attr', 'content', 'home phone, landline')
  
          
      })
  
  })