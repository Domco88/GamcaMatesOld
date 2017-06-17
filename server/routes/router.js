var express = require('express');
var router = express.Router();



const homePage = require('./home')
//const apiMates = require('./apiMates')



router.use('/', homePage)
//router.use('/api/mates', apiMates)



module.exports = router