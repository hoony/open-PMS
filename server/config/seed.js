/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Project = require('../api/project/project.model');
var Org = require('../api/organization/organization.model');

User.find({}).remove(function() {
  User.create({
    id: 1,
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test',
    orgs: [1]
  }, {
    id: 2,
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin',
    orgs: [1, 2]
  }, function() {
      console.log('finished populating users');
      createSeedOrgs([{
        id: 1,
        name: 'CCKOREA',
        url: 'cckorea',
        desc: 'CCKOREA is a ,,blah blah blah blah blah ',
        projects: [
        {
          title: 'Seoul Serenity',
          url: 'seoulserenity',
          desc: 'Seoul Serenity is blah blah blah blah blah blah blah.',
          progress: 59,
          api: 'github',
          members: [
          {
            name: 'mozodev',
            role: 'member',
            avatar: 'https://avatars2.githubusercontent.com/u/1661950?v=3&s=460'
          },{
            name: 'anthony',
            role: 'admin',
            avatar: 'https://avatars1.githubusercontent.com/u/3139557?v=3&s=460'
          }]
        }]
      },{
        id: 2,
        name: 'Code for Seoul',
        url: 'codeforseoul',
        desc: 'Code for Seoul is a ,,blah blah blah blah blah blah blah blah blah blah',
        projects: [
        {
          title: 'open-PMS',
          url: 'open-pms',
          desc: 'open-PMS is blah blah blah blah blah blah blah.',
          progress: 23,
          api: 'github',
          members: [{
            name: 'hoony',
            role: 'admin',
            avatar: 'https://avatars1.githubusercontent.com/u/1366161?v=3&s=460'
          },{
            name: 'mozodev',
            role: 'member',
            avatar: 'https://avatars2.githubusercontent.com/u/1661950?v=3&s=460'
          },{
            name: 'anthony',
            role: 'member',
            avatar: 'https://avatars1.githubusercontent.com/u/3139557?v=3&s=460'
          }]
        }]
      }]);
    }
  );
});

var createSeedOrgs = function (orgs) {
  Org.find({}).remove(function () {
    Org.create(orgs, function (err) {
      if(err) console.log('error with populating organization');
      console.log('finished populating organization');
    })
  })
};

var createSeedProjects = function (projects) {
  Project.find({}).remove(function () {
    Project.create(projects, function (err) {
      if(err) console.log('error with populating projects');
      console.log('finished populating projects');
    })
  })
}