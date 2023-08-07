import {Page} from './Page';
export class ListingsPage extends Page{

    constructor() {
       super();
       cy.visit('/crm')
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
        listingItemProductName: 'a[data-testid="listing-item_text-link_product-name"] h2',
        listingItemProductLogo: 'a[data-testid=listing-item_logo_product] img',
   }

   getListingItems() {
        return this.elements.listingItems()
   }

   launchCompareBasket() {
       this.elements.compareBasketIcon().click()
   }

   getItemsInCompareBasket() {
        return this.elements.itemsInCompareBasket()
   }

   addNthItemToCompareBasket(nth) {
        this.elements.listingItems().eq(nth).find(this.locators.listingItemCompareButton).click()
   }

   getCompareButtonForNthItem(nth){
        return this.elements.listingItems().eq(nth).find(this.locators.listingItemCompareButton)
   }

   getTitleForNthItem(nth) {
        return this.elements.listingItems().eq(nth).find(this.locators.listingItemProductName)
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

   getProductNameForListItemElement(listingItemRow){
     return cy.wrap(listingItemRow).find(this.locators.listingItemProductName)
   }

   getAltTextForListItemElement(listingItemRow){
     return cy.wrap(listingItemRow).find(this.locators.listingItemProductLogo).invoke('attr', 'alt')
   }
}
