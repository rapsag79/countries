import styles from "./Landing.module.css";
import { Link } from "react-router-dom";

const Landing = () => {
   return (
     <div className={styles["div"]}>
       <h2 className={styles["h2"]}>WELLCOME</h2>
       <img src="https://media.istockphoto.com/id/1262919673/es/vector/mapa-mundo-seperate-pa%C3%ADses-colores-vibrantes.jpg?s=612x612&w=0&k=20&c=GBLkhs6Gx8U2B1XgdQhML38iiEZtELfmrEL-txMhyW8=" alt="countries_map" />
       <button className={styles["button"]} type="button"  ><Link to={"/home "}>ENTER THE SITE</Link></button>
    </div>
  )
}

export default Landing;