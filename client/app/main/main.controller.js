'use strict';

angular.module('openPmsApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/projects')
      .success(function (projects) {
        $scope.projects = projects;
      })
  });
