//Write tests here

describe('Quotes app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3001')
    })

    const nameInput = () => cy.get('input[name="name"]')
    const instrucInput = () => cy.get('input[name="instruction"]')
    const buildPizza = () => cy.get('a.buildPizzaBtn')
    const pepperoni = () => cy.get ('input[name="pepperoni"]')
    const jalepenos = () => cy.get ('input[name="jalepenos"]')
    const mushrooms = () => cy.get ('input[name="mushrooms"]')
    const submit = () => cy.get('button.submitBtn')
    const order = () => cy.get('div.order-details')
    const select = () => cy.get('select')
    const errors = () => cy.get('.errors')

    it('add text to name input', () => {
        buildPizza()
          .click()
        nameInput()
            .should('have.value', '')
            .type('Fatima')
            .should('have.value', 'Fatima')
    })

    it('add text to instruction input', () => {
      buildPizza()
          .click()
      instrucInput()
          .should('have.value', 'none')
          .clear()
          .type('Light sauce')
          .should('have.value', 'Light sauce')
  })

    it('check to see if multiple boxes can be selected', () => {
      buildPizza()
        .click()
      pepperoni()
        .click()
      jalepenos()
        .click()
      mushrooms()
        .click()
          
    })

    it('check to see if form can be submitted', () => {
      buildPizza()
          .click()
      nameInput()
          .should('have.value', '')
          .type('Fatima')
          .should('have.value', 'Fatima')
      select()
          .select('small')
      pepperoni()
          .click()
        jalepenos()
          .click()
      instrucInput()
        .should('have.value', 'none')
        .clear()
        .type('Light sauce')
        .should('have.value', 'Light sauce')
      submit()
        .click()
      order()
        .should('be.visible')
  })

  it('check name validation errors', () => {
    buildPizza()
        .click()
    nameInput()
      .type('J')
    errors()
      .contains('Name must be 2 chars or longer')
        //Check error if name is empty
    nameInput()
      .type('{backspace}')
    errors()
      .contains('Name is required')
  })

  it('check if submit button is initially disabled', () => {
    buildPizza()
      .click()
    submit()
      .should('be.disabled')
  })

})