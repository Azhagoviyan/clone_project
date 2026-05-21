/// <reference types="cypress" />
describe('user page  test ', () => {

  it('should open drawer when add user button clicked', () => {

    cy.visit('http://localhost:4200');

    cy.contains('Add User').click();

    cy.get('mat-drawer').should('be.visible');

  });
});

  