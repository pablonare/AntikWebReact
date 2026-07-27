import Container from "../../../components/ui/Container/Container";
import SplitSection from "../../../components/layout/SplitSection/SplitSection";
import Section from "../../../components/layout/Section/Section";

import surfSpotsImage from "../../../assets/images/surftrips/surf spots/surf-spots.webp";

import styles from "./SurfSpots.module.css";

function SurfSpots() {
  return (
    <Section>
      <Container>
        <SplitSection reverse={false}>

          <div className={styles.content}>
            <header className="section-title">
              <h2>Surf Spots</h2>
            </header>

            <p className="section-subtitle">
              Surf where conditions are best each day. Antik chooses the beach
              or point with the best sea and weather conditions every day so
              the trip adapts to the ocean, not the other way around.
            </p>
          </div>

          <div className={styles.media}>
            <img
              className={styles.image}
              src={surfSpotsImage}
              alt="Traditional house Dhar Ambrossia in Asilah Medina"
            />
          </div>
          
        </SplitSection>
      </Container>
    </Section>
  );
}

export default SurfSpots;