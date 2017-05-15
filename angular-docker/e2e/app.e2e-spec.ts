import { AngularDockerPage } from './app.po';

describe('angular-docker App', () => {
  let page: AngularDockerPage;

  beforeEach(() => {
    page = new AngularDockerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
