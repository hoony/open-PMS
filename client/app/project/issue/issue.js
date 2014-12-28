'use strict';

angular.module('openPmsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/:projectUrl/issues/new', {
        templateUrl: 'app/project/issue/templates/new.html',
        controller: 'IssueCtrl'
      })
      .when('/:projectUrl/issues/:issueId', {
        templateUrl: 'app/project/issue/issue.html',
        controller: 'IssueCtrl'
      })
  });
