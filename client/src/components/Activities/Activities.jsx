// import { useState } from "react";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllActivities } from "../../redux/action/action";

// import Activity from "../Activity/Activity";
// import { NavLink } from "react-router-dom";

// import styles from "./Activities.module.css"

// const Activities = () => {
//   const dispatch = useDispatch();
//   const { allActivities } = useSelector((state) => state);

//   useEffect(() => {
//     dispatch(getAllActivities());
//   }, [dispatch]);



//   return (
//     <div className={styles.container}>
//       <button className={styles.NavLink}>
//         <NavLink to="/create">Registre una nueva actividad</NavLink>
//       </button>

//       <div className={styles.cardsContainer}>
        // {allActivities.map((activity) => (
        //   <Activity
        //     key={activity.id}
        //     id={activity.id}
        //     name={activity.name}
        //     difficulty={activity.difficulty}
        //     duration={activity.duration}
        //     season={activity.season}
        //     countries={activity.Countries.map((country) => country.name).join(", ")}
        //   />
        // ))}
//       </div>
//     </div>
//   );
// };

// export default Activities;


import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllActivities } from "../../redux/action/action";
import { NavLink } from "react-router-dom";
import Activity from "../Activity/Activity";
import styles from "./Activities.module.css";

const Activities = () => {
  const dispatch = useDispatch();
  const { allActivities } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllActivities());
  }, [dispatch]);

  const [hoveredActivity, setHoveredActivity] = useState(null);

  return (
    <div className={styles.container}>
      <button className={styles.navLink}>
        <NavLink to="/create">Registre una nueva actividad</NavLink>
      </button>

      <div className={styles.cardsContainer}>
  {allActivities.map((activity) => (
    <Activity
      key={activity.id}
      id={activity.id}
      name={activity.name}
      difficulty={activity.difficulty}
      duration={activity.duration}
      season={activity.season}
      countries={activity.Countries.map((country) => country.name).join(", ")}
      hoveredActivity={hoveredActivity}
      onMouseEnter={() => setHoveredActivity(activity.id)}
      onMouseLeave={() => setHoveredActivity(null)}
    />
  ))}
</div>

    </div>
  );
};

export default Activities;
