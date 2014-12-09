'use strict';

angular.module('openPmsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/project/:id', {
        templateUrl: 'app/project/project.html',
        controller: 'ProjectCtrl'
      });
  });
