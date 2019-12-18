const express = require ('express')
const app = express()
const home = require('./routes/home')
const initiators = require('./routes/initiators')
const seekers = require('./routes/seekers')

app.use(express.urlencoded({extended : false}))
app.use(express.static(__dirname+'/public'))
app.set('view engine', 'ejs')


app.use('/', home)
app.use('/initiators', initiators)
app.use('/seekers', seekers)












app.listen(3000)