const {getAllCountries, getCountrieByName, getCountrieById
} = require('../../Controllers/CountriesControllers/countriesController');

const getCountriesHandler = async (req, res) => {
    const { name } = req.query;
    try {
        if (name) {
            const country = await getCountrieByName(name);
            res.status(200).json(country);
        } else {
            // Obtener todos los países utilizando la función getAllCountries
            const countries = await getAllCountries(req);
            res.status(200).json(countries);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getDetailCountrieHandler = async (req, res) => {
  const { id } = req.params
  try {
    const country = await getCountrieById(id)

     if (country) {
      res.json(country);
    } else {
      res.status(404).json({ message: "Country not found" });
    }
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}


module.exports = {getCountriesHandler, getDetailCountrieHandler }