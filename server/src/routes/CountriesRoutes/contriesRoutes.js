const { getCountriesHandler,getDetailCountrieHandler } = require("../../handlers/ContriesHandler/countriesHandler");

const countrie = require("express").Router()

countrie.get("/", getCountriesHandler )

countrie.get("/:id", getDetailCountrieHandler )

countrie.post("/", (req,res) => {
  res.status(200).send("Aquí se crearán todos los paises");
})

module.exports = countrie;