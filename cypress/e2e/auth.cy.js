describe('Authentication', function () {

    describe.skip('Positive tests', function () {

        it('Sign in with valid credentials', function () {

            cy.visit('/user/login')

            cy.get('#normal_login_email')
                .type('dumpdusty2@gmail.com')
            cy.get('#normal_login_password')
                .type('Qwerty123')
            cy.get('.login-form-button')
                .click()

            cy.get('.ant-avatar-square')
                .should('be.visible')
            cy.location('pathname')
                .should('include', 'profile')

        });
    });

    describe('Negative Tests', function () {

        it('Sign in with invalid credentials', function () {

            cy.visit('/user/login')

            cy.get('#normal_login_email')
                .type('dumpdusty2@gmail.com')
            cy.get('#normal_login_password')
                .type('test')
            cy.get('.login-form-button')
                .click()


            cy.get('.ant-notification-notice-message')
                .should('have.text', 'Auth failed')
        });
    })

})