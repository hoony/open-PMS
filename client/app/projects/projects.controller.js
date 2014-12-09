'use strict';

angular.module('openPmsApp')
  .controller('ProjectsCtrl', function ($scope) {
    $scope.message = 'Project Information';

    $scope.projects = [
      {
        "id": 1,
        "title": 'Open PMS',
        "latest": "Update #4",
        "api": "github",
        "category": {
          "service": "github",
          "tech": ["python", "flask"]
        },
        "desc": "Open PMS is blah blah blah blah blah blah."
      },
      {
        "id": 2,
        "title": "fdAS",
        "latest": "Update #12",
        "api": "bitbucket",
        "category": {
          "service": "github",
          "tech": ["javascript", "node"]
        },
        "desc": "fdAS is blah blah blah blah blah blah."
      }
    ];

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
  });
