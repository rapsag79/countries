const {Router} = require('express')
const { 
  getactivityHandler, 
} = require('../../handlers/handlersTypes/handlersTypes')

const activityRouter = Router()

typeRouter.get("/", getactivityHandler)

module.exports = activityRouter;