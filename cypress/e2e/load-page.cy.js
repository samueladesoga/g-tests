import {CompareBasketComponent} from '../pages/CompareBasketComponent';
import {ListingsPage} from '../pages/ListingsPage';

describe('crm software compare page', () => {
  beforeEach(() => {
    cy.visit('/crm')
  })

  it('displays an empty compare basket when launched', () => {
    const compareBasket = new CompareBasketComponent();
    const listingsPage = new ListingsPage();
    listingsPage.getItemsInCompareBasket().should('have.text', 0)
    listingsPage.launchCompareBasket()
    compareBasket.getWrapper().should('be.visible')
    compareBasket.getCompareBasketAddButtons().should("have.length", 4)
  })
})