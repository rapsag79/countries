import styles from "./Aboutme.module.css"
import Francisco from "../../../public/FranciscoC.png"

const Aboutme = () => {
  return (
    <div className={styles.containerAbout}>
{/* <img className={styles.img} src={Francisco} alt="" /> */}
  <h2 className={styles.texto}> About me! </h2>

    <p className={styles.texto}>¡Bienvenidos a la página de exploración de países!

En mi aplicación, estoy emocionados de compartir contigo la belleza y la diversidad de nuestro increíble mundo. ¿Alguna vez has soñado con recorrer los paisajes espectaculares de la Patagonia, sumergirte en la rica historia de las antiguas civilizaciones de Egipto o explorar los vibrantes mercados de Marrakech?

En mi Single Page Application, te invitamos a embarcarte en un viaje virtual para descubrir todo lo que el mundo tiene para ofrecer. Desde información detallada sobre destinos populares hasta joyas ocultas que esperan ser descubiertas, estamos aquí para despertar tu curiosidad y alimentar tu deseo de explorar.

Navega a través de estas tarjetas informativas sobre diferentes países y déjate cautivar por los datos interesantes como la Totalidad de su población, los kilometros que te esperan por conocer. Ya sea que estés planificando tu próximo viaje o simplemente quieras aprender más sobre el mundo que te rodea, estoy aquí para inspirarte y ayudarte a descubrir nuevas emocionantes y aventuras.

      ¡Únete a este viaje de descubrimiento y déjate inspirar para explorar cada rincón de nuestro extraordinario planeta! </p>
    
      <h3 className={styles.nombre}> By Francisco Contreras</h3>

  </div>
)
  
}

export default Aboutme