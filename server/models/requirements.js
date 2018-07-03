const mongoose = require('mongoose')

const definition = {
  projectId: {type: mongoose.Schema.Types.ObjectId, ref: 'Project'},
  text: {
    type: String,
    required: true,
    unique: true,
    minlength: 1
  }
}

const options = {
  timestamps: true
}

const schema = new mongoose.Schema(definition, options)

module.exports = mongoose.model('Requirements', schema)
