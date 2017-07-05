import { AngMedAppPage } from './app.po';

describe('ang-med-app App', () => {
  let page: AngMedAppPage;

  beforeEach(() => {
    page = new AngMedAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
