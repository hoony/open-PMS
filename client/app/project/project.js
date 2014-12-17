'use strict';

angular.module('openPmsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/:projectUrl', {
        templateUrl: 'app/project/project.html',
        controller: 'ProjectCtrl'
      });
  });
