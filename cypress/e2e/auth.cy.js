import LoginPage from '../pages/login.page'
import ProfilePage from "../pages/profile.page";

describe('Authentication', function () {

    beforeEach(function(){
        LoginPage.open()
    })
    describe('Positive tests', function () {

        it('Sign in with valid credentials', function () {
           LoginPage.login(Cypress.env('EMAIL'), Cypress.env('PASSWORD'))

            ProfilePage.iconAvatar
                .should('be.visible')
            cy.location('pathname')
                .should('include', 'profile')

        });
    });

    describe('Negative Tests', function () {

        it('Check the toaster with invalid email', function () {

            LoginPage.login('test@test.test', Cypress.env('PASSWORD'))
            LoginPage.toast
                .should('contain', 'Auth failed')
        });

        it('Check the toaster with invalid password', function(){
            LoginPage.login(Cypress.env('EMAIL'), '12345')
            LoginPage.toast
                .should('contain', 'Auth failed')
        })

        it('Check the warning messages', function () {
            cy.get('#normal_login_email')
                .type('test')
                .clear()
            cy.get('#normal_login_email')
                .parents('div[class="ant-col ant-form-item-control"]')
                .find('div[class="ant-form-item-explain-error"]')
                .should('contain', 'Required')

            cy.get('#normal_login_password')
                .type('test')
                .clear()
            cy.get('#normal_login_password')
                .parents('div[class="ant-col ant-form-item-control"]')
                .find('div[class="ant-form-item-explain-error"]')
                .should('contain', 'Required')


        });

        it.only('Che ck the message for invalid email data', function () {
            let arr = ['1', 'довшураи', 'fffg@', 'test']
            for(let i=0; i<arr.length; i++){
                cy.get('#normal_login_email')
                    .type(arr[i])
                cy.get('#normal_login_email')
                    .parents('div[class="ant-col ant-form-item-control"]')
                    .find('div[class="ant-form-item-explain-error"]')
                    .should('contain', '\'email\' is not a valid email')
                cy.get('#normal_login_email')
                    .clear()
            }
        })
    });
})
