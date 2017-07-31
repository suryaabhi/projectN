import { ProjectNPage } from './app.po';

describe('project-n App', () => {
  let page: ProjectNPage;

  beforeEach(() => {
    page = new ProjectNPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
