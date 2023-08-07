Cypress.Commands.add('compareTextFromElements', (element1, element2) => {
	element1.invoke('text').then(($text) => {
      element2.invoke('text').should('eq', $text)
    })
})