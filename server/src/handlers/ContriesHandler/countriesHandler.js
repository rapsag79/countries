const {getAllCountries} = require('../../Controllers/CountriesControllers/countriesController')

const getCountriesHandler = async (req, res) => {
  // res.status(200).send("Aquí estarán todas los paises");
  await getAllCountries(req, res);
}

const getDetailCountrieHandler = (req, res) => {
  const {id} = req.params



  res.status(200).send(`Aquí estará la información del país con ID ${id}` );
}

// const getAllCountriesHandler = async (req, res) => {
//     // Llamar al método del controlador para obtener todos los países
//     await getAllCountries(req, res);
// };

module.exports = {getCountriesHandler, getDetailCountrieHandler, }