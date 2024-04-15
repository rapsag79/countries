import styles from"./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container_foother}>

      <section className={styles.copyrigt}>
      <h2 className={styles.text}>© 2024 Chimino_Servise. Todos los derechos reservados. El contenido de este sitio web, incluyendo pero no limitado a texto, gráficos, logotipos, imágenes y código, está protegido por las leyes de derechos de autor y otras leyes aplicables. Queda prohibida cualquier reproducción, distribución, modificación o uso no autorizado de cualquier parte del contenido sin el permiso previo por escrito de Francisco Contreras .
      </h2>
      </section>
    </div>
  )
}

export default Footer;