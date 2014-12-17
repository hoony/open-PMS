'use strict';

angular.module('openPmsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/:projectUrl/updates/:updateId', {
        templateUrl: 'app/project/update/update.html',
        controller: 'UpdateCtrl'
      });
  });
