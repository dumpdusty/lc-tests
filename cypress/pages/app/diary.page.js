import AppPage from "./app.page";

class DiaryPage extends AppPage {
    get diaryHeader() {return cy.contains('Daily reports')}
}

export default new DiaryPage()