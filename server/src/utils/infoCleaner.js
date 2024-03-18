const infoCleaner = (countries) => {
  return countries.map(country => ({
    id: country.cca3,
    name: country.name.common,
    flags: country.flags.svg, // Aquí puedes usar el enlace a la imagen de la bandera, como country.flags.svg o country.flags.png
    continent: country.continents[0], // Puedes tomar el primer continente de la lista si es un array
    capital: Array.isArray(country.capital) ? country.capital[0] : country.capital, // Modificación aquí
    subregion: country.subregion,
    area: country.area,
    population: country.population
  }));
};



module.exports = infoCleaner;



