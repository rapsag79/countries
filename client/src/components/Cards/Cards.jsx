import Card from "../Card/Card";
import styles from "./Cards.module.css";

const Cards = ({ currentCountries}) => {


  return (
    <div className={styles["cardsContenedor"]}>

      {currentCountries.map((country) => (
        <Card
          key={country.id}
          id={country.id}
          flags={country.flags}
          name={country.name}
          continent={country.continent}
          capital={country.capital}
          subregion={country.subregion}
          area={country.area}
          population={country.population}
        />
      ))}
    </div>
  );
};

export default Cards;
