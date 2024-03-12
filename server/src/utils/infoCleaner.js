const infoCleaner = (pokemon) => {
  const types = pokemon.types ? pokemon.types.map((typeInfo) => typeInfo.type.name) : [];
  return {
    id:pokemon.id,
    nombre: pokemon.name,
    imagen: pokemon.sprites.front_default,
    tipo: types,
    vida: pokemon.stats.find(stat => stat.stat.name === 'hp').base_stat,
    ataque: pokemon.stats.find(stat => stat.stat.name === 'attack').base_stat,
    defensa: pokemon.stats.find(stat => stat.stat.name === 'defense').base_stat,
    velocidad: pokemon.stats.find(stat => stat.stat.name === 'speed').base_stat,
    altura: pokemon.height,
    peso: pokemon.weight,
    created: false
  };
};

//tipo: pokemon.types.find(stat => stat.stat.name === )

module.exports = infoCleaner;
