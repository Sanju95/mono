describe('Forms Test', () => {
    beforeEach(() => {
        cy.visit('/forms')
    })

    it('Header Containts correct text', () => {
        cy.get('h1').contains(/Testing Forms/)
    })

    it('Subscribe email', () => {
        cy.getDataTest('txtEmail').as('email')
        cy.get('@email').type('hello@cypress.com')
        cy.contains('Successfully subbed: hello@cypress.com').should('not.exist')
        cy.getDataTest('btnSubscribe').click()
        cy.contains('Successfully subbed: hello@cypress.com').should('be.visible')
        cy.wait(3000)
        cy.contains('Successfully subbed: hello@cypress.com').should('not.exist')

        cy.get('@email').type('hello@cypress.io')
        cy.contains(/invalid email: hello@cypress.io/i).should('not.exist')
        cy.getDataTest('btnSubscribe').click()
        cy.contains(/invalid email: hello@cypress.io/i).should('exist')
        cy.wait(3000)
        cy.contains(/invalid email: hello@cypress.io/i).should('not.exist')

        cy.getDataTest('btnSubscribe').click()
        cy.contains(/invalid email/i).should('exist')
    })
})