describe('Fundermentals test', () => {
  beforeEach(() => {
    cy.visit('/fundamentals')
  })

  describe('Header', () => {
    it('Containts correct text', () => {
      cy.getDataTest('header').contains(/Testing Fundamentals/i)
    })
  })
  describe('Accordian', () => {
    it('Body text not visible when page loads', () => {
      cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
      cy.get('[data-test="acc-id-1"] [role="button"]').click()
      cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
      cy.get('[data-test="acc-id-1"] [role="button"]').click()
      cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
    })
  })
})