var express = require('express');
var router = express.Router();
var Mate = require('../db');



// router.get('/', function (req, res) {
//     db.mate.find({}, function (err, users) {
//         res.render('home');
//     });
// })

dbMates = {}

// router.get('/', function (req, res) {
//     Mate.find({}, function (err, mates) {
//         dbMates = mates
//     });
//     console.log(dbMates)
//     res.render('home', { mates: dbMates })
// });

router.get('/', function (req, res) {
    Mate.find({}, function (err, users) {
        if (err) throw err;

        // object of all the users
        console.log(users);
    });
    res.render('home', { mates: dbMates })
});

router.post('/', function (req, res) {

})





module.exports = router