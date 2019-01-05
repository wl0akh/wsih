import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display home page', () => {
    page.navigateTo('/');
    expect(page.getTextOfElementText('app-root app-dish p')).toEqual(' home works!');
  });
});
