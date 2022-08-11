
describe('Authentication', function () {

    beforeEach(function(){
        cy.visit('/user/login')
    })
    describe('Positive tests', function () {

        it('Sign in with valid credentials', function () {
            cy.get('#normal_login_email')
                .type(Cypress.env('EMAIL'))
            cy.get('#normal_login_password')
                .type(Cypress.env('PASSWORD'))
            cy.get('.login-form-button')
                .click()

            cy.get('.ant-avatar-square')
                .should('be.visible')
            cy.location('pathname')
                .should('include', 'profile')

        });
    });

    describe('Negative Tests', function () {

        it('Check the toaster with invalid email', function () {
            cy.get('#normal_login_email')
                .type('test@test.test')
            cy.get('#normal_login_password')
                .type(Cypress.env('PASSWORD'))
            cy.get('.login-form-button')
                .click()
            cy.get('.ant-notification-notice-message')
                .should('have.text', 'Auth failed')
        });

        it('Check the toaster with invalid password', function(){
            cy.get('#normal_login_email')
                .type(Cypress.env('EMAIL'))
            cy.get('#normal_login_password')
                .type('test')
            cy.get('.login-form-button')
                .click()
            cy.get('.ant-notification-notice-message')
                .should('have.text', 'Auth failed')
        })

        it('Check the warning messages', function () {
            cy.get('#normal_login_email')
                .type('test')
            cy.xpath('//input[@id="normal_login_email"]/../../..//div[@class="ant-form-item-explain-error"]')
                .should('have.text', '\'email\' is not a valid email')

            cy.get('#normal_login_email')
                .type('test')
                .clear()
            cy.xpath('//input[@id="normal_login_email"]/../../..//div[@class="ant-form-item-explain-error"]')
                .should('have.text', 'Required')

            cy.get('#normal_login_password')
                .type('test')
                .clear()
            cy.xpath('//input[@id="normal_login_password"]/../../..//div[@class="ant-form-item-explain-error"]')
                .should('have.text', 'Required')


        });
    });
})
