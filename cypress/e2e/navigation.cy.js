import MainPage from "../pages/app/main.page";
import intQuestPage from "../pages/app/int-quest.page";
import coursePage from "../pages/app/course.page";
import DiaryPage from "../pages/app/diary.page";
import GroupsPage from "../pages/app/groups.page";
import ChallengesPage from "../pages/app/challenges.page";
import GoalsPage from "../pages/app/goals.page";


describe('Navigation', function () {
    beforeEach(function () {
        cy.login(Cypress.env('TOKEN'), Cypress.env('USER_ID'))
        cy.reload()
    })
    it('Courses page opens', function () {
        MainPage.navBar.linkCourses.click()
        cy.location('pathname').should('contain', 'course')
    })
    it('Course header exists', function () {
        MainPage.navBar.linkCourses.click()
        coursePage.coursesHeader.should('contain', 'Interactive')
    })

    it('InterviewQuestions page opens', function () {
        MainPage.navBar.linkInterviewQuestions.click()
        cy.location('pathname').should('contain', 'flash')
    })

    it('InterviewQuestions header exists', function () {
        MainPage.navBar.linkInterviewQuestions.click()
        intQuestPage.intquestHeader.should('contain', 'Interview')
    })

    it('Diary page opens', function () {
        MainPage.navBar.linkDiary.click()
        cy.location('pathname').should('contain', 'diary')
    })

    it('Diary header exists', function () {
        MainPage.navBar.linkDiary.click()
        DiaryPage.diaryHeader.should('contain', 'Daily')
    })


    it('Groups page opens', function () {
        MainPage.navBar.linkGroups.click()
        cy.location('pathname').should('contain', 'group')
    })
    it('Groups header exists', function () {
        MainPage.navBar.linkGroups.click()
        GroupsPage.groupsHeader.should('contain', 'Groups')
    })


    it('Challenges page opens', function () {
        MainPage.navBar.linkChallenges.click()
        cy.location('pathname').should('contain', 'challenge')
    })
    it('Challenges header exists', function () {
        MainPage.navBar.linkChallenges.click()
        ChallengesPage.challengeHeader.should('contain', 'Challenges')
    })


    it('Goals page opens', function () {
        MainPage.navBar.linkGoals.click()
        cy.location('pathname').should('contain', 'goal')
    })
    it('Goals header exists', function () {
        MainPage.navBar.linkGoals.click()
        GoalsPage.goalHeader.should('contain', 'Goals')
    })
})