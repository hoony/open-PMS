'use strict';

angular.module('openPmsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/:name', {
        templateUrl: 'app/organization/organization.html',
        controller: 'OrganizationCtrl'
      });
  });
