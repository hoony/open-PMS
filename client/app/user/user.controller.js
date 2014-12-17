'use strict';

angular.module('openPmsApp')
  .controller('UserCtrl', function ($scope, $routeParams, $http) {
    $http.get('/api/users/' + $routeParams.userUrl)
      .success(function (user) {
        console.log(user);
        $scope.user = user;
      })
  });
