/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

module.exports = function (c, config) {
  var User = require('../../api/user/user.model');

  User.find({}).remove(function() {
    User.create({
      id: 1,
      provider: 'local',
      name: 'Test User',
      email: 'test@test.com',
      password: 'test',
      orgs: [1],
      projects: [1, 2]
    }, {
      id: 2,
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@admin.com',
      password: 'admin',
      orgs: [1],
      project: [1]
    }, function() {
      console.log('finished populating users');
    });
  });

  var inspect = require('util').inspect;
  var models = require('./models');
  var seeds = require('./seed');

  var querySql = function (statement) {
    var qcnt = 1;
    c.query(statement, true)
      .on('result', function (res) {
        qcnt++;
        res.on('row', function (row) {
          console.log("Query #" + qcnt);
          console.log('Result row: ' + inspect(row));
        })
        .on('error', function (err) {
          console.log("Error with Query #" + qcnt);
          console.log(err);
          console.log(statement);
        })
        .on('end', function (info) {
          console.log("Query #" + qcnt + " successfully!");
          console.log(info);
        })
      })
      .on('end', function () {
        console.log('Done query');
      })
  };

  var useDb = function () {
    c.query('USE openpms_dev')
    .on('result', function (res) {
      res.on('row', function (row) {
        console.log('Result row: ' + inspect(row));
      })
      .on('error', function (err) {
        console.log('Error!');
        console.log(err);

        if(err.code === 1049) {
          querySql('CREATE DATABASE openpms_dev; USE openpms_dev;');
        }
      })
      .on('end', function (info) {
        console.log('used database successfully!');
        console.log(info);
      })
    })
    .on('end', function () {
      console.log('Done!');

      querySql(models.deleteAll);
      querySql(models.organizations);
      querySql(models.projects);
      querySql(models.issues);

      if(config.seedDB) {
        querySql(seeds.organizations);
        querySql(seeds.projects);
        querySql(seeds.issues);
        console.log('Insert seed database successfully!');
      }
    })
  };

  useDb();
};

