'use strict';

angular.module('openPmsApp')
  .controller('UpdateCtrl', function ($scope, $routeParams, $http) {
    $http.get('/api/projects/' + $routeParams.projectUrl + '/updates/' + $routeParams.updateId)
      .success(function (update) {
        console.log(update);
        $scope.update = update;
      })

    $http.get('/api/projects/' + $routeParams.projectUrl)
      .success(function (project) {
        $scope.project = project;
      })
  });
