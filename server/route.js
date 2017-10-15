let itemController = require('./controllers/item')
let methodController = require('./controllers/method')
let express = require('express')
let router = express.Router()

router.get('/items', itemController.getItems)
router.post('/item', itemController.createItem)
router.get('/methods', methodController.getMethods)
router.get('/methods/:id', methodController.getMethod)
router.post('/methods', methodController.createMethod)
router.post('/methods/:id/newApplication', methodController.newApplication)
router.post('/methods/:id/newOther', methodController.newOther)

router.delete('/methods/deleteAppication/:id', methodController.deleteAppication)
router.patch('/methods/addLike/:applicationId', methodController.addLike)
router.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, './public', 'index.html'))
})
module.exports = router