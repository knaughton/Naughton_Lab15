var app = angular.module('myMod');

app.controller('inputCtrl', function($scope, wordFactory, $location) {

$scope.submitWords = function(wordsObj) {
  wordFactory.inputWords(wordsObj);
  $location.path('/output');
};


});
