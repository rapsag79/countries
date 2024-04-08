import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"

import axios from "axios";
import styles from "./Detail.module.css"

const Detail = () => {
  const { id } = useParams();

  const navigate = useNavigate()
  const [countrie, setCountrie] = useState([]);

   useEffect(() => {
    axios(`http://localhost:3001/countries/${id}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
          setCountrie(data);
        } 
      });
    return setCountrie([]);
   }, [id])

  console.log(countrie);
  
   return (
     <div className={styles["container"]}>
       <h2 className={styles["texto"]}>Nombre: { countrie.name }</h2>
       <img src={countrie.flags} alt=" bandera" className={styles["img"]}/>
       <p className={styles["texto"]}>Continent: {countrie.continent}</p>
       <p className={styles["texto"]}>Capital: {countrie.capital}</p>
       {countrie.subregion && <p>Subregión: {countrie.subregion}</p>}
      {countrie.area && <p>Área: {countrie.area} km</p>}
       <p className={styles["texto"]}>Población: {countrie.population} habitantes</p>
       <p className={styles["texto"]}>Actividades: {countrie.Acvivities}</p>

        <button
            className={`${styles.closeButton} closeButton`}
            onClick={() => navigate(-1)} // retrocede en la historia del navegador
          >
            Back
          </button >
    </div>
  )
}

export default Detail