import {username, password, host} from '../fixtures/credentials';
import {login, common, menu} from '../fixtures/selectors.json';

afterEach(() => {
  cy.get(menu.logout).click();
});

describe('Login page', () => {
  it('login admin travels page with valid credentials', () => {
    cy.visit(host);
    cy.login(username, password);
  });
});
