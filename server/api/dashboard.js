const { Router } = require('express')

const router = Router()

// Mock Projects
const projects = [
  {
    name: 'Alexandre',
    id: 0,
    pending: 12
  },
  {
    name: 'Project Two',
    id: 1,
    pending: 12
  },
  {
    name: 'Project Three',
    id: 2,
    pending: 12
  },
]

/* GET projects listing. */
router.get('/dashboard', function (req, res, next) {
  res.json(projects)
})

module.exports = router
