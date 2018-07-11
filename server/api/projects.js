const { Router } = require('express')
const Projects = require('../models/project')
const ReqModel = require('../models/requirements')
const ObjectId = require('mongoose').Types.ObjectId;


const router = Router()

/* GET projects listing. */
router.get('/', async (req, res, next) => {
  const results = await Projects.find().exec()
  res.json(results)
})

/* GET recent projects */
router.get('/recent', async (req, res, next) => {
  const results = await Projects.find().select('name').exec()
  res.json(results)
})

/* GET projects by ID. */
router.get('/:id', async (req, res, next) => {
  const results = await Projects.find({_id: req.params.id}).exec()
  if (!results) {
    return res.sendStatus(404)
  }
  res.json(results)
})

router.get('/:id/requirements', async (req, res, next) => {
  console.log("lookin for",req.params.id)
  const results = await ReqModel.find({
    project: new ObjectId(req.params.id)
  })
  .sort({
    order: 1
  })
  .exec()

  res.json(results)
})

router.post('/:pid/requirements', async (req, res, next) => {
  const newReq = new ReqModel(req.body)
  newReq.projectId = req.params.pid

  await newReq.save()
})

module.exports = router
