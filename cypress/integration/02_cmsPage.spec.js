import {username, password, host} from '../fixtures/credentials';
import {login, common, cmsPages, menu} from '../fixtures/selectors.json';

beforeEach(() => {
  cy.visit(host);

  cy.login(username, password);
});

afterEach(() => {
  cy.get(menu.logout).click();
});

describe('CMS page create new records', () => {
  it('validate new record', () => {
    cy.get(common.cmsLink).click();
    cy.get(common.cmsPagesLink).click();
    cy.get(cmsPages.addBtn).click();
    cy.compareSnapshot('cmspage', 0.0);
  cy.compareSnapshot('cmspage', 0.1);
    cy.get(cmsPage.title).type(pagesData.pages.testCases.testdataone.title);
    cy.get(cmsPage.permlink).type(pagesData.pages.testCases.testdataone.permlink);
    cy.get(cmsPage.keywords).type(pagesData.pages.testCases.testdataone.keywords);
    cy.get(cmsPage.desc).type(pagesData.pages.testCases.testdataone.desc);
    cy.get(cmsPages.saveBtn).click();
  });
});
