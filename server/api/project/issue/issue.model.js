'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var IssueSchema = new Schema({
  id: Number,
  title: String,
  desc: String,
  label: [{type: String}],
  user: {
    avatar: String,
    url: String
  },
  projectUrl: String
});

module.exports = mongoose.model('Issue', IssueSchema);