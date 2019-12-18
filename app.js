const express = require ('express')
const app = express()
const home = require('./routes/home')

app.use(express.urlencoded({extended : false}))
app.use(express.static(__dirname+'/public'))
app.set('view engine', 'ejs')

// app.get('/', (req, res) => {
//    res.send('home.ejs')
// })


app.use('/', home)













app.listen(3000)