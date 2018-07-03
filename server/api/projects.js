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
    "project": req.params.id
  }).exec()
  console.log("reqs=",results)
  res.json(results)
})

module.exports = router
