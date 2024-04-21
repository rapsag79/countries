const axios = require("axios");
const { Countries, Activities } = require("../../db");
const infoCleaner = require("../../utils/infoCleaner");
// const paginate = require("../../utils/paginate");
const { API } = process.env;


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

const getAllCountries = async (req) => {
    try {
        // Obtener todos los países de la base de datos con paginación
        const countries = await saveCountriesAndRetrieve();
        const page = req.query.page || 1;
        const limit = 10;
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const countriesForPage = countries.slice(startIndex, endIndex);
      
      return countries
      // return countries;
      // paginate(countries)

    } catch (error) {
        throw new Error(error.message);
    }
};


// const saveCountriesAndRetrieve = async (req) => {
//   try {
//     // Obtener datos de la API
//     const response = await axios.get(API);
//     const countries = response.data;
    
//     // Obtener todos los países existentes en la base de datos
//     const existingCountriesIds = (await Countries.findAll()).map(country => country.id);

//     // Limpieza de datos y cualquier otra manipulación necesaria
//     const dataArray = infoCleaner(countries);

//     // Filtrar los países que no existen en la base de datos
//     const newCountries = dataArray.filter(country => !existingCountriesIds.includes(country.id));

//     // Almacenar los países nuevos en la base de datos
//     await Countries.bulkCreate(newCountries);
    
//     // Obtener todos los países almacenados en la base de datos sin paginación
//     const allCountries = await Countries.findAll({
//       include: Activities
//     });

//     // Obtener la página solicitada o la primera página si no se proporciona
//     const page = req.query.page ? parseInt(req.query.page) : 1;
//     const limit = 10; // Número máximo de países por página
//     const startIndex = (page - 1) * limit;
//     const endIndex = startIndex + limit;
    
//     // Obtener los países para la página actual
//     const countriesForPage = allCountries.slice(startIndex, endIndex);
    
//     // URL de la siguiente página si es necesario
//     let next = null;
//     if (endIndex < allCountries.length) {
//       next = `http://localhost:3001/countries?page=${page + 1}`; // Reemplaza esto con la URL correcta de tu API
//     }

//     return {
//       countries: countriesForPage,
//       next: next
//     };
//   } catch (error) {
//     console.error('Error al obtener o almacenar los países:', error);
//     throw new Error('Error al obtener o almacenar los países');
//   }
// };


// const getAllCountries = async (req) => {
//   try {
//     // Obtener todos los países de la base de datos con paginación
//     return await saveCountriesAndRetrieve(req);
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };


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
