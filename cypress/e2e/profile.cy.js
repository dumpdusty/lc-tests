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
        const timeStamp = new Date().getTime()
        const description = `${timeStamp} 012345678901234567890123456789`

        cy.get('data-qa="dailyReportsBtn"')
            .click()
        cy.get('input[value="interview_preparation"]')
            .click()
        cy.get('.ant-input-number-input[placeholder="hours"]')
            .type('1')
        cy.get('[title="1"]')
            .click()
        cy.get('#description')
            .type(description)
        cy.get('button[type="submit"]')
            .click()

        cy.contains(description)
            .should('be.visible')

    })
})

