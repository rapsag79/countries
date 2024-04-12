import styles from "./Activity.module.css";

const Activity = ({
  id,
  name,
  difficulty,
  duration,
  season,
  countries
}) => {
  return (
    <div className={styles["container-activity"]}>
      <h2 className={styles["texto"]}>Nombre: {name}</h2>
      <p className={styles["texto"]}>Dificultad: {difficulty}</p>
      <p className={styles["texto"]}>Duración: {duration}</p>
      <p className={styles["texto"]}>Temporada: {season}</p>
      <p className={`${styles["texto"]} ${styles["texto-pais"]}`}>País: {countries}</p>
    </div>
  );
};

export default Activity;
