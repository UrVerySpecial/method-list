let mongoose = require('mongoose')

let Schema = mongoose.Schema

let applicationSchema =  new Schema({
  kind: String,
  usedEquipment: String,
  link: {
    title: String,
    url: String
  },
  issueDate: Date,
  point: String,
  likeCount: Number,
  createDate: Date,
  maker: String
})

module.exports = mongoose.model('Application', applicationSchema)
