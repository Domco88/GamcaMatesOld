var express     = require('express')
var app         = express()
var router      = express.Router();
var exphbs      = require('express-handlebars');


const Mate = require('./server/db')
const Router = require('./server/routes/router')
 


app.get('/kamosi', function (req, res) {
    res.render('home', { name: 'Oliver' , kamos1: kamos, kamos2: jedinnyKamos });
});

var kamos = "Domco"





var jedinnyKamos = "jeho otec"

app.use('/static', express.static('static'))
app.use('/', Router)

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.listen(5000, function () {
  console.log('More tento server ide takze zarobene !!')
})












var cislo = ''
cislo = 3 + 4
console.log(cislo)

var vypisOliverhoKamosa = function(menoKamosa) {
    console.log(menoKamosa)
}

var Adam = "Pacient pre Pezinok"

vypisOliverhoKamosa(Adam)

vypisOliverhoKamosa("Ten 2. kamos")


var vypisKamosa = function(kamos) {
    console.log(kamos)
}




