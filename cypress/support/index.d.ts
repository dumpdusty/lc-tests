declare namespace Cypress{
    interface Chainable<Subject>{
        /**
         * Create one Todo using UI
         * @example
         * cy,createTodo('new item')
         */
        signIn(token: string, userId: string): Chainable<any>
    }
}