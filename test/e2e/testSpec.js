// A test spec suite to learn more about protractor
describe('Testing the home page of my web app', function() {
  beforeEach(function() {
    browser.get('app/index.html');
  });
  it('the body should contain a p with "Hello, World"', function() {
    var bodyMessage = element(by.tagName('p')).getText();
    expect(bodyMessage).toBe('Hello, World!');
  });
});
