'use strict';

angular.module('myApp.radio', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/radio', {
    templateUrl: 'radio/radio.html',
    controller: 'radioCtrl'
  });
}])

.controller('radioCtrl',['$scope', '$http', function($scope, $http ) {


  $http({
    method: 'GET',
    url: 'https://api.npr.org/query?id=3004&requiredAssets=audio&dateType=story&output=JSON&apiKey=MDI2NTE0OTQ5MDE0NzM3NDc0NDcyZGExMA000',
    crossDomain:true,
    dataType:'jsonp',
    headers: {
      'Content-Type': undefined
    }


  }).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    $scope.radios=response.data.list;
    console.log($scope.radios.story);
    $scope.station="KQED-FM";



  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    alert("Please check your network");

  });

}]);