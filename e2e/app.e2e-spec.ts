import { F0rmationPage } from './app.po';

describe('f0rmation App', () => {
  let page: F0rmationPage;

  beforeEach(() => {
    page = new F0rmationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
