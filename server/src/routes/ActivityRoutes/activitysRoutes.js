const { postActivityHandler, getActivityAll } = require("../../handlers/ActivitysHandler/activitysHandler");

const activity = require("express").Router()

activity.get("/", getActivityAll)

activity.post("/", postActivityHandler)

module.exports = activity;