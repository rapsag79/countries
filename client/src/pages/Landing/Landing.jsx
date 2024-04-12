import { NavLink } from "react-router-dom";

import styles from "./Landing.module.css";

const Landing = () => {
   return (
     <div className={styles.container}>
       <h2 className={styles.h2}>WELLCOME</h2>
       <section>   
       <img src="https://media.istockphoto.com/id/1262919673/es/vector/mapa-mundo-seperate-pa%C3%ADses-colores-vibrantes.jpg?s=612x612&w=0&k=20&c=GBLkhs6Gx8U2B1XgdQhML38iiEZtELfmrEL-txMhyW8=" alt="countries_map" />
       </section>
       <button className={styles.button} type="button"  >
         <NavLink to={"/home "} className={styles.link}>
           ENTER THE SITE
         </NavLink>
       </button>
    </div>
  )
}

export default Landing;