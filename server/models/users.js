const mongoose = require('mongoose')

const definition = {
  name: {
    type: String
  }
}

const options = {
  timestamps: true
}

const schema = new mongoose.Schema(definition, options)

module.exports = mongoose.model('User', schema)
