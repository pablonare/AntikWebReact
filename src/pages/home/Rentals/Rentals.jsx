import Container from "../../../components/ui/Container/Container";
import SplitSection from "../../../components/layout/SplitSection/SplitSection";
import RentalsImage from "../../../assets/images/index/rentals.webp";
import RentalPricesImage from "../../../assets/images/index/rentals-prices.webp";

import styles from "./Rentals.module.css";

function Rentals() {
  return (
    <section className={styles.section}>
      <Container>

        <SplitSection reverse={false}>

          <div className={styles.media}>
            <img 
              src={RentalsImage}
              alt="Surfboard rentals in Morocco"
            />
          </div>

          <div className={styles.content}>

            <h2 className="section-title">
              Surfboard Rentals
            </h2>

            <p className="section-subtitle">
              We offer a wide range of surfboards for rent, suitable for all skill levels. 
              Our rental service includes high-quality boards, wetsuits, and accessories 
              to ensure you have the best surfing experience.
            </p>
              
            <img
                className={styles.contentImage}
                src={RentalPricesImage}
                alt="Surfboard rentals"
            />

          </div>

        </SplitSection>

      </Container>
    </section>
  );
}

export default Rentals;