/// <reference types= "cypress" /> 

describe('My 5 Test', function() {
    it('My 5 Test case', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        // handle mouse hover 
        // cy.get('div.mouse-hover-content').invoke('show');
        cy.contains('Top').click({force: true});
        cy.url().should('include', 'top');
    })
})