'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UpdateSchema = new Schema({
  id: Number,
  title: String,
  desc: String,
  label: String,
  comment: [{
    id: Number,
    desc: String,
    user: {
      avatar: String,
      userUrl: String
    },
  }],
  user: {
    avatar: String,
    url: String
  },
  projectUrl: String
});

module.exports = mongoose.model('Update', UpdateSchema);