import Container from "../../../components/ui/Container/Container";
import styles from "./Hero.module.css";

import AtlantikCover from "../../../assets/images/events/atlantik/coveratlantik.webp";
import AtlantikVideo from "../../../../public/videos/atlantik.webm";

function Hero() {
  return (
    <Container>
      <section className={styles.hero}>
          
        <div className={styles.title}>
          <h1 className="section-title">ATLANTIK</h1>
          <h2>Un pequeño film rodado en asilah</h2>
        </div>

        <video
          src={AtlantikVideo}
          className= {styles.gallery}
          controls
          loop
          playsInline
          poster={AtlantikCover}
        ></video>
        
        
      </section>
    </Container>
  );
}

export default Hero;