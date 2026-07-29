import Container from "../../../components/ui/Container/Container";
import styles from "./Content.module.css";

import AtlantikImage1 from "../../../assets/images/events/atlantik/atlantik-1.JPG";
import AtlantikImage2 from "../../../assets/images/events/atlantik/atlantik-2.JPG";
import AtlantikImage3 from "../../../assets/images/events/atlantik/atlantik-3.JPG";

function Content() {
  return (
    <Container> 
        
      <div className={styles.content}>
        <p>
          El pasado invierno, los shapers Peta Surfboards, Longwinter y Adrokultura 
          se reunieron en Assilah, el pueblo donde nació y sigue creciendo nuestro 
          proyecto Antik Surf Club. Una localidad costera reconocida por su esencia 
          artística, su tradición pesquera y su profunda conexión con el océano Atlántico.
        </p>
      </div>

      <div className={styles.media}>
        <img src={AtlantikImage3} alt="Imagen de shaper reunidos"/>
      </div>

      <div className={styles.content}>
        <p>
          Entre las calles de una medina llena de historia y las sesiones de surf, 
          compartimos olas con el quiver de Antik, además de ideas, conversaciones y 
          una misma pasión por el diseño y la artesanía. Más allá del surf, este 
          encuentro fue una oportunidad para intercambiar conocimientos, inspirarnos 
          mutuamente y disfrutar del simple hecho de compartir tiempo entre amigos,
          unidos por una misma forma de entender el surf. 
        </p>
      </div>

      <div className={styles.gallery}>
        <img src={AtlantikImage2} alt="Imagen de shaper reunidos"/>
        <img src={AtlantikImage1} alt="Imagen de shaper reunidos"/>
      </div>

      <div className={styles.content}>
        <p>
          ANTLANTIK es un retrato de la amistad, la creatividad, la artesanía y el mar.
          Un viaje que pone en valor el trabajo hecho con las manos, el tiempo que 
          requiere cada tabla y las personas que mantienen viva una manera auténtica
          de hacer las cosas.
        </p>
      </div>

      <div className={styles.final}> 
        <p>   
          Y una última reflexión:
          Lo que se hace a mano no se rebaja. Lo que se hace con alma no se liquida. 
          Lo que sostiene la cultura del surf no debería venderse a mitad de precio. 
          Porque Antik también es cultura, respeto y compromiso con quienes siguen
          creyendo que el surf debe permanecer en manos de surfistas.
        </p> 
      </div>
      
    </Container>
  );
}

export default Content;