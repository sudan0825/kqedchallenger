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
App.factory('myHttpInterceptor', function($rootScope, $q) {
  return {
    'requestError': function(config) {
      $rootScope.status = 'HTTP REQUEST ERROR ' + config;
      return config || $q.when(config);
    },
    'responseError': function(rejection) {
      $rootScope.status = 'HTTP RESPONSE ERROR ' + rejection.status + '\n' +
        rejection.data;
      return $q.reject(rejection);
    },
  };
});
App.config(function($httpProvider) {
  $httpProvider.interceptors.push('myHttpInterceptor');
});

App.factory('guestService', function($rootScope, $http, $q, $log) {
  $rootScope.status = 'Retrieving data...';
  var deferred = $q.defer();
  $http.get('rest/query')
    .success(function(data, status, headers, config) {
      $rootScope.guests = data;
      deferred.resolve();
      $rootScope.status = '';
    });
  return deferred.promise;
});



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



