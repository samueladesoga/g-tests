Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

import {ListingsPage} from '../pages/ListingsPage';

describe('CRM Software Listing Page', () => {
  let listingsPage
    context('Given I am on the CRM Software Listing Page', () => {
	    beforeEach(() => {
	        listingsPage = new ListingsPage()
	    })

	    it('every image on the page should have an alt text that is short and meaningful', () => {  
	    	let listingItems = cy.get('div[data-testid=listing-item]')
	    	listingItems.each(($listingItem) => {
	    		let a = cy.wrap($listingItem).find('a[data-testid=listing-item_text-link_product-name] h2')
	    		let b = cy.wrap($listingItem).find('a[data-testid=listing-item_logo_product] img').invoke('attr', 'alt')
	    		a.invoke('text').then(($text) => {
      				b.should('eq', `${$text} logo`)
      			})
	    	})

	    })

	    it('page title should be displayed and relevant to the page content', () => {  
	      cy.title().should('eq', 'Best CRM Software 2023 - Reviews on 771+ Tools | GetApp')
	    })


	    it.only('The page should contain a table of content', () => { 
	    	cy.get('a[data-evac=jump-to_category_all-products_guide]').click()
	    	cy.scrollTo('bottom')
	    	cy.get('a[data-evac=jump-to_category_all-products_guide]').click()
	    	let toc = cy.get('div[data-testid=buyers-guide] div.TableOfContent', { timeout: 30000 }).find('a')
	    	toc.should('have.length.least', 1)
	    })
    })
  })