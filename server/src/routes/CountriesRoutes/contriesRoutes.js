const { getCountriesHandler,getDetailCountrieHandler } = require("../../handlers/ContriesHandler/countriesHandler");
const { Countries } = require("../../db");

const countrie = require("express").Router()

countrie.get("/", getCountriesHandler )

countrie.get("/:id", getDetailCountrieHandler )

module.exports = countrie;