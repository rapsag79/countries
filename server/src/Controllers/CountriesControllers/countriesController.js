const axios = require("axios");
const { Countries, Activities } = require("../../db");
const infoCleaner = require("../../utils/infoCleaner");
const { API } = process.env;

const saveCountriesAndRetrieve = async () => {
    try {
        // Obtener datos de la API
        const response = await axios.get(`${API}`);
        const countries = response.data;

        // Limpieza de datos y cualquier otra manipulación necesaria
        const dataArray = infoCleaner(countries);

        // Filtrar los países que no existen en la base de datos
        const newCountries = await Promise.all(dataArray.map(async country => {
            const existingCountry = await Countries.findOne({ where: { id: country.id } });
            if (!existingCountry) {
                // Almacenar las actividades asociadas al país
                country.activities = country.activities || [];
                country.activities = await Promise.all(country.activities.map(async activityId => {
                    return await Activities.findByPk(activityId);
                }));

                return country;
            }
        }));

        // Eliminar elementos indefinidos del array
        const filteredCountries = newCountries.filter(country => country);

        // Almacenar los países en la base de datos
        await Countries.bulkCreate(filteredCountries);

        // Obtener todos los países almacenados en la base de datos
        const allCountries = await Countries.findAll({ include: Activities });

        // Devolver los países almacenados
        return allCountries;
    } catch (error) {
        // Manejar cualquier error que ocurra durante la solicitud
        console.error('Error al obtener o almacenar los países:', error);
        throw new Error('Error al obtener o almacenar los países');
    }
};


const getAllCountries = async (req, res) => {
    try {
        // Obtener todos los países de la base de datos
      const countries = await saveCountriesAndRetrieve();

        // Paginación
        const itemsPerPage = 10;
        const page = req.query.page || 1;
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const countriesForPage = countries.slice(startIndex, endIndex);

        // Devolver los países de la página actual en la respuesta HTTP
        res.status(200).json(countriesForPage);
    } catch (error) {
        // Manejar cualquier error que ocurra durante la solicitud
        console.error('Error al obtener los países:', error);
        res.status(500).json({ message: 'Error al obtener los países' });
    }
};

const getCountrieByName = async (name) => {
  const countries = await Countries.findAll({
            where: {
              name,
    },
        include: Activities
  });
  
  return countries
};

const getCountrieById = async (id) => {
  try {
    // Buscar el país por su ID en la base de datos
    const country = await Countries.findOne({
      where: { id: id },
      include: Activities,
    });
    return country;
  } catch (error) {
    console.error("Error al buscar país:", error);
    throw new Error("Error al buscar país");
  }
};


module.exports = { getCountrieByName, getCountrieById, getAllCountries, }
