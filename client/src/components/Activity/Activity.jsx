// import styles from "./Activity.module.css";

// const Activity = ({
//   id,
//   name,
//   difficulty,
//   duration,
//   season,
//   countries
// }) => {
//   return (
//     <div className={styles["container-activity"]}>
//       <h2 className={styles["texto"]}> <b>Nombre:</b> {name}</h2>
//       <p className={styles["texto"]}> <b>Dificultad:</b> {difficulty}</p>
//       <p className={styles["texto"]}> <b>Duración:</b> {duration}</p>
//       <p className={styles["texto"]}> <b>Temporada:</b> {season}</p>
//       <p className={`${styles["texto"]} ${styles["texto-pais"]}`}> <b>País:</b> {countries}</p>
//     </div>
//   );
// };

// export default Activity;



import styles from "./Activity.module.css";

const Activity = ({ id, name, difficulty, duration, season, countries, hoveredActivity, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className={styles.containerActivity}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <h2 className={styles.texto1}> {name} </h2>
      {hoveredActivity === id && (
        <div className={styles.activityDetails}>
          <h2 className={styles.texto}><b>Nombre:</b> {name}</h2>
          <p className={styles.texto}><b>Dificultad:</b> {difficulty}</p>
          <p className={styles.texto}><b>Duración:</b> {duration}</p>
          <p className={styles.texto}><b>Temporada:</b> {season}</p>
          <p className={`${styles.texto} ${styles.textoPais}`}><b>Países:</b> {countries}</p>
        </div>
      )}
    </div>
  );
};

export default Activity;
