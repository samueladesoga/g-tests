export class ListingItemComponent {

	constructor(wrapperElement){
		this.wrapperElement = wrapperElement
	}

	locators = {
        listingItemCompareButton: 'button[data-testid="listing-item_compare_cta"]',
        listingItemProductName: 'a[data-testid="listing-item_text-link_product-name"] h2',
        listingItemProductLogo: 'a[data-testid=listing-item_logo_product] img',
   	}

	getAllListingItems() {
        return cy.get(this.wrapperElement)
   	}

	getProductNameForListItemElement(listingItemRow){
		return cy.wrap(listingItemRow).find(this.locators.listingItemProductName)
	}

	getAltTextForListItemElement(listingItemRow){
		return cy.wrap(listingItemRow).find(this.locators.listingItemProductLogo).invoke('attr', 'alt')
	}

	addNthItemToCompareBasket(nth) {
        this.getAllListingItems().eq(nth).find(this.locators.listingItemCompareButton).click()
   	}

   	getCompareButtonForNthItem(nth){
        return this.getAllListingItems().eq(nth).find(this.locators.listingItemCompareButton)
   	}

   	getTitleForNthItem(nth) {
        return this.getAllListingItems().eq(nth).find(this.locators.listingItemProductName)
   	}

}
