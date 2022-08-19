import BasePage from './base.page'

class LoginPage extends BasePage {
    get inputEmail() {return cy.get('#normal_login_email')}
    get inputPassword() {return cy.get('#normal_login_password')}
    get buttonSignIn() {return cy.get('.login-form-button')}


    open() {
        return super.open('/user/login');
    }

    login(email, password){
        this.inputEmail.type(email)
        this.inputPassword(password)
        this.buttonSignIn.click()
    }
}

export default new LoginPage()
