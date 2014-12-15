'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/openpms-dev'
  },

  mariadb: {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    multiStatements: true
  },

  seedDB: true
};
