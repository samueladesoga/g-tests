Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

import {CompareBasketComponent} from '../pages/CompareBasketComponent';
import {ListingsPage} from '../pages/ListingsPage';

describe('CRM Software Listing Page', () => {
  let compareBasket
  let listingsPage
    context('Given I am on the CRM Software Listing Page', () => {
      beforeEach(() => {
        compareBasket = new CompareBasketComponent()
        listingsPage = new ListingsPage()
      })

      context('When I click on the compare basket icon in the navigation', () => {
        beforeEach(() => {
          listingsPage.getItemsInCompareBasket().should('have.text', 0)
          listingsPage.launchCompareBasket()
        })

        it('Then the compare basket popup should be visble and empty', () => {  
          compareBasket.getWrapper().should('be.visible')
          compareBasket.getCompareBasketAddButtons().should("have.length", 4)
        })
      })

      context('When I click on compare for the first listing on the page', () => {
        beforeEach(() => {
          listingsPage.addNthItemToCompareBasket(0)
        })
        
        it('Then the first listing should be the only listing displayed in the compare basket', () => {  
          compareBasket.getWrapper().should('be.visible')
          compareBasket.getCompareBasketAddButtons().should("have.length", 3)
          listingsPage.getItemsInCompareBasket().should('have.text', 1)
        })

        it('And the title of the listing should match the title added in the compare basket', () => { 
          let listingTitle = listingsPage.getTitleForNthItem(0) 
          let itemTitleInCompareBasket = compareBasket.getTitleForNthItemInCompareBasket(0)
          cy.compareTextFromElements(listingTitle, itemTitleInCompareBasket)
        })
      })

      context('When I click on the compare item for an already added item', () => {
        beforeEach(() => {
          listingsPage.addNthItemToCompareBasket(0)
          listingsPage.getItemsInCompareBasket().should('have.text', 1)
          listingsPage.addNthItemToCompareBasket(0)
        })

        it('Then the item should be removed from the compare basket', () => {  
          listingsPage.getItemsInCompareBasket().should('have.text', 0)
        })
      })

      context('When I have added 4 items in to  the compare basket', () => {
        beforeEach(() => {
          listingsPage.addNthItemToCompareBasket(0)
          listingsPage.addNthItemToCompareBasket(1)
          listingsPage.addNthItemToCompareBasket(2)
          listingsPage.addNthItemToCompareBasket(3)
        })

        it('Then the compare button for the other items in the list page should be disabled', () => {  
          listingsPage.getItemsInCompareBasket().should('have.text', 4)
          listingsPage.getCompareButtonForNthItem(4).should('be.disabled')
        })
      })
    })
  })
