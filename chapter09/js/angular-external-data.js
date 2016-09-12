//this differs from the book with how you call the controller
//using angular 1.5.8
//you'll need to run this on a  webserver
//tf 12/09/16
//

// Whilst the below code works in 1.5.8 and the GET is successful it isn't posting
// to the page. Therefore, more in depth look needed at latest version of AngularJS
// I think it requires a factory.

// angular.module('angular-external-data', [])
//   .controller('TimetableCtrl', ['$scope', '$http', function($scope, $http) {
//     //this has to be revelant to the HTML template and not to this js file
//     $http.get('../data/items.json').then(
//       function(data) {
//         $scope.sessions = data.sessions;
//       },
//       function(data) {
//         console.log('error');
//       });
//   }]);

  // requires angular 1.0.2
  function TimetableCtrl($scope, $http) {
    $http.get('../data/items.json')
    .success(function(data) { $scope.sessions = data.sessions; })
    .error(function(data) { console.log('error'); });
  }
