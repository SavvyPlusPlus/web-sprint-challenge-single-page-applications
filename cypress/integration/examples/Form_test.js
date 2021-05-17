Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
describe ('my first test', function () {
    it('Does not do much', function () {
        cy.visit('http://localhost:3002/pizza')
        cy.get('#name-input')
            .type('Can I type here')
            .should('have.value','Can I type here')
        cy.get('[type="radio"]').check()
        cy.get('[type="checkbox"]').check()
        cy.get('form').submit() 
    } )
})