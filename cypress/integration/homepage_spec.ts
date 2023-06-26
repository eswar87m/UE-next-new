// cypress/integration/homepage_spec.ts
describe('Homepage', () => {
    it('successfully loads', () => {
      cy.visit('http://localhost:3000') // change URL to match your dev server
      cy.contains('Welcome to our homepage!')
    })
  })
  
  