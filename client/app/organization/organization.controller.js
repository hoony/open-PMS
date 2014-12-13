'use strict';

angular.module('openPmsApp')
  .controller('OrganizationCtrl', function ($scope, $routeParams, Orgs) {
    Orgs.get($routeParams.name, function (org) {
    	$scope.filterAdmin = 'admin';
      $scope.org = org;
    })
  });
