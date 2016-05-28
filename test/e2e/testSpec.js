// A test spec suite to learn more about protractor
describe('Testing the home page of my web app: ', function() {
  describe('Testing the list of qandas', function() {
    // Setup common finders
    var qandaList = element.all(by.repeater('qa in qas'));
    var qandaListQuestions = element.all(by.repeater('qa in qas').column('qa.question'));

    // Reload browser before each test
    beforeEach(function() {
      browser.get('app/index.html');
    });

    it('should start with a list of 2 qandas', function() {
      expect(qandaList.count()).toBe(2);
    });

    it('should filter the list as a user types into the search box', function() {
      // Get query
      var query = element(by.model('qanda.query'));

      // By default,
      expect(qandaList.count()).toBe(2);

      query.sendKeys('Question 1');
      expect(qandaList.count()).toBe(1);

      query.clear();
      query.sendKeys('Question 2');
      expect(qandaList.count()).toBe(1);
    });

    it('should order the list when an option is chosen from the drop down', function() {
      // Get the drop down
      var dropDown = element(by.model('qanda.ordering'));
      function getQuestions() {
        // Utility function to convert ElementArrayFinder to array of just the questions
        return qandaListQuestions.map(function(item) {
          return item.getText();
        });
      }

      // By default, it should be ordered by the 'question' property alphabetically
      expect(getQuestions()).toEqual([
        'Question 1',
        'Question 2'
      ]);

      // Select an option
      dropDown.element(by.css('option[value="-question"]')).click();
      expect(getQuestions()).toEqual([
        'Question 2',
        'Question 1'
      ]);

    });
  });
});
