import Container from "../../../components/ui/Container/Container";
import styles from "./Hero.module.css";

import AtlantikCanos from "../../../assets/images/events/atlantik/atlantik-canos.webp";
import AtlantikAsilah from "../../../assets/images/events/atlantik/atlantik-asilah.webp";
import AtlantikHendaya from "../../../assets/images/events/atlantik/atlantik-hendaya.webp";

function Hero() {
  return (
    <Container>
      <section className={styles.hero}>
          
        <div className={styles.title}>
          <h1 className="section-title">ATLANTIK</h1>
          <h2>Un pequeño film rodado en asilah</h2>
        </div>
          
        <div className={styles.gallery}>
          <img src={AtlantikAsilah} alt="" />
          <img src={AtlantikCanos} alt="" />
          <img src={AtlantikHendaya} alt="" />
        </div>
          
      </section>
    </Container>
  );
}

export default Hero;