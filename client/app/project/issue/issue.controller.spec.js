'use strict';

describe('Controller: IssueCtrl', function () {

  // load the controller's module
  beforeEach(module('openPmsApp'));

  var IssueCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IssueCtrl = $controller('IssueCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
