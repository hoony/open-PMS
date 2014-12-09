'use strict';

angular.module('openPmsApp')
  .controller('ProjectCtrl', function ($scope, $routeParams) {
    $scope.project =
      {
        "id": 1,
        "title": 'Open PMS',
        "latest": "Update #4",
        "api": "github",
        "url": "https://github.com/codeforseoul/open-pms",
        "category": {
          "service": "github",
          "tech": ["python", "flask"]
        },
        "progress": 48,
        "desc": "Open PMS is blah blah blah blah blah blah."
      };

    $scope.members = [
      {
        "id": 1,
        "name": "Hoony",
        "avatar": "https://avatars1.githubusercontent.com/u/1366161?v=3&s=460"
      },
      {
        "id": 2,
        "name": "Mozodev",
        "avatar": "https://avatars2.githubusercontent.com/u/1661950?v=3&s=460"
      },
      {
        "id": 3,
        "name": "Anthony",
        "avatar": "https://avatars1.githubusercontent.com/u/3139557?v=3&s=460"
      },
      {
        "id": 4,
        "name": "Damien",
        "avatar": "https://avatars0.githubusercontent.com/u/710411?v=3&s=460"
      },
      {
        "id": 5,
        "name": "Jalal",
        "avatar": "https://avatars0.githubusercontent.com/u/3891230?v=3&s=460"
      }
    ];

    $scope.issues = [
      {
        "id": 1,
        "title": "decide the framwork to use!",
        "label": "warning",
        "status": true
      },{
        "id": 12,
        "title": "can't access to api",
        "label": "danger",
        "status": true
      },{
        "id": 31,
        "title": "install npm",
        "label": "warning",
        "status": false
      }
    ];

    $scope.updates = [
      {
        "id": 1,
        "title": "added some functions,,,,,,",
        "creator": {
          "id": 1,
          "avatar": "https://avatars1.githubusercontent.com/u/1366161?v=3&s=460"
        },
        "createAt": new Date("2014/01/30"),
        "desc": "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"
      },
      {
        "id": 2,
        "title": "Logo Design is completed!",
        "creator": {
          "id": 1,
          "avatar": "https://avatars1.githubusercontent.com/u/1366161?v=3&s=460"
        },
        "createAt": new Date("2014/07/30"),
        "desc": "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blahlah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blahlah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blahlah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blahlah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"
      },
      {
        "id": 3,
        "title": "init commit!",
        "creator": {
          "id": 5,
          "avatar": "https://avatars0.githubusercontent.com/u/3891230?v=3&s=460"
        },
        "createAt": new Date("2014/11/30"),
        "desc": "blah blah blah "
      }
    ];

    $scope.update_predicate = '-createAt';
  });
