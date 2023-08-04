export class ListingsPage{

   elements = { 
       listingItem : () => cy.get('div[data-testid="listing-item"]'),
       itemsInCompareBasket : () =>  cy.get('div[data-testid="appbar_compare-basket_button"] span'),
       compareBasketIcon : () => cy.get('div[data-testid="appbar_compare-basket_button"] i'),
   }

   launchCompareBasket()
   {
       this.elements.compareBasketIcon().click()
   }

   getItemsInCompareBasket(){
        return this.elements.itemsInCompareBasket()
   }

}
