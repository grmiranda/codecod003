import { SiteCODPage } from './app.po';

describe('site-cod App', function() {
  let page: SiteCODPage;

  beforeEach(() => {
    page = new SiteCODPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
