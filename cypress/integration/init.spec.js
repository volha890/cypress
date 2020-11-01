describe('Heading text', () => {
  it('contains the correct title', () => {
    // cy.visit('http://localhost:3000/example-1');
    cy.visit('http://snapdocs.com/title/');
    cy.get('h1')
          .invoke('text')
          .should('equal', 'Upgrade your mobileclosing processes');
  });
});
