'use strict';

var App = angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.radio',
  'myApp.music',
  'myApp.version'
]);

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
App.config(['$locationProvider', '$routeProvider',  function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});


}]);


App.config(function($httpProvider) {
  $httpProvider.interceptors.push('myHttpInterceptor');
});

App.controller('myCtrl',['$scope', '$http', 'passPosition', function($scope, $http, passPosition) {

  $scope.data=passPosition.mydata;

  console.log("????"+$scope.data);

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



