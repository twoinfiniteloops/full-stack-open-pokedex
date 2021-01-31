describe('One page contains correct words', function() {
    it('navigate from the main page to the page of a particular Pokemon', function() {
      cy.visit('http://localhost:5000')
      cy.contains('venusaur').click()
      cy.contains('venusaur')
    })
  })