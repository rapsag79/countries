const axios = require("axios");
const { Type } = require("../../db");
const { API } = process.env;

console.log(API)

const getAllActivity = async () => {
  let activity = await Type.findAll();

  if (activity.length === 0) {
    // Si la base de datos está vacía, obtener los tipos de la API y guardarlos en la base de datos
    const response = await axios.get(`${API}`);
    const activityData = response.data.results.map((activity) => ({
      nombre: activity.name,
    }));
    activity = await Type.bulkCreate(activityData);
  }

  return activity;
};

const createActivityBD = () => {

}

module.exports = { getAllActivity,createActivityBD };
