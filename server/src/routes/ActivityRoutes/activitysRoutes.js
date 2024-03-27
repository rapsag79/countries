const { postActivityHandler, getActivityAll } = require("../../handlers/ActivitysHandler/activitysHandler");

const activity = require("express").Router()

activity.get("/", getActivityAll)

activity.get("/:id", (req, res) => {
  const {id} = req.params
  res.status(200).send("Aquí estará la información de la actividad con ID " + id);
})

activity.post("/", postActivityHandler)

module.exports = activity;