'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OrganizationSchema = new Schema({
  id: Number,
  name: String,
  url: String,
  desc: String,
  projects: [{
    title: String,
    url: String,
    desc: String,
    progress: Number,
    api: String,
    members:[{
      name: String,
      role: String,
      avatar: String
    }]
  }]
});

module.exports = mongoose.model('Organization', OrganizationSchema);