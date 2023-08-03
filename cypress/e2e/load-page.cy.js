//import CompareBasket from '../pages/CompareBasket';
    Cypress.on('uncaught:exception', (err) => {
      console.log('Cypress detected uncaught exception: ', err);
      return false;
    });

describe('crm software compare page', () => {
  beforeEach(() => {
    cy.visit('/crm')
  })

  it('displays compare basket button', () => {
    //const compareBasket = new CompareBasket();
    cy.get('div[data-testid=appbar_compare-basket_button] span').should('have.text', 0)
    cy.get('div[data-testid=appbar_compare-basket_button] span').click()
    cy.get('div[data-testid=compare-basket]').should('be.visible')
    //expect(compareBasket.isDisplayed()).to.be.true
    //expect(compareBasket.basketEmpty()).to.be.true
  })
})
