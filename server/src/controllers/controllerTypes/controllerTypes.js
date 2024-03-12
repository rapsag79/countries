const axios = require("axios");
const { Type } = require("../../db");
const { API2 } = process.env;

const getAllTypes = async () => {
  let types = await Type.findAll();

  if (types.length === 0) {
    // Si la base de datos está vacía, obtener los tipos de la API y guardarlos en la base de datos
    const response = await axios.get(`${API2}`);
    const typeData = response.data.results.map((type) => ({
      nombre: type.name,
    }));
    types = await Type.bulkCreate(typeData);
  }

  return types;
};

module.exports = { getAllTypes };
