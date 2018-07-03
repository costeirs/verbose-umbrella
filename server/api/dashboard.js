const { Router } = require('express')
const Projects = require('../models/project')

const router = Router()

/* GET dashboard */
router.get('/', async (req, res, next) => {
  const projs = await Projects.find().select('name').exec()
  // add more things to dashboard later
  const results = {
    projects: projs
  }
  res.json(results)
})

module.exports = router
