import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllActivities } from "../../redux/action/action";

import Activity from "../Activity/Activity";
import { NavLink } from "react-router-dom";

import styles from "./Activities.module.css"

const Activities = () => {
  const dispatch = useDispatch();
  const { allActivities } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllActivities());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const activitiesPerPage = 10; // Cambiado a activitiesPerPage

  if (!allActivities) {
    return (
      <div>
        Cree una nueva actividad <NavLink to="/create">Aqui</NavLink>
      </div>
    );
  }

  const indexOfLastActivities = currentPage * activitiesPerPage; // Corregido a activitiesPerPage
  const indexOfFirstActivity = indexOfLastActivities - activitiesPerPage; // Corregido a activitiesPerPage
  const currentActivities = allActivities.slice(indexOfFirstActivity, indexOfLastActivities);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className={styles.container}>
      <button className={styles.NavLink}>
        <NavLink to="/create">Registre una nueva actividad</NavLink>
      </button>

      <div className={styles.cardsContainer}>
        {currentActivities.map((activity) => (
          <Activity
            key={activity.id}
            id={activity.id}
            name={activity.name}
            difficulty={activity.difficulty}
            duration={activity.duration}
            season={activity.season}
            countries={activity.Countries.map((country) => country.name).join(", ")} 
          />
        ))}
      </div>

      <div>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <button onClick={nextPage}>Siguiente</button>
      </div>
    </div>
  );
};

export default Activities;
