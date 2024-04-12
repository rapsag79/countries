import {
  useEffect,
  useState
} from "react"
import { useDispatch, useSelector } from "react-redux"
import Cards from "../../components/Cards/Cards"
import {
  getAllCountries
} from "../../redux/action/action"

import styles from "./Home.module.css"

function Home() {
  const { allCountries } = useSelector((state) => state)
  
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 10;
  
  
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry);
  
  // console.log(currentCountries);
  const nextPage = () => {
    setCurrentPage((nextPage) => nextPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
   const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCountries())
  }, [dispatch]);


 
   return (
     <div className={styles["home"]}>
       
       <Cards currentCountries={currentCountries} />

       <div>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <button onClick={nextPage}>
          Siguiente
        </button>
      </div>
    </div>
  )
}

export default Home