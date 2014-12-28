'use strict';

angular.module('openPmsApp')
  .controller('IssueCtrl', function ($scope, $routeParams, $http) {

    // index a new issue
    $http.get('/api/projects/' + $routeParams.projectUrl + '/issues/' + $routeParams.issueId)
      .success(function (issue) {
        $scope.issue = issue;
      });

    // create a new issue
    $http.get('/api/projects/' + $routeParams.projectUrl)
      .success(function (project) {
        $scope.categories = project.issues.categories;
      });
  });
