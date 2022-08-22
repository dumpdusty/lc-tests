import AppPage from "./app.page";

class CoursePage extends AppPage {
    get coursesHeader() {return cy.get('h1')}

}

export default new CoursePage()