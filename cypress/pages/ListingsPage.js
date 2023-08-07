export class ListingsPage{

    constructor() {
       cy.visit('/crm')
    }

   elements = { 
       listingItem : () => cy.get('div[data-testid="listing-item"]'),
       itemsInCompareBasket : () =>  cy.get('div[data-testid="appbar_compare-basket_button"] span'),
       compareBasketIcon : () => cy.get('div[data-testid="appbar_compare-basket_button"] i'),
       buyersGuideLink: () => cy.get('a[data-evac=jump-to_category_all-products_guide]'),
       buyersGuideToCLinks: () => cy.get('div[data-testid=buyers-guide] div.TableOfContent', { timeout: 30000 }).find('a')
   }

   locators = {
        listingItemCompareButton: 'button[data-testid="listing-item_compare_cta"]',
        listingItemProductName: 'a[data-testid="listing-item_text-link_product-name"] h2'
   }

   launchCompareBasket() {
       this.elements.compareBasketIcon().click()
   }

   getItemsInCompareBasket() {
        return this.elements.itemsInCompareBasket()
   }

   addNthItemToCompareBasket(nth) {
        this.elements.listingItem().eq(nth).find(this.locators.listingItemCompareButton).click()
   }

   getCompareButtonForNthItem(nth){
        return this.elements.listingItem().eq(nth).find(this.locators.listingItemCompareButton)
   }

   getTitleForNthItem(nth) {
        return this.elements.listingItem().eq(nth).find(this.locators.listingItemProductName)
   }

   getPageTitle(){
     return cy.title()
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
