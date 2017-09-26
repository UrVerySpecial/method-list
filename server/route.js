let itemController = require('./controllers/items')

let express = require('express')
let router = express.Router()

router.get('/items', itemController.getItems)

module.exports = router