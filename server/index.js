
const express = require('express')
const { Nuxt, Builder } = require('nuxt-edge')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
const mongoose = require('mongoose')

app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // 1. Connect to the database
  mongoose.Promise = Promise
  mongoose.connection.on('error', error => { throw error })
  await mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/umbrella')

  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Import API Routes
  app.use('/api', require('./api/users'))
  app.use('/api', require('./api/projects'))
  app.use('/api', require('./api/dashboard'))

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  console.log('Server listening on http://' + host + ':' + port) // eslint-disable-line no-console
}
start()
