import AppPage from "./app.page";

class ChallengePage extends AppPage {
    get challengeHeader() {return cy.contains('Challenges')}

}

export default new ChallengePage()