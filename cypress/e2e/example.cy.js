describe('env config example', () => {
  it('using default url', () => {
    cy.visit(Cypress.env('url'));
  });

  it('using env variable', () => {
    cy.visit('/');
  });
});
