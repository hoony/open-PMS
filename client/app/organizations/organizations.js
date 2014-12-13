'use strict';

angular.module('openPmsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/organizations', {
        templateUrl: 'app/organizations/organizations.html',
        controller: 'OrganizationsCtrl'
      });
  });
