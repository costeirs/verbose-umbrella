const { Router } = require('express')

const router = Router()

// Mock Projects
const projects = [
  {
    name: 'Alexandre',
    description: 'Culpa sint minim irure pariatur esse ut.',
    team: [
      {
        user: 'stephen',
        role: 'pm'
      },
      {
        user: 'alice',
        role: 'dev',
        lead: true
      },
      {
        user: 'bob',
        role: 'dev'
      }
    ],

  }
]

/* GET projects listing. */
router.get('/projects', function (req, res, next) {
  res.json(projects)
})

/* GET projects by ID. */
router.get('/projects/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < projects.length) {
    res.json(projects[id])
  } else {
    res.sendStatus(404)
  }
})

module.exports = router
