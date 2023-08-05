Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

import {CompareBasketComponent} from '../pages/CompareBasketComponent';
import {ListingsPage} from '../pages/ListingsPage';

describe('crm software compare page', () => {
  beforeEach(() => {
    cy.visit('/crm')
  })

  it('displays an empty compare basket when launched', () => {
    const compareBasket = new CompareBasketComponent()
    const listingsPage = new ListingsPage()
    listingsPage.getItemsInCompareBasket().should('have.text', 0)
    listingsPage.launchCompareBasket()
    compareBasket.getWrapper().should('be.visible')
    compareBasket.getCompareBasketAddButtons().should("have.length", 4)
  })

  it('click on compare item adds item to compare basket', () => {
    const compareBasket = new CompareBasketComponent()
    const listingsPage = new ListingsPage()
    listingsPage.addNthItemToCompareBasket(0)
    compareBasket.getWrapper().should('be.visible')
    compareBasket.getCompareBasketAddButtons().should("have.length", 3)
    listingsPage.getItemsInCompareBasket().should('have.text', 1)
  })

    it.only('click on compare item for an added item removes item from compare basket', () => {
    const compareBasket = new CompareBasketComponent()
    const listingsPage = new ListingsPage()
    listingsPage.addNthItemToCompareBasket(0)
    compareBasket.getWrapper().should('be.visible')
    listingsPage.getItemsInCompareBasket().should('have.text', 1)
    listingsPage.addNthItemToCompareBasket(0)
    listingsPage.getItemsInCompareBasket().should('have.text', 0)
  })
})