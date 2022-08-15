declare namespace Cypress{
    interface Chainable<Subject>{
        /**
         * Create one Todo using UI
         * @example
         * cy,createTodo('new item')
         */
        login(token: string, userId: string): Chainable<any>
    }
}