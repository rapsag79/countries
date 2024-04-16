import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountriesByName } from "../../redux/action/action";

import styles from "./SearchBar.module.css"

const SearchBar = () => {
  const dispatch = useDispatch();
  const location = useLocation(); // Obtener la ruta actual
  const [searchString, setSearchString] = useState("");

  function handleChange(event) {
    event.preventDefault();
    setSearchString(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(getCountriesByName(searchString.charAt(0).toUpperCase() + searchString.slice(1)));
  }
  
  return (
    <div className={styles["search-box"]}>
      <div>
        {(location.pathname === "/activities" || location.pathname === "/aboutme" || location.pathname === "/create") && (
          <Link to={"/home"}>
            <button className={styles.h2}>Paises</button>
          </Link>
        )}
      </div>
      <div>
        {(location.pathname === "/home" || location.pathname === "/aboutme" || location.pathname === "/create") && (
          <Link to={"/activities"}>
            <button className={styles.h2}>Actividades</button>
          </Link>
        )}
      </div>
      <div>
        {(location.pathname === "/home" || location.pathname === "/activities" || location.pathname === "/create") && (
          <Link to={"/aboutme"}>
            <button className={styles.h2}>About me</button>
          </Link>
        )}
      </div>
      <br />
      {location.pathname === "/home" && ( // Condición para mostrar el formulario solo en la ruta "/home"
        <form onChange={handleChange} >
          <input placeholder="Busqueda" type="search"/>
          <button onClick={handleSubmit} type="submit">Buscar</button>
        </form>
      )}
    </div>
  );
}

export default SearchBar;
