var app = angular.module('myMod');

app.controller('outputCtrl', function($scope, wordFactory) {

  $scope.retrievedWords = wordFactory.outputWords();

});
