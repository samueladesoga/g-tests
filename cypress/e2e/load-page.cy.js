Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

import {CompareBasketComponent} from '../pages/CompareBasketComponent';
import {ListingsPage} from '../pages/ListingsPage';

describe('crm software compare page', () => {
  let compareBasket
  let listingsPage
  beforeEach(() => {
    cy.visit('/crm')
    compareBasket = new CompareBasketComponent()
    listingsPage = new ListingsPage()
  })

  it('displays an empty compare basket when launched', () => {
    listingsPage.getItemsInCompareBasket().should('have.text', 0)
    listingsPage.launchCompareBasket()
    compareBasket.getWrapper().should('be.visible')
    compareBasket.getCompareBasketAddButtons().should("have.length", 4)
  })

  it('click on compare item adds item to compare basket', () => {
    let listingTitle = listingsPage.getTitleForNthItem(0)
    listingsPage.addNthItemToCompareBasket(0)
    compareBasket.getWrapper().should('be.visible')
    compareBasket.getCompareBasketAddButtons().should("have.length", 3)
    let itemTitleInCompareBasket = compareBasket.getTitleForNthItemInCompareBasket(0)
    cy.compareTextFromElements(listingTitle, itemTitleInCompareBasket)
    listingsPage.getItemsInCompareBasket().should('have.text', 1)
  })

  it('click on compare item for an added item removes item from compare basket', () => {
    listingsPage.addNthItemToCompareBasket(0)
    listingsPage.getItemsInCompareBasket().should('have.text', 1)
    listingsPage.addNthItemToCompareBasket(0)
    listingsPage.getItemsInCompareBasket().should('have.text', 0)
  })

  it('cannot add any more items once 4 items has been added', () => {
    listingsPage.addNthItemToCompareBasket(0)
    listingsPage.addNthItemToCompareBasket(1)
    listingsPage.addNthItemToCompareBasket(2)
    listingsPage.addNthItemToCompareBasket(3)
    listingsPage.getItemsInCompareBasket().should('have.text', 4)
    listingsPage.getCompareButtonForNthItem(4).should('be.disabled')
  })
})