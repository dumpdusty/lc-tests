import MainPage from "../pages/app/main.page";
import IntQuestPage from "../pages/app/int-quest.page";
import CoursePage from "../pages/app/course.page";
import DiaryPage from "../pages/app/diary.page";
import GroupsPage from "../pages/app/groups.page";
import ChallengesPage from "../pages/app/challenges.page";
import GoalsPage from "../pages/app/goals.page";


describe('Navigation', function () {
    beforeEach(function () {
        cy.signin(Cypress.env('TOKEN'), Cypress.env('USER_ID'))
        cy.reload()
    })

    describe('Courses page', function () {
        it('Courses page opens', function () {
            MainPage.navBar.linkCourses.click()
            cy.location('pathname').should('contain', 'course')
        })
        it('Course header exists', function () {
            MainPage.navBar.linkCourses.click()
            CoursePage.coursesHeader//.should('contain', 'Interactive')
        })
    })

    describe('Interview Questions page', function () {
        it('InterviewQuestions page opens', function () {
            MainPage.navBar.linkInterviewQuestions.click()
            cy.location('pathname').should('contain', 'flash')
        })
        it('InterviewQuestions header exists', function () {
            MainPage.navBar.linkInterviewQuestions.click()
            IntQuestPage.intquestHeader
        })
    })

    describe('Diary page', function () {
        it('Diary page opens', function () {
            MainPage.navBar.linkDiary.click()
            cy.location('pathname').should('contain', 'diary')
        })
        it('Diary header exists', function () {
            MainPage.navBar.linkDiary.click()
            DiaryPage.diaryHeader
        })
    })

    describe('Groups page', function () {
        it('Groups page opens', function () {
            MainPage.navBar.linkGroups.click()
            cy.location('pathname').should('contain', 'group')
        })
        it('Groups header exists', function () {
            MainPage.navBar.linkGroups.click()
            GroupsPage.groupsHeader
        })
    })

    describe('Challenges page', function () {
        it('Challenges page opens', function () {
            MainPage.navBar.linkChallenges.click()
            cy.location('pathname').should('contain', 'challenge')
        })
        it('Challenges header exists', function () {
            MainPage.navBar.linkChallenges.click()
            ChallengesPage.challengeHeader
        })
    })

    describe('Goals page', function () {
        it('Goals page opens', function () {
            MainPage.navBar.linkGoals.click()
            cy.location('pathname').should('contain', 'goal')
        })
        it('Goals header exists', function () {
            MainPage.navBar.linkGoals.click()
            GoalsPage.goalHeader
        })
    })
})