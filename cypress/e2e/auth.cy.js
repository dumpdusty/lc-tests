import LoginPage from '../pages/login.page'
import ProfilePage from "../pages/app/profile.page";

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

        it.only('Check the warning messages', function () {
            LoginPage.inputEmail
                .type('test')
                .clear()
            LoginPage.emailValidation
                .should('contain', 'Required')

            LoginPage.inputPassword
                .type('test')
                .clear()
            LoginPage.passwordValidation
                .should('contain', 'Required')


        });

        it('Che ck the message for invalid email data', function () {
            let arr = ['1', 'довшураи', 'fffg@', 'test']
            for(let i=0; i<arr.length; i++){
                cy.get('#normal_login_email')
                    .type(arr[i])
                LoginPage.emailValidation
                    .should('contain', '\'email\' is not a valid email')
                LoginPage.inputEmail
                    .clear()
            }
        })
    });
})
