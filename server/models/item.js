let mongoose = require('mongoose')

let Schema = mongoose.Schema

let itemSchema =  new Schema({
  class: String,
  item: String,
  standardValue: String,
  method: [{ type: Schema.Types.ObjectId, ref: 'Method' }]
})

module.exports = mongoose.model('Item', itemSchema)
