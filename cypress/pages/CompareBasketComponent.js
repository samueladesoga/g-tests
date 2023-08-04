export class CompareBasketComponent {

   elements = { 
       compareBasketAddButtons : () => cy.get('div[data-evac=compare-basket_add-product]'),
       compareBasketWrapper : () => cy.get('div[data-testid=compare-basket]'),
   }

   isEmpty()
   {
       return this.elements.compareBasketWrapper().find('div[data-testid=compare-basket-add-button]').length == 4
   }

   getWrapper()
   {
     return this.elements.compareBasketWrapper()
   }

   getCompareBasketAddButtons()
   {
       return this.getWrapper().find('div[data-evac=compare-basket_add-product]')
   }

}