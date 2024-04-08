import { Link } from "react-router-dom";
import styles from "./SearchBar.module.css"
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getCountriesByName } from "../../redux/action/action";

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
       
       <div>
         <Link to={"/home"}>
           <h2>Paises</h2>
         </Link>
      </div>

       <br />
       <form onChange={handleChange} >
         <input placeholder="Busqueda" type="search"/>
         <button onClick={handleSubmit} type="submit">Buscar</button>
       </form>

       <div>
         <Link to={"/activities"}>
         <h2>Actividades</h2>
         </Link>
       </div>

    </div>
  )
}

export default SearchBar;