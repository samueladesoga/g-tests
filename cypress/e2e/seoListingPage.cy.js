Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

import {ListingsPage} from '../pages/ListingsPage'
import {ListingItemComponent} from '../pages/ListingItemComponent'

describe('CRM Software Listing Page', () => {
  let listingsPage
    context('Given I am on the CRM Software Listing Page', () => {
	    beforeEach(() => {
	        listingsPage = new ListingsPage()
	    })

	    it('Every image on the page should have an alt text that is short and related to the product name', () => {  
	    	let listingItems = listingsPage.listingItemComponent.getAllListingItems()
	    	listingItems.each(($listingItem) => {
	    		let productName = listingsPage.listingItemComponent.getProductNameForListItemElement($listingItem)
	    		let altText = listingsPage.listingItemComponent.getAltTextForListItemElement($listingItem)
	    		productName.invoke('text').then(($productName) => {
      				altText.should('eq', `${$productName} logo`)
      			})
	    	})

	    })

	    it('Page title should be displayed and relevant to the page content', () => { 
	    	let expectedPageTitle = 'Best CRM Software 2023 - Reviews on 771+ Tools | GetApp'
	      	listingsPage.getPageTitle().should('eq', expectedPageTitle)
	    })

	    it('The buyers guide should be displayed as table of content for SEO', () => { 
	    	listingsPage.goToBuyersGuide()
	    	let toc = listingsPage.getBuyersGuideLinks()
	    	toc.should('have.length.least', 1)
	    })
    })
  })