export class ListingsPage{

   elements = { 
       listingItem : () => cy.get('div[data-testid="listing-item"]'),
       itemsInCompareBasket : () =>  cy.get('div[data-testid="appbar_compare-basket_button"] span'),
       compareBasketIcon : () => cy.get('div[data-testid="appbar_compare-basket_button"] i'),
   }

   launchCompareBasket() {
       this.elements.compareBasketIcon().click()
   }

   getItemsInCompareBasket() {
        return this.elements.itemsInCompareBasket()
   }

   addNthItemToCompareBasket(nth) {
        this.elements.listingItem().eq(nth).find('button[data-testid="listing-item_compare_cta"]').click()
   }

   getCompareButtonForNthItem(nth){
        return this.elements.listingItem().eq(nth).find('button[data-testid="listing-item_compare_cta"]')
   }

   //getTitleForNthItem(nth) {
    //    return this.elements.listingItem().eq(nth).find('a[data-testid="listing-item_text-link_product-name"]')
   //}


}
