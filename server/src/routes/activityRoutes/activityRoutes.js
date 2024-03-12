const {Router} = require('express')
const { 
  getActivityHandler, 
} = require('../../handlers/handlersActivity/handlersActivity')

const activityRouter = Router()

typeRouter.get("/", getActivityHandler)

module.exports = activityRouter;