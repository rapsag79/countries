// const {Activities, Countries} = require("../../db");
// const { getCountrieById } = require("../CountriesControllers/countriesController");

// const createActivityDB = async ( name, difficulty, duration, season) => {
 
//   return await Activities.create({
//       name, difficulty, duration, season
//   })
// }

// const createActivityWithCountries = async (req, res) => {
//   try {
//     // Extraer los datos de la solicitud
//     const { name, difficulty, duration, season, countriesId } = req.body;

//     // Crear la actividad turística en la base de datos
//     const activity = await createActivityDB(name, difficulty, duration, season);

//     // Verificar si se creó la actividad correctamente
//     if (!activity) {
//       return res.status(400).json({ message: "Error al crear la actividad turística" });
//     }

//     // Verificar si se proporcionaron países en la solicitud
//     if (!countriesId || !Array.isArray(countriesId) || countriesId.length === 0) {
//       return res.status(400).json({ message: "Debe proporcionar al menos un país" });
//     }

//     // Asociar la actividad con los países proporcionados
//     const associatedCountries = [];
//     for (const countryId of countriesId) {
//       const country = await getCountrieById(countryId, "database"); // Obtener país por ID desde la base de datos
//       if (country) {
//         await activity.addCountry(country); // Asociar la actividad con el país
//         associatedCountries.push(country);
//       }
//     }

//     // Devolver la actividad creada y los países asociados
//     res.status(201).json({ activity, associatedCountries });
//   } catch (error) {
//     console.error("Error al crear la actividad turística:", error);
//     res.status(500).json({ message: "Error interno del servidor" });
//   }
// };



// const getAllActivities = async () => {
//   const activity = await Activities.findAll(
//     {include: [{
//       model: Countries, // Modelo de la tabla Countries
//       as: 'Countries' // Alias de la relación en el modelo de Activities
//     }]}
//   )

//   return activity
// }

// module.exports = { createActivityWithCountries, getAllActivities}



// const { Activities, Countries } = require("../../db");
// const { getCountrieById } = require("../CountriesControllers/countriesController");

// const createActivityDB = async (name, difficulty, duration, season) => {
//   return await Activities.create({
//     name, difficulty, duration, season
//   });
// }

// const createActivityWithCountries = async (req, res) => {
//   try {
//     // Extraer los datos de la solicitud
//     const { name, difficulty, duration, season, countriesId } = req.body;

//     // Crear la actividad turística en la base de datos
//     const activity = await createActivityDB(name, difficulty, duration, season);

//     // Verificar si se creó la actividad correctamente
//     if (!activity) {
//       return res.status(400).json({ message: "Error al crear la actividad turística" });
//     }

//     // Verificar si se proporcionaron países en la solicitud
//     if (!countriesId || !Array.isArray(countriesId) || countriesId.length === 0) {
//       return res.status(400).json({ message: "Debe proporcionar al menos un país" });
//     }

//     // Asociar la actividad con los países proporcionados
//     const associatedCountries = [];
//     for (const countryId of countriesId) {
//       const country = await getCountrieById(countryId, "database"); // Obtener país por ID desde la base de datos
//       if (country) {
//         await activity.addCountry(country); // Asociar la actividad con el país
//         associatedCountries.push(country);
//       }
//     }

//     // Devolver la actividad creada y los países asociados
//     res.status(201).json({ activity, associatedCountries });
//   } catch (error) {
//     console.error("Error al crear la actividad turística:", error);
//     res.status(500).json({ message: "Error interno del servidor" });
//   }
// };

// const getAllActivities = async () => {
//   const activity = await Activities.findAll({
//     include: [{
//       model: Countries, // Modelo de la tabla Countries
//       as: 'Countries' // Alias de la relación en el modelo de Activities
//     }]
//   });

//   return activity;
// }

// module.exports = { createActivityWithCountries, getAllActivities };

const {Activities, Countries} = require("../../db");
const { getCountrieById } = require("../CountriesControllers/countriesController");

const createActivityDB = async ( name, difficulty, duration, season) => {
 
  return await Activities.create({
      name, difficulty, duration, season
  })
}

const createActivityWithCountries = async (req, res) => {
  try {
    // Extraer los datos de la solicitud
    const { name, difficulty, duration, season, countriesId } = req.body;

    // Crear la actividad turística en la base de datos
    const activity = await createActivityDB(name, difficulty, duration, season);

    // Verificar si se creó la actividad correctamente
    if (!activity) {
      return res.status(400).json({ message: "Error al crear la actividad turística" });
    }

    // Verificar si se proporcionaron países en la solicitud
    if (!countriesId || !Array.isArray(countriesId) || countriesId.length === 0) {
      return res.status(400).json({ message: "Debe proporcionar al menos un país" });
    }

    // Asociar la actividad con los países proporcionados
    const associatedCountries = [];
    for (const countryId of countriesId) {
      const country = await getCountrieById(countryId, "database"); // Obtener país por ID desde la base de datos
      if (country) {
        await activity.addCountry(country); // Asociar la actividad con el país
        associatedCountries.push(country);
      }
    }

    // Devolver la actividad creada y los países asociados
    res.status(201).json({ activity, associatedCountries });
  } catch (error) {
    console.error("Error al crear la actividad turística:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};



const getAllActivities = async () => {
  const activity = await Activities.findAll(
    {include: [{
      model: Countries, // Modelo de la tabla Countries
      as: 'Countries' // Alias de la relación en el modelo de Activities
    }]}
  )

  return activity
}

module.exports = { createActivityWithCountries, getAllActivities}