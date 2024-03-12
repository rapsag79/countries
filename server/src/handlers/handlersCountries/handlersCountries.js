const { createPokemonsBD, getPokemonById, getPokemonByName, getAllPokemons } = require("../../controllers/controllers Pokemos/controllers Pokemos");

const getPokemonsHandler = async (req, res) => {
  const { name } = req.query;

  try {
    if (name) {
      const pokemon = await getPokemonByName(name);
      res.status(200).json(pokemon);
    } else {
      const pokemons = await getAllPokemons();
      res.status(200).json(pokemons);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};




const getDetailPokemonsHandler = async (req, res) => {
  const { id } = req.params
  const sourse = isNaN(id) ? "bdd" : "api";
  
  try {
    const response = await getPokemonById( id, sourse )

    res.status(200).json(response)
  } catch (error) {

    res.status(400).json({error:error.message})
  }
}

const postPokemonsHandler = async (req, res) => {
  const { nombre, imagen, vida, ataque, defensa, velocidad, altura, peso } = req.body;

  try {
    const newPokemon = await createPokemonsBD({ nombre, imagen, vida, ataque, defensa, velocidad, altura, peso });
    res.status(201).json(newPokemon);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getPokemonsHandler, getDetailPokemonsHandler, postPokemonsHandler };
