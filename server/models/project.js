const mongoose = require('mongoose')

const definition = {
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: 1
  },
  description: {
    type: String
  }
}

const options = {
  timestamps: true
}

const schema = new mongoose.Schema(definition, options)

module.exports = mongoose.model('Project', schema)
