/// <reference types= "cypress" /> 

describe('My 8 Test', function() {

    before(function (){
        cy.fixture('example').then(function(data) {
            this.data = data;
        })
    })

    it('My 8 Test case', function() {
        cy.visit("https://rahulshettyacademy.com/angularpractice/", { headers: { "Accept-Encoding": "gzip, deflate" } });
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name);
        cy.get('select').select(this.data.gender);
        cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name);
        cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2');
        cy.get('#inlineRadio3').should('be.disabled');
        cy.pause();


        cy.get(':nth-child(2) > .nav-link').click();
        // cy.get('h4.card-title').each(($el, index, $list) => {
        //     if($el.text().includes('Blackberry')) {
        //         cy.get('button.btn.btn-info').eq(index).click();
        //     }
        // });

        cy.selectProduct('Blackberry');
        cy.selectProduct('Nokia Edge');

        this.data.productName.forEach(function(element) {
            cy.selectProduct(element);
        });
    })
})