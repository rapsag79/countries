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

  // console.log(countrie);
  
   return (
     <div className={styles["container"]}>
       
       <section className={styles["card"]}>
         <button
            className={`${styles.closeButton} closeButton`}
            onClick={() => navigate(-1)} // retrocede en la historia del navegador
            >
            X
          </button >
         
       <h2 className={styles["texto-ttulo"]}> { countrie.id }</h2>
       <img src={countrie.flags} alt=" bandera" className={styles["img"]}/>
       <h2 className={styles["texto-ttulo"]}> { countrie.name }</h2>
       <p className={styles["texto"]}>Continent: {countrie.continent}</p>
       <p className={styles["texto"]}>Capital: {countrie.capital}</p>
       {countrie.subregion && <p className={styles["texto"]}>Subregión: {countrie.subregion}</p>}
      {countrie.area && <p className={styles["texto"]}>Área: {countrie.area.toLocaleString()} km</p>}
       <p className={styles["texto"]}>Población: {countrie.population && countrie.population.toLocaleString()} habitantes</p>

      {countrie.Activities && countrie.Activities.length > 0 && (
  <p className={styles["texto"]}>
    Actividades: {countrie.Activities.map(activity => activity.name).join(', ')}
  </p>
)}


        
      </section>
    </div>
  )
}

export default Detail