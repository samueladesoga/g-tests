Cypress.Commands.add('requestList', () => { 
       cy.request({ 
              url: `/url`, 
       }).then(response => {
              const list = []
              const { items } = response.body
              items.forEach((arr) => { list.push(arr)
              })
              return list
       })
})


// describe('Sample code to use command', () => {
//     context('Given I have a valid url', () => {
//        it.only('The command should extract items from the body of the request', () => { 
//               let urlItems = cy.requestList()
//               urlItems.should('have.length.least', 1)
//        })
//     })
//   })