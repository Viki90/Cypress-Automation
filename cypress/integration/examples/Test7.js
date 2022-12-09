/// <reference types= "cypress" /> 

describe('My 5 Test', function() {
    it('My 5 Test case', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        // handling child window
        cy.get('#opentab').then(function(el) {
            const url =  el.prop('href');
            cy.visit(url)
        });
    })
})