'use strict';

angular.module('openPmsApp')
  .controller('OrganizationsCtrl', function ($scope, Orgs) {
    Orgs.get(function (orgs) {
      $scope.org = orgs;
    })
  });
