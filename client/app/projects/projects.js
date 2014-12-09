'use strict';

angular.module('openPmsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/projects', {
        templateUrl: 'app/projects/projects.html',
        controller: 'ProjectsCtrl'
      });
  });
