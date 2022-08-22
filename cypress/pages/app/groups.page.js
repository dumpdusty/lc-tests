import AppPage from "./app.page";

class GroupPage extends AppPage {
    get groupsHeader() {return cy.get('h1')}
}

export default new GroupPage()