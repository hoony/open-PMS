'use strict';

module.exports = function (c) {
  return {
    index: function (req, res) {
      var data = [];
      c.query('SELECT * from organizations;')
        .on('result', function (result) {
          result.on('row', function (row) {
            data.push(row);
          })
          .on('error', function (err) {
            console.log(err);
          })
        })
        .on('end', function () {
          res.json(data);
        })
    },

    show: function (req, res) {
      c.query('SELECT * from organizations where orgId =' + req.params.id)
        .on('result', function (result) {
          result.on('row', function (row) {
            res.json(row);
          })
          .on('error', function (err) {
            console.log(err);
          })
        })
        .on('end', function () {
          console.log('Found a requested data successfully');
        })
    }
  }
}