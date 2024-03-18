const activity = require("express").Router()

activity.get("/", (req,res) => {
  res.status(200).send("Aquí estarán todas las actividades");
})

activity.get("/:id", (req, res) => {
  const {id} = req.params
  res.status(200).send("Aquí estará la información de la actividad con ID " + id);
})

activity.post("/", (req,res) => {
  res.status(200).send("Aquí se crearán todas las actividades");
})

module.exports = activity;