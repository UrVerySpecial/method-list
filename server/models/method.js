let mongoose = require('mongoose')

let Schema = mongoose.Schema

let methodSchema =  new Schema({
  title: String,
  haveLink: Boolean,
  submenu: [
    {
      title: String,
      link: String,
      annexed: [{
        title: String,
        desc: String
      }]
    }
  ],
  annexedLink: {
    title: String,
    Link: String
  },
  applications: [{ type: Schema.Types.ObjectId, ref: 'Application' }]
})

module.exports = mongoose.model('Method', methodSchema)
