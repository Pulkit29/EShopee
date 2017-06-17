import { EShopePage } from './app.po';

describe('e-shope App', () => {
  let page: EShopePage;

  beforeEach(() => {
    page = new EShopePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
