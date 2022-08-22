import AppPage from "./app.page";

class GoalsPage extends AppPage {
    get goalHeader() {return cy.contains('Goals')}
}

export default new GoalsPage()