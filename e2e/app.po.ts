import { browser, element, by } from 'protractor';

export class CatalogPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root md-sidenav-container md-toolbar h3')).getText();
  }
}
