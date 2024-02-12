describe('env config example', () => {
  it('using default url', () => {
    cy.visit('/');
  });

  it('using env variable', () => {
    cy.visit('/');
  });
});
