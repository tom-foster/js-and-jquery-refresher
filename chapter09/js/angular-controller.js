//The view and View model and data binding and scope in AngularJS
// Demonstrating the angular controller in 1.5.8
//you'll need to run a local server
//tf 12/09/16

angular.module('angular-controller-example', [])
  .controller('BasketCtrl', ['$scope', function($scope) {
    $scope.description = 'Single ticket';
    $scope.cost = 8;
    $scope.quantity = 1;
  }]);


//original code in the book which works with version 1.0.2 of angular
//i'm using the latest stable version

// function BasketCtrl($scope) {
//   $scope.description = 'Single ticket';
//   $scope.cost = 8;
//   $scope.qty = 1;
// }
