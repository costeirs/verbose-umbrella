const mongoose = require('mongoose')

const definition = {
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  },
  text: {
    type: String,
    required: true,
    unique: true,
    minlength: 1
  },
  order: {
    type: Number
  },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Requirements'
  }
}

const options = {
  timestamps: true
}

const schema = new mongoose.Schema(definition, options)

module.exports = mongoose.model('Requirements', schema)
