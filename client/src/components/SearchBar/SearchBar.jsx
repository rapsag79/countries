import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getCountriesByName } from "../../redux/action/action";

import styles from "./SearchBar.module.css"

const SearchBar = () => {
  const dispatch = useDispatch()
  const [searchString, setSearchString] = useState("")

    function handleChange(event) {
    event.preventDefault();
    setSearchString(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault()
    dispatch(getCountriesByName(searchString.charAt(0).toUpperCase() + searchString.slice(1)));
  }
  
   return (
    <div className={styles["search-box"]}>
       
       <div className={styles.paises}>
         <Link to={"/home"}>
           <button className={styles.h2}>Paises</button>
         </Link>
      </div>

       <br />
       <form onChange={handleChange} >
         <input placeholder="Busqueda" type="search"/>
         <button onClick={handleSubmit} type="submit">Buscar</button>
       </form>

       <div>
         <Link to={"/activities"}>
         <button className={styles.h2}>Actividades</button>
         </Link>
       </div>

    </div>
  )
}

export default SearchBar;