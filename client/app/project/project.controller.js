'use strict';

angular.module('openPmsApp')
  .controller('ProjectCtrl', function ($scope, $route, Auth, $location, $routeParams, $http, User, Project) {
    var currentUser = Auth.getCurrentUser();
    $scope.isNewMember = true;

    $http.get('/api/projects/' + $routeParams.projectUrl)
      .success(function (project) {
        console.log($routeParams.projectUrl);
        $scope.project = project;

        for(var i = 0; i < project.members.length; i++) {
          if(currentUser.url == project.members[i].url) $scope.isNewMember = false;          
        }
      });

    $http.get('/api/projects/' + $routeParams.projectUrl + '/issues')
      .success(function (issues) {
        $scope.issues = issues;
      });

    $http.get('/api/projects/' + $routeParams.projectUrl + '/updates')
      .success(function (updates) {
        $scope.updates = updates;
      });

    $scope.joinProject = function () {
      if(!Auth.isLoggedIn()) $location.path('/signup');

      // Add a new member to current member list
      var currentUser = Auth.getCurrentUser();
      var newUser = {
        url: currentUser.url,
        avatar: currentUser.avatar
      };

      // validate if the user is already existing
      var currentMembers = $scope.project.members;
      currentMembers.push(newUser);

      $http.put('/api/projects/' + $routeParams.projectUrl, {members: currentMembers})
        .success(function (data, status) {
          $route.reload();
        })
        .error(function (data, status) {
          
        })
    }
    // $scope.editText = function () {
    //   $('#projectname').editable();
    //   $('#projecttitle').editable();
    //   $('.editable').css('background-color', 'gray');
    // };

  });
