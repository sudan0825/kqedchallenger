'use strict';

angular.module('myApp.music', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/music', {
      templateUrl: 'music/music.html',
      controller: 'tvCtrl'
    });
  }])

  .controller('tvCtrl',['$scope', '$http', function($scope, $http ) {

    $http({
      method: 'GET',
      url: 'http://api.npr.org/query?id=13&requiredAssets=text,image,audio&output=JSON&apiKey=MDI2NTE0OTQ5MDE0NzM3NDc0NDcyZGExMA000',
      crossDomain:true,
      dataType:'jsonp',
      headers: {
        'Content-Type': undefined
      }
    }).then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available
      $scope.music=response.data.list;
      console.log($scope.music.story);

      $scope.playMP3=function (a) {
        console.log(a);
        $("#showDiv").show();
        $("#showDiv").html('<object type="text/html" data='+ a + ' ></object>').click(function () {
          window.open(a);
          $("#showDiv").empty();
          $("#showDiv").hide();
          $("#bluryDiv").hide();

        });
        $("#bluryDiv").show();


      }
      $scope.hideShow=function () {
        $("#showDiv").empty();
        $("#showDiv").hide();
        $("#bluryDiv").hide();
      }

      $("#showDiv").click=function (a) {


      }

    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.

      alert("Please check your network");
    });
  }]);