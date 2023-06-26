
// cypress/integration/aboutpage_spec.ts
describe('Idv Page', () => {
    it('successfully loads', () => {
      cy.visit('http://localhost:3000/idvPage') // change URL to match your dev server
      cy.contains('Idv page')
    })
  })
  