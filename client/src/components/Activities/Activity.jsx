import styles from "./Activities.module.css"

const Activity = ({
  id,
  name,
  difficulty,
  duration,
  season,
  countries
}) => {

  return (
    <div >
       <h2 className={styles["texto"]}>Nombre: { name }</h2>
       <p className={styles["texto"]}>Dificultad: {difficulty}</p>
       <p className={styles["texto"]}>Duracion: {duration}</p>
       <p className={styles["texto"]}>Temporada: {season}</p>
       <p className={styles["texto"]}>País: {countries}</p>
     
    </div>
  );
};

export default Activity;

