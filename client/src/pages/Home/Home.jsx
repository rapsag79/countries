import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../../components/Cards/Cards";
import { getAllCountries } from "../../redux/action/action";
import filterCountriesByActivitys from "../../helpers/filterCountriesByActivitys";
import styles from "./Home.module.css";
import { useLocation } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const { allCountries } = useSelector((state) => state);
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(localStorage.getItem("currentPage") || 1);
  const countriesPerPage = 10;

  const [sortBy, setSortBy] = useState(localStorage.getItem("sortBy") || "");
  const [filterByContinent, setFilterByContinent] = useState(localStorage.getItem("filterByContinent") || "");
  const [filterByActivity, setFilterByActivity] = useState(localStorage.getItem("filterByActivity") || "");
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

    setFilteredAndSortedCountries(filteredCountries);
  }, [allCountries, filterByContinent, filterByActivity, sortBy]);

  useEffect(() => {
    localStorage.setItem("sortBy", sortBy);
    localStorage.setItem("filterByContinent", filterByContinent);
    localStorage.setItem("filterByActivity", filterByActivity);
    localStorage.setItem("currentPage", currentPage);
  }, [sortBy, filterByContinent, filterByActivity, currentPage]);

  const totalPages = Math.ceil(filteredAndSortedCountries.length / countriesPerPage);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const goToLastPage = () => {
    setCurrentPage(totalPages);
  };

  const currentSet = Math.ceil(currentPage / 10);
  const startPage = (currentSet - 1) * 10 + 1;
  const endPage = Math.min(startPage + 9, totalPages);

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
        <Cards currentCountries={filteredAndSortedCountries.slice((currentPage - 1) * countriesPerPage, currentPage * countriesPerPage)} />
      </div>

      {location.pathname === "/home" && (
        <div className={styles.buttons}>
          <button onClick={goToFirstPage} disabled={currentPage === 1}>
            {"<<"}
          </button>

          <button onClick={prevPage} disabled={currentPage === 1}>
            {"<"}
          </button>

          {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
            const page = startPage + index;
            return (
              <button key={page} onClick={() => goToPage(page)} disabled={currentPage === page || page > totalPages}>
                {page}
              </button>
            );
          })}

          <button onClick={nextPage} disabled={currentPage === totalPages}>
            {">"}
          </button>

          <button onClick={goToLastPage} disabled={currentPage === totalPages}>
            {">>"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
