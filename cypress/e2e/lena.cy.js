describe('Lena visits pages', () => {
    it('using default url', () => {
      cy.visit(Cypress.env('url'));
    });
  
    it('using env variable', () => {
      cy.visit('/');
    });
  });
  