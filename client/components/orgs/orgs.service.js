'use strict';

angular.module('openPmsApp')
  .factory('Orgs', function Auth($rootScope, $http) {
    return {
      index: function (callback) {
        var cb = callback || angular.noop;
        $http.get('/api/organizations')
          .success(function (orgs) {
            cb(orgs);
          });
      },

      get: function (name, callback) {
        var cb = callback || angular.noop;
        $http.get('/api/organizations/' + name)
          .success(function (org) {
            cb(org);
          });
      }
    };
  });
