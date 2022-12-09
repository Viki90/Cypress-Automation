/// <reference types= "cypress" /> 

describe('My New Test', function() {
    it('My New Test case', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#alertbtn').click();
        cy.get('[value="Confirm"]').click();
        // window:alert
        cy.on('window:alert', (str) => {
            // Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge');
        });

        // window:confirm
        cy.on('window:confirm', (str) => {
            // Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?');
        });

        // open in same window
        cy.get('#opentab').invoke('removeAttr', 'target').click();

        cy.url().should('include', 'rahulshettyacademy');

        // browser navigation back
        cy.go('back');
    })
})