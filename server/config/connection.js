const mongoose = require('mongoose')
// require ("dotenv").config()

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/my-future-summercamp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = mongoose.connection
