'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', ['$scope', '$http', function($scope, $http ) {


  $scope.stories=[];
  $http({
    method: 'GET',
    url: 'http://api.npr.org/query?requiredAssets=text,image,audio&output=JSON&apiKey=MDI2NTE0OTQ5MDE0NzM3NDc0NDcyZGExMA000',
    crossDomain:true,
    dataType:'jsonp',
    headers: {
      'Content-Type': undefined
    }

  }).then(function successCallback(response) {

    // this callback will be called asynchronously
    // when the response is available


    console.log("connect");

    $scope.stories=response.data.list;

    console.log($scope.stories.story);

  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    alert("Please check your network");

  });


}]);