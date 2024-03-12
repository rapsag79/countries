const axios = require("axios");
const { Pokemon } = require("../../db");
const infoCleaner = require("../../utils/infoCleaner");
const { API } = process.env;


const getAllPokemons = async (url = `${API}`, allPokemons = []) => {
  const pokemonsDB = await Pokemon.findAll();
  const response = await axios.get(url);
  const data = response.data;
  const pokemonsApi = data.results.map(pokemon => ({
    name: pokemon.name,
    url: pokemon.url
  }));
  allPokemons = allPokemons.concat(pokemonsApi);
  
  if (data.next) {
    return getAllPokemons(data.next, allPokemons);
  } else {
    return [...pokemonsDB, ...allPokemons];
  }
};



const getPokemonByName = async (name) => {
  const response = await axios.get(`${API}/${name}`);
  return infoCleaner(response.data);
};

const getPokemonById = async (id, source) => {
  const pokemon = source === "api" ? (await axios.get(`${API}/${id}`)).data : await Pokemon.findByPk(id)

  return infoCleaner(pokemon);
};

const createPokemonsBD = async ({ nombre, imagen, vida, ataque, defensa, velocidad, altura, peso }) => {
  return await Pokemon.create({ nombre, imagen, vida, ataque, defensa, velocidad, altura, peso });
};

module.exports = { getAllPokemons, getPokemonById, getPokemonByName, createPokemonsBD };











// const getPokemonById = async (id, sourse) => {
//   const pokemon = sourse === "api" ? (await axios.get(`${API}/${id}`)).data : await Pokemon.findByPk(id)

//   return pokemon
// }