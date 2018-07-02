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

router.get('/projects/:id/requirements', function (req, res, next) {
  res.json(
    [
      {
        id: 0,
        order: 0,
        created_by: 'stephen',
        created_on: new Date(),
        status: 'accepted',
        type: 'text',
        text: 'First Lorem nisi sit Lorem pariatur enim id laboris nisi eiusmod.'
      },
      {
        id: 2,
        order: 1,
        created_by: 'stephen',
        created_on: new Date(),
        status: 'pending',
        type: 'text',
        text: 'Second Voluptate id sunt culpa nostrud esse fugiat.'
      },
      {
        id: 1,
        order: 2,
        created_by: 'stephen',
        created_on: new Date(),
        status: 'pending',
        type: 'plantuml',
        text: 'bob -> alice: Authentication Request\nbob <-- alice\nbob <-- alice'
      },
    ]
  )
})

module.exports = router
