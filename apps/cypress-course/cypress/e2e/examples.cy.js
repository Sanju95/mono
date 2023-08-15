describe('Various tests', () => {
    beforeEach(() => {
        cy.visit('/examples')
    })

    it('multiPage testing', () => {
        cy.getDataTest('navWhyCypress').click()
        cy.location('pathname').should('eq', '/')

        cy.getDataTest('navOverview').click()
        cy.location('pathname').should('eq', '/overview')
    })

    it.only('intercepts', () => {
        cy.intercept('POST', 'http://localhost:3000/examples', {
            body: {
                message: 'hello'
            }
        }).as('intercept')

        cy.wait('@intercept')
        cy.getDataTest('btnPost').click()
    })
})