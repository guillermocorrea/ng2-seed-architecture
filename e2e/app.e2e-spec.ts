import { Ng2RouterSamplePage } from './app.po';

describe('ng2-router-sample App', () => {
  let page: Ng2RouterSamplePage;

  beforeEach(() => {
    page = new Ng2RouterSamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
