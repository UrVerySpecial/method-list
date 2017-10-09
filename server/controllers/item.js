var mongoose = require('mongoose')
let Item = require("../models/item")

exports.getItems = (req, res) => {
  return Item.find().populate('method').exec((err,items) => {
		if (!err) {
			res.json(items)
		} else {
			return console.log(err);
		}
	})
}
exports.createItem = (req, res) => {
  console.log(req)
  let newItem = new Item()
	newItem.class = req.body.class
	newItem.item = req.body.item
	newItem.standardValue = req.body.standardValue
	newItem.method = req.body.method
  newItem.save(err => {
    if (err) {
      res.send(err)
    }
    res.json({message: 'item created' })
  })
}