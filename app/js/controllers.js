'use strict'; // Helps me write good js

// Load module
var qandaApp = angular.module('qandaApp');

// Register controllers
qandaApp.controller('qandaController', ['$scope', function($scope) {
  // Set default question list
  $scope.qas = [];
  // Set default ordering and qanda prompt
  $scope.newQuestion = '';
  $scope.newAnswer = '';
  $scope.ordering = 'question';

  $scope.addQanda = function() {
    var q = new Qanda($scope.newQuestion, $scope.newAnswer);
    $scope.qas.push(q);
    console.log(q);
    // Reset qanda prompt
    $scope.newQuestion = '';
    $scope.newAnswer = '';
  };
  $scope.clearContents = function() {
    $scope.newQuestion = '';
    $scope.newAnswer = '';
  }
  $scope.deleteQanda = function(qanda) {
    console.log('here');
    // I need to use a service later on, but this will suffice for now
    var delIndex = $scope.qas.indexOf(qanda);
    if (delIndex > -1) {
      array.splice(delIndex, 1);
    }
    console.log(delIndex);
  }

}]);

// Create Qanda model
var Qanda = function(question, answer) {
  this.question = question;
  this.answer = answer;
};
Qanda.prototype.unanswered = function() {
  return this.answer.length == 0;
};
