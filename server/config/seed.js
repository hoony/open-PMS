/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Project = require('../api/project/project.model');
var Update = require('../api/project/update/update.model');
var Issue = require('../api/project/issue/issue.model');

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Mozodev',
    url: 'mozodev',
    avatar: 'https://avatars2.githubusercontent.com/u/1661950?v=3&s=460',
    email: 'test@test.com',
    projects: [{
      title: 'open-PMS',
      desc: 'open-PMS is blah blah blah blah blah blah blah blah blah.',
      api: 'github',
      url: 'open-pms'
    },{
      title: 'codenamu.github.io',
      desc: 'codenamu.github.io is blah blah blah blah blah blah blah blah blah.',
      api: 'github',
      url: 'codenamu.github.io'
    }],
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Hoony',
    url: 'hoony',
    avatar: 'https://avatars1.githubusercontent.com/u/1366161?v=3&s=460',
    email: 'admin@admin.com',
    projects: [{
      title: 'open-PMS',
      desc: 'open-PMS is blah blah blah blah blah blah blah blah blah.',
      api: 'github',
      url: 'open-pms'
    },{
      title: 'codenamu.github.io',
      desc: 'codenamu.github.io is blah blah blah blah blah blah blah blah blah.',
      api: 'github',
      url: 'codenamu.github.io'
    }],
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});

Project.find({}).remove(function () {
  Project.create({
    title: 'open-PMS',
    url: 'open-pms',
    desc: 'open-PMS is  a PMS for open communities',
    progress: 21,
    api: 'github',
    members: [{
      avatar: 'https://avatars1.githubusercontent.com/u/1366161?v=3&s=460',
      url: 'hoony'
    }],
    updates: [{
      id: 1,
      title: 'error with mogoose',
      desc: 'i cannot use some methods of mogoose',
      label: 'bug'
    },{
      id: 2,
      title: 'change from mongo to mariadb',
      desc: 'should we?',
      label: 'suggest'
    }]
  },{
    title: 'codenamu.github.io',
    url: 'coenamu.github.io',
    desc: 'official website of codenamu',
    progress: 57,
    api: 'github',
    members: [{
      avatar: 'https://avatars1.githubusercontent.com/u/1366161?v=3&s=460',
      url: 'hoony'
    },{
      avatar: 'https://avatars2.githubusercontent.com/u/1661950?v=3&s=460',
      url: 'mozodev'
    }],
    updates: [{
      id: 1,
      title: 'migrate database from old blog',
      desc: 'export from wordpress and import to jekyll',
      label: 'bug',
      status: true
    },{
      id: 2,
      title: 'migrate database from old blog',
      desc: 'export from wordpress and import to jekyll',
      label: 'bug',
      status: true
    }]
  })
})

Update.find({}).remove(function () {
  Update.create({
    id: 1,
    title: 'error with mogoose',
    desc: 'i cannot use some methods of mogoose',
    label: 'bug',
    comment: [{
      id: 1,
      desc: 'very good!',
      user: {
        avatar: 'https://avatars1.githubusercontent.com/u/1366161?v=3&s=460',
        url: 'hoony'
      },
    },{
      id: 2,
      desc: 'very very good!',
      user: {
        avatar: 'https://avatars2.githubusercontent.com/u/1661950?v=3&s=460',
        url: 'mozodev'
      }
    }],
    user: {
      avatar: 'https://avatars2.githubusercontent.com/u/1661950?v=3&s=460',
      url: 'mozodev'
    },
    projectUrl: 'open-pms'
  }, {
    id: 2,
    title: 'change from mongo to mariadb',
    desc: 'should we?',
    label: 'suggest',
    comment: [{
      id: 1,
      desc: 'very good!',
      user: {
        avatar: 'https://avatars1.githubusercontent.com/u/1366161?v=3&s=460',
        url: 'hoony'
      },
    },{
      id: 2,
      desc: 'very very good!',
      user: {
        avatar: 'https://avatars2.githubusercontent.com/u/1661950?v=3&s=460',
        url: 'mozodev'
      }
    }],
    user: {
      avatar: 'https://avatars1.githubusercontent.com/u/1366161?v=3&s=460',
      url: 'hoony'
    },
    projectUrl: 'open-pms'
  }, function () {
    console.log('finished populating updates');
  });
});

Issue.find({}).remove(function () {
  Issue.create({
    id: 1,
    title: 'grunt.js',
    desc: 'create grunt.js for express',
    label: 'enhancement',
    user: {
      avatar: 'https://avatars2.githubusercontent.com/u/1661950?v=3&s=460',
      url: 'mozodev'
    },
    projectUrl: 'open-pms'
  },{
    id: 2,
    title: 'migrate database from wordpress',
    desc: 'should migreate databse from origin website codenamu.org',
    label: 'bug',
    user: {
      avatar: 'https://avatars1.githubusercontent.com/u/1366161?v=3&s=460',
      url: 'hoony'
    },
    projectUrl: 'open-pms'
  })
})
