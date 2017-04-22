import { FileBrowserPage } from './app.po';

describe('file-browser App', () => {
  let page: FileBrowserPage;

  beforeEach(() => {
    page = new FileBrowserPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
