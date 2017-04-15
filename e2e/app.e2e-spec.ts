import { WallabyAngularScssImportsPage } from './app.po';

describe('wallaby-angular-scss-imports App', () => {
  let page: WallabyAngularScssImportsPage;

  beforeEach(() => {
    page = new WallabyAngularScssImportsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
