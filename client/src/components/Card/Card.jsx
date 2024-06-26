import {Link} from "react-router-dom"

import styles from "./Card.module.css"

const Card = ({
  id,
  name,
  flags,
  continent,
}) => {

  // console.log(name,flags,continent, capital, subregion, area, population);

   return (
     <div className={styles["container"]}>
       <Link to={`/home/${id}`}>
       <img src={flags} alt=" bandera" className={styles["img"]}/>
       <h2 className={styles["texto"]}>{ name }</h2>
         <h2 className={styles["texto"]}>{continent}</h2>
       </Link>

    </div>
  )
}

export default Card