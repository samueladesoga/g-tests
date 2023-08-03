describe('crm software compare page', () => {
  beforeEach(() => {
    cy.visit('/crm')
  })

  it('displays compare basket button', () => {
    cy.get('div[data-testid=appbar_compare-basket_button] span').should('have.text', 0)
  })
})
