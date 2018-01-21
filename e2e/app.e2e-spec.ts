import { DynamicTemplatePage } from './app.po';

describe('dynamic-template App', () => {
  let page: DynamicTemplatePage;

  beforeEach(() => {
    page = new DynamicTemplatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
