import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Cards from "../../components/Cards/Cards";
import { getAllCountries } from "../../redux/action/action";
import filterCountriesByActivitys from "../../helpers/filterCountriesByActivitys";

import styles from "./Home.module.css";

function Home() {
  const dispatch = useDispatch();
  const { allCountries } = useSelector((state) => state);
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 10;
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;

  const [sortBy, setSortBy] = useState("");
  const [filterByContinent, setFilterByContinent] = useState("");
  const [filterByActivity, setFilterByActivity] = useState("");
  const [filteredAndSortedCountries, setFilteredAndSortedCountries] = useState([]);

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  useEffect(() => {
    let filteredCountries = allCountries;

    if (filterByContinent) {
      filteredCountries = filteredCountries.filter((country) => country.continent === filterByContinent);
    }

    if (filterByActivity) {
      filteredCountries = filterCountriesByActivitys(filteredCountries, filterByActivity);
    }

    if (sortBy === "name_asc") {
      filteredCountries = filteredCountries.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "name_desc") {
      filteredCountries = filteredCountries.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === "population_asc") {
      filteredCountries = filteredCountries.sort((a, b) => a.population - b.population);
    } else if (sortBy === "population_desc") {
      filteredCountries = filteredCountries.sort((a, b) => b.population - a.population);
    }

    setFilteredAndSortedCountries(filteredCountries.slice(indexOfFirstCountry, indexOfLastCountry));
  }, [allCountries, filterByContinent, filterByActivity, sortBy, currentPage]);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className={styles["home"]}>
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
          {allCountries &&
            allCountries
              .flatMap((country) => country.Activities && country.Activities.map((activity) => activity.name))
              .filter((value, index, self) => self.indexOf(value) === index)
              .map((activityName) => (
                <option key={activityName} value={activityName}>
                  {activityName}
                </option>
              ))}
        </select>
      </section>

      <div className={styles.cards}>
        <Cards currentCountries={filteredAndSortedCountries} />
      </div>

      <div className={styles.buttons}>
        <button onClick={prevPage} disabled={currentPage === 1 || location.pathname === "/activities"}>
          Anterior
        </button>

        <button onClick={nextPage} disabled={filteredAndSortedCountries.length < 10 }>
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default Home;
