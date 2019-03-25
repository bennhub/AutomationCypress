describe('Optik TV GWP', function() {
    it('Gets, types and asserts', function() {
    
      
    cy.visit('https://www.telus.com/en/bc/shop/home/optik/gifts')

    cy.xpath('//span[contains(text(),"BenQ 1080p Home Theatre Projector")]')
    
    cy.xpath('//span[@class="css-1fuwhtx"][contains(text(),"$500 Visa Prepaid Card")]')

    cy.xpath('//span[@class="css-1fuwhtx"][contains(text(),"50 LG 4K HDR Smart TV")]')

    cy.get('[data-qa=button-benq-projector]').click()

    cy.get('.css-11bxvq').should('be.visible');

    cy.xpath('//a[contains(text(),"Gift with Purchase")]').click()

    cy.get('[data-qa=button-500-visa]').click()

    cy.get('.css-11bxvq').should('be.visible');

    cy.xpath('//a[contains(text(),"Gift with Purchase")]').click()

    cy.get('.css-vbu1if:nth-child(3) .TDS_BaseButton-modules__sizing___2kf7G').click()
              
    cy.get('.css-11bxvq').should('be.visible');

    cy.xpath('//a[contains(text(),"Gift with Purchase")]').click()




    

        
      
     
  
    })
  })
  