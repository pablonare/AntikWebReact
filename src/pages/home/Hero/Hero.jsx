import styles from "./Hero.module.css";
import heroImage from "../../../assets/images/index/hero.webp";
import Section from "../../../components/layout/Section/Section";

function Hero() {
  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
    </section>
  );
}

export default Hero;