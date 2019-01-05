import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(path) {
    return browser.get(path);
  }

  getTextOfElementText(css_nav_path) {
    return element(by.css(css_nav_path)).getText();
  }
}
