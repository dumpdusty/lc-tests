//Precondition: Login to localcoding.us
//profile page is open

//Execution steps:
//1. Click "Create daily report"
//2. Check any activity
//3. Add 1 hour
//4. Select 1 in 'What is your morale?' selector
//5. Set text '%TIMESTAMP%'
//6. Click create btn

//ER:
//1. %TIMESTAMP% is visible


describe('Profile', function () {
    beforeEach(function () {
        cy.get('#normal_login_email')
            .type('dumpdusty2@gmail.com')
        cy.get('#normal_login_password')
            .type('Qwerty123')
        cy.get('.login-form-button')
            .click()
    })

    it('Daily report creation', function () {
        
    })
})

