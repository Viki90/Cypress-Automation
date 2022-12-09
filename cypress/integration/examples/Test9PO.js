/// <reference types= "cypress" /> 
import HomePage from '../../support/pageObjects/HomePage';
import ProductPage from '../../support/pageObjects/ProductPage';

describe('My 9 Test', function() {

    before(function (){
        cy.fixture('example').then(function(data) {
            this.data = data;
        })
    })

    it('My 9 Test case', function() {
        Cypress.config('defaultCommandTimeout', 9000);
        const homePage = new HomePage();
        const productPage = new ProductPage();

        cy.visit("https://rahulshettyacademy.com/angularpractice/", { headers: { "Accept-Encoding": "gzip, deflate" } });

        homePage.getEditBox().type(this.data.name);
        homePage.getGender().select(this.data.gender);
        homePage.getTwoWayDataBinding().should('have.value', this.data.name);
        homePage.getEditBox().should('have.attr', 'minlength', '2');
        homePage.getEntrepreneur().should('be.disabled');

        homePage.getShopTab().click();

        this.data.productName.forEach(function(element) {
            cy.selectProduct(element);
        });

        productPage.checkOutButton().click();
        cy.contains('Checkout').click();
        cy.get("#country").type('India');
        cy.get('.suggestions > ul > li a').click();
        cy.get('#checkbox2').click({force: true});
        cy.get('input[type="submit"]').click();
        // cy.get('.alert').should('have.text', "Success! Thank you! Your order will be delivered in next few weeks :-).")
        cy.get('.alert').then(function(element) {
            const actualText = element.text();
            expect(actualText.includes("Success")).to.be.true;
        });
    })
})