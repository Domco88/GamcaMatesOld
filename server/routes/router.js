var express = require('express');
var router = express.Router();



const votesArea = require('./votesArea')
const votes = require('./votes')

const gameFlash = require('./gameFlash')
const gameUnit = require('./gameUnit')

const conferenceSituation = require('./conferenceSituation')
const cmd = require('./cmd')
const projectorPresentationsData = require('./projectorPresentationsData')

//const socket = require('./sockets/conference')




router.use('/api/votes', votesArea)
router.use('/api/votesArea', votes)

router.use('/api/gameFlash', gameFlash)
router.use('/api/gameUnit', gameUnit)

router.use('/api/conferenceSituation', conferenceSituation)
router.use('/api/cmd', cmd)
router.use('/api/projectorPresentationsData', projectorPresentationsData)
//router.use('/socket', socket)
















module.exports = router