const {getAllCountries, getCountrieByName, getCountrieById
} = require('../../Controllers/CountriesControllers/countriesController');
// const { saveCountriesDB } = require('../../utils/Countries/saveCountriesDB');

// const getCountriesHandler = async (req, res) => {
//   const { name } = req.query;
//   try {if (name) {
//     const countrie = await getCountrieByName(name)
//     res.status(200).json(countrie)
//   } else {
//     const countries = await getAllCountries(req, res);
//     res.status(200).json(countries)
//     // return countries
//   }
//   } catch (error) {
//     res.status(400).json({error:error.message})
//   }
  
// }

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