const axios = require("axios");
const { Countrie } = require("../../db");
const infoCleaner = require("../../utils/infoCleaner");
const generatePagedJS = require("../../utils/paged");
const { API } = process.env;

console.log(API);

const getCountrieById = async (id, source) => {
  const countrie = source === "api" ? (await axios.get(`${API}/${id}`)).data : await Countrie.findByPk(id)

  // console.log( countrie)

  return countrie
};

const getAllCountries = async (req, res) => {
  try {
    // Hacer una solicitud GET a la API para obtener todos los países
    const response = await axios.get(`${API}`);
            
    // Extraer los datos de la respuesta
    const countries = response.data;

    // Limpieza de datos y cualquier otra manipulación necesaria
    const dataArray = infoCleaner(countries)

    const itemsPerPage = 10;
    const page = req.query.page || 1; // Obtener el número de página de la solicitud (o establecerlo en 1 si no se proporciona)

    // Calcular el índice de inicio y fin para la página solicitada
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    // Obtener los países para la página actual
    const countriesForPage = dataArray.slice(startIndex, endIndex);

    // Devolver los países de la página actual en la respuesta HTTP
    res.status(200).json(countriesForPage);
  } catch (error) {
    // Manejar cualquier error que ocurra durante la solicitud
    console.error('Error al obtener los países:', error);
    res.status(500).json({ message: 'Error al obtener los países' });
  }
};


module.exports = { getCountrieById, getAllCountries }
