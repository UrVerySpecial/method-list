let mongoose = require('mongoose')

let Schema = mongoose.Schema

let applicationSchema =  new Schema({
  kind: String,
  usedEquipment: String,
  title: String,
  titleLink: String,
  issueDate: Date,
  point: String,
  likeCount: Number,
  createDate: Date
})

module.exports = mongoose.model('Application', applicationSchema)
