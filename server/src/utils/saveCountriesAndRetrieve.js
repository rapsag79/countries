const axios = require("axios");
const Countries = require("../models/Countrties")
const { API } = process.env;

const infoCleaner = require("./infoCleaner");

const saveCountriesAndRetrieve = async () => {
  try {
    // Obtener datos de la API
    const response = await axios.get(API);
        const countries = response.data;
        
        // Obtener todos los países existentes en la base de datos
        const existingCountriesIds = (await Countries.findAll()).map(country => country.id);

        // Limpieza de datos y cualquier otra manipulación necesaria
        const dataArray = infoCleaner(countries);

        // Filtrar los países que no existen en la base de datos
        const newCountries = dataArray.filter(country => !existingCountriesIds.includes(country.id));

        // Almacenar los países nuevos en la base de datos
        await Countries.bulkCreate(newCountries);
        
        // Obtener todos los países almacenados en la base de datos sin paginación
        return await Countries.findAll({
            include: Activities 
          });
        } catch (error) {
          console.error('Error al obtener o almacenar los países:', error);
        throw new Error('Error al obtener o almacenar los países');
      }
};

module.exports = saveCountriesAndRetrieve
