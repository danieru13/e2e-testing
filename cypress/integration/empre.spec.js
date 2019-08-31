describe('My first e2e testing', function(){
    /*it('Check website', function(){
        //Arrange
        // - visit some place
        cy.visit('https://example.cypress.io')

        //Act
        // Search a element & click
        cy.contains('type').click()

        //Assert
        // - Check URL
        cy.url()
            .should('include', '/commands/action')

        cy.get('#email1') 
            .type('daniel.vanegas1@udea.edu.co')
            .should('have.value', 'daniel.vanegas1@udea.edu.co')      
    })*/

    it('Search an iPhone', function(){
        cy.visit('http://localhost:4200')
        cy.contains('Estefany')
        cy.get('input')
            .type('iphone 8 plus 64gb')
            .should('have.value', 'iphone 8 plus 64gb')
        cy.get('button')
            .click()  
        cy.contains('iPhone')
        
        cy.get('input')
            .clear()
            .type('Nikon D750')
            .should('have.value', 'Nikon D750')
        cy.get('button')
            .click()  
        cy.contains('Nikon')    
    })
})