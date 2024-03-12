const {Router} = require('express')

const countriesRouter = Router()

const { 
  getCountriesHandler,
  getDetailCountriesHandler,
  postCountriesHandler
} = require("../../handlers/handlersPokemons/handlersPokemons.js")

countriesRouter.get("/", getCountriesHandler)

countriesRouter.get("/:id", getDetailCountriesHandler)

countriesRouter.post("/", postCountriesHandler)

module.exports = countriesRouter;