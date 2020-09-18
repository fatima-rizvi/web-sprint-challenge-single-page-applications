//Write tests here

describe('Quotes app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3001')
    })

    const nameInput = () => cy.get('input[name="name"]')
    const instrucInput = () => cy.get('input[name="instruction"]')

    it('add text to name input', () => {
        nameInput()
            .should('have.value', '')
            .type('Fatima')
            .should('have.value', 'Fatima')
    })

    

})