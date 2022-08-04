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

        it.skip('Check the toaster', function () {

            cy.visit('/user/login')
            cy.get('#normal_login_email')
                .type('dumpdusty2@gmail.com')
            cy.get('#normal_login_password')
                .type('test')
            cy.get('.login-form-button')
                .click()
            cy.get('.ant-notification-notice-message')
                .should('have.text', 'Auth failed')

            cy.visit('/user/login')
            cy.get('#normal_login_email')
                .type('test@test.test')
            cy.get('#normal_login_password')
                .type('Qwerty123')
            cy.get('.login-form-button')
                .click()
            cy.get('.ant-notification-notice-message')
                .should('have.text', 'Auth failed')
        });

        it('Check the warning messages', function () {

            cy.visit('/user/login')
            cy.get('#normal_login_email')
                .type('test')
            cy.get('//div[contains(@class, \'ant-form-item-has-error\')][.//input[@id=\'normal_login_email\']]//div[@class=\'ant-form-item-explain-error\']')
                .should('have.text', '\'email\' is not a valid email')

            // cy.get('#normal_login_email')
            //     .type('test')
            //     .clear()
            // cy.get('')
            //     .should('have.text', 'Required')
            //
            // cy.get('#normal_login_password')
            //     .type('test')
            // cy.get('')
            //     .should('have.text', '')


        });
    })

})