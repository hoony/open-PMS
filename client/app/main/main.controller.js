'use strict';

angular.module('openPmsApp')
  .controller('MainCtrl', function ($scope, $http, Orgs) {
    Orgs.index(function (orgs) {
      $scope.orgs = orgs;
    });
  });
