import {Page} from './Page';
import {ListingItemComponent} from './ListingItemComponent'
export class ListingsPage extends Page {

    constructor() {
       super();
       cy.visit('/crm')
       this.listingItemComponent = new ListingItemComponent('div[data-testid="listing-item"]')
    }

   elements = { 
       listingItems : () => cy.get('div[data-testid="listing-item"]'),
       itemsInCompareBasket : () =>  cy.get('div[data-testid="appbar_compare-basket_button"] span'),
       compareBasketIcon : () => cy.get('div[data-testid="appbar_compare-basket_button"] i'),
       buyersGuideLink: () => cy.get('a[data-evac=jump-to_category_all-products_guide]'),
       buyersGuideToCLinks: () => cy.get('div[data-testid=buyers-guide] div.TableOfContent', { timeout: 30000 }).find('a')
   }

   locators = {
        listingItemCompareButton: 'button[data-testid="listing-item_compare_cta"]',
   }

   launchCompareBasket() {
       this.elements.compareBasketIcon().click()
   }

   getItemsInCompareBasket() {
        return this.elements.itemsInCompareBasket()
   }

   goToBuyersGuide(){
     //this is a work around for Buyers Guide click not working on cypress launched browsers.
     this.elements.buyersGuideLink().click()
     cy.scrollTo('bottom')
     this.elements.buyersGuideLink().click()
   }

   getBuyersGuideLinks(){
     return this.elements.buyersGuideToCLinks()
   }
}
