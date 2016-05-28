

describe('Testing the QAController', function() {
  var ctrl, scope;
  // Reload the module / reset the controller for each test
  beforeEach(module('qandaApp'));
  beforeEach(inject(function($controller) {
    scope = {};
    ctrl = $controller('qandaController', {$scope: scope}); // get ctrl and inject scope
  }));

  it('should initially contain a list of qa\'s of length 2', function() {
    // dump(scope.qas);
    expect(scope.qas.length).toBe(2);
  });
  it('should initially be ordered alphabetically by question', function() {
    expect(scope.qanda.ordering).toBe('question');
  });

});
