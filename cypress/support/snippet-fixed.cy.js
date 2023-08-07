Cypess.Commands.add('requestList', () => { 
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