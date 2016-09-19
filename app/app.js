'use strict';

var App = angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.radio',
  'myApp.music',
  'myApp.version'
]);




App.config(['$locationProvider', '$routeProvider',  function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.when('/', {
    templateUrl: 'home/home.html',
    controller: 'myCtrl'
  });
  $routeProvider.otherwise({redirectTo: '/home'});


}]);



App.controller('myCtrl',['$scope', function($scope) {



  $scope.init=function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position){
        $scope.$apply(function(){
          $scope.position=position;

        });

      });
    }

  }

}]);



