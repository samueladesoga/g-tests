export class CompareBasketComponent {

   elements = { 
       compareBasketAddButtons : () => cy.get('div[data-evac=compare-basket_add-product]'),
       compareBasketWrapper : () => cy.get('div[data-testid=compare-basket]'),
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