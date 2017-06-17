// init   
const mongoose = require('mongoose')
const db = mongoose.connection


mongoose.Promise = global.Promise;
mongoose.createConnection('mongodb://localhost:27017/GamcaMates')

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('we are connected to MongoDB')
});



const mateSchema = mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String }
})




var Mate =  mongoose.model('mate', mateSchema)
module.exports = Mate
// functions

module.exports.addMate = (newMate) => {
    newMate.save((err) => {
        if (err) throw err
    })
}
