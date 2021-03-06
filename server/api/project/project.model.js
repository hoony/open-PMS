'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  title: String,
  url: String,
  desc: String,
  progress: Number,
  api: String,
  members: [{
    avatar: String,
    url: String
  }],
  updates: [{
    id: Number,
    title: String,
    desc: String,
  }],
  issues: {
    categories: [{ type: String }],
    list: [{
      id: Number,
      title: String,
      label: String
    }]
  }
});

module.exports = mongoose.model('Project', ProjectSchema);