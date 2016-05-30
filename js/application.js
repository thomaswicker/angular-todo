angular.module("todoListApp", [])

.controller('mainCtrl', function($scope) {
  $scope.helloWorld = function() {
    console.log("HelloSX");
  };

  $scope.todos = [
    {'name': 'clean house'},
    {'name': 'clean car'},
    {'name': 'clean fridge'},
    {'name': 'clean room'}
  ]
});
