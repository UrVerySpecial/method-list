let mongoose = require('mongoose')

let Schema = mongoose.Schema

let methodSchema =  new Schema({
  title: String,
  haveLink: Boolean,
  submenu: [
    {
      title: String,
      link: {
        title: String,
        url: String
      },
      annexed: [{
        title: String,
        desc: String
      }]
    }
  ],
  annexedLink: {
    title: String,
    url: String
  },
  applications: [{ type: Schema.Types.ObjectId, ref: 'Application' }],
  otherApp: [{ type: Schema.Types.ObjectId, ref: 'Application' }],
})

module.exports = mongoose.model('Method', methodSchema)
