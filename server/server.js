var express = require('express')
let route = require('./route')
var app = express()
const cors = require('cors')({origin: true})

app.use(cors)
app.use(route)
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
