'use strict' // Helps me write good js

// Load module
var qandaApp = angular.module('qandaApp', []);

// Register controllers
qandaApp.controller('qandaController', ['$scope', function($scope) {
  // Set default question list
  $scope.qas = [
    {
      question: 'Question 1',
      answer: 'Answer 1'
    },
    {
      question: 'Question 2',
      answer: 'Answer 2'
    }
  ];
  // Set default ordering and qanda prompt
  $scope.qanda = {
    ordering: 'question',
    newQuestion: '',
    newAnswer: ''
  };

  $scope.newQanda = function() {
    // TODO: Check for empty question(show error), check for empty answer(add unanswered tag)
    $scope.qas.push({
      question: $scope.qanda.newQuestion,
      answer: $scope.qanda.newAnswer
    });

    // Reset qanda prompt
    $scope.qanda.newQuestion = '';
    $scope.qanda.newAnswer = '';
  };
}]);
