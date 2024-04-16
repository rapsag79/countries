import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Cards from "../../components/Cards/Cards";
// import SearchBar from "../../components/SearchBar/SearchBar";

import { getAllCountries } from "../../redux/action/action";
import filterCountriesByActivitys from "../../helpers/filterCountriesByActivitys";

import styles from "./Home.module.css";

function Home() {
  // State y constantes
  const dispatch = useDispatch();
  const { allCountries } = useSelector((state) => state);

  // console.log(allCountries);

  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 10;
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;

  // Estados para filtros y orden
  const [sortBy, setSortBy] = useState("");
  const [filterByContinent, setFilterByContinent] = useState("");
  const [filterByActivity, setFilterByActivity] = useState("");
  const [filteredAndSortedCountries, setFilteredAndSortedCountries] = useState([]);

  // Efecto para obtener todos los países
  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  // Efecto para filtrar y ordenar países
  useEffect(() => {
    let filteredCountries = allCountries;

    // Filtrar por continente
    if (filterByContinent) {
      filteredCountries = filteredCountries.filter((country) => country.continent === filterByContinent);
    }

    // Filtrar por actividad turística
    // Filtrar por actividad turística
if (filterByActivity) {
  filteredCountries = filterCountriesByActivitys(filteredCountries, filterByActivity);
}


    // Ordenar los países
    if (sortBy === "name_asc") {
      filteredCountries = filteredCountries.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "name_desc") {
      filteredCountries = filteredCountries.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === "population_asc") {
      filteredCountries = filteredCountries.sort((a, b) => a.population - b.population);
    } else if (sortBy === "population_desc") {
      filteredCountries = filteredCountries.sort((a, b) => b.population - a.population);
    }

    // Actualizar estado de países filtrados y ordenados
    setFilteredAndSortedCountries(filteredCountries.slice(indexOfFirstCountry, indexOfLastCountry));
  }, [allCountries, filterByContinent, filterByActivity, sortBy, currentPage]);

  // Funciones para paginación
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className={styles["home"]}>
      {/* <SearchBar/> */}
      {/* Sección de filtros y opciones */}
      <section className={styles.section}>
        <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
          <option value="">Ordenar</option>
          <option value="name_asc">Nombre (A-Z)</option>
          <option value="name_desc">Nombre (Z-A)</option>
          <option value="population_asc">Población (Ascendente)</option>
          <option value="population_desc">Población (Descendente)</option>
        </select>

        <select value={filterByContinent} onChange={(event) => setFilterByContinent(event.target.value)}>
          <option value="">Filtrar por Continente</option>
          <option value="Africa">África</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europa</option>
          <option value="Oceania">Oceanía</option>
        </select>

       <select value={filterByActivity} onChange={(event) => setFilterByActivity(event.target.value)}>
          <option value="">Filtrar por Actividad</option>
          {allCountries && allCountries.map((country) => (
            country.Activities && country.Activities.map((activity) => (
              activity.name
            ))
          )).flat().filter((value, index, self) => self.indexOf(value) === index).map((activityName) => (
            <option key={activityName} value={activityName}>
              {activityName}
            </option>
          ))}
        </select>

      </section>

      <div className={styles.cards}>
        <Cards currentCountries={filteredAndSortedCountries} />
      </div>
      
      {/* Sección de botones de paginación */}
      <div>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <button onClick={nextPage}>Siguiente</button>
      </div>
    </div>
  );
}

export default Home;
