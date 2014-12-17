'use strict';

angular.module('openPmsApp')
  .controller('ProjectCtrl', function ($scope, $routeParams, $http) {
    $http.get('/api/projects/' + $routeParams.projectUrl)
      .success(function (project) {
        $scope.project = project;
      });

    $http.get('/api/projects/' + $routeParams.projectUrl + '/issues')
      .success(function (issues) {
        $scope.issues = issues;
      });

    $http.get('/api/projects/' + $routeParams.projectUrl + '/updates')
      .success(function (updates) {
        $scope.updates = updates;
      });

    // $scope.editText = function () {
    //   $('#projectname').editable();
    //   $('#projecttitle').editable();
    //   $('.editable').css('background-color', 'gray');
    // };

  });
