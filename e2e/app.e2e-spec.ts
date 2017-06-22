import { FacebbappPage } from './app.po';

describe('facebbapp App', () => {
  let page: FacebbappPage;

  beforeEach(() => {
    page = new FacebbappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
