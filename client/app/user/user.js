'use strict';

angular.module('openPmsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/users/:userUrl', {
        templateUrl: 'app/user/user.html',
        controller: 'UserCtrl'
      });
  });
