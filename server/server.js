var express = require('express')
let route = require('./route')
let app = express()
let mongoose = require('mongoose')
var cors = require('cors')({origin: true})
var bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost/test')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(require('connect-history-api-fallback')())
app.use(cors)
app.use('/api',route)
app.use(express.static('public'))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
