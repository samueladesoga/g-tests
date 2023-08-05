export class CompareBasketComponent {

   elements = { 
       compareBasketAddButtons : () => cy.get('div[data-evac=compare-basket_add-product]'),
       compareBasketWrapper : () => cy.get('div[data-testid=compare-basket]'),
   }

    locators = {
        compareProductButton: 'div[data-evac=compare-basket_add-product]',
        compareBasketItemTitle: 'button[data-evla=compare-basket_item] p.Typography'
   }

   getWrapper()
   {
     return this.elements.compareBasketWrapper()
   }

   getCompareBasketAddButtons()
   {
       return this.getWrapper().find(this.locators.compareProductButton)
   }

   getTitleForNthItemInCompareBasket(nth)
   {
       return this.getWrapper().find(this.locators.compareBasketItemTitle).eq(nth)
   }

}




