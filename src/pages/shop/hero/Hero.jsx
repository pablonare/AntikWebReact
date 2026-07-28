import styles from './Hero.module.css';
import heroImage from '../../../assets/images/index/rentals.webp';

function Hero() {
  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
      <div className={styles.content}>
        <h1>Shop</h1>
        <p>Coming Soon</p>
      </div>
    </section>
  );
}

export default Hero;