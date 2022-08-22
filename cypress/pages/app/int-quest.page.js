import AppPage from "./app.page";

class InterviewQuestions extends AppPage {
    get intquestHeader() {return cy.contains('Interview')}
}

export default new InterviewQuestions()