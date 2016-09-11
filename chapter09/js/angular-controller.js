//The view and View model and data binding and scope in AngularJS
// Demonstrating

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
