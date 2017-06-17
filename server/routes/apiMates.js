var express = require('express');
var router = express.Router();
var db = require('../db');





router.get('/', function (req, res) {
  //res.send("hello world")
  var list = keystone.list('Unit')
  list.model
        .find()
        .select({_id: 0, unitId: 1, chipId: 1, shortcut: 1, email: 1, person:1, lastConnnect: 1, lastDisconnect: 1})
        .exec( (err, units) => {
            if (err) {
                console.log('votingList err: ' + err);
                return
            }
            res.json(units)
        })
})






module.exports = router