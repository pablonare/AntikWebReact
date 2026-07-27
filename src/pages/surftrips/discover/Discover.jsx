import Container from "../../../components/ui/Container/Container";
import Section from "../../../components/layout/Section/Section";
import SplitSection from "../../../components/layout/SplitSection/SplitSection";

import discoverImage from "../../../assets/images/surftrips/discover-asilah/discover-asilah.webp";

import styles from "./Discover.module.css";

function Discover() {
  return (
    <Section>
      <Container>

        <SplitSection reverse={false}>

          <div className={styles.media}>
            <img
              className={styles.image}
              src={discoverImage}
              alt="Textures and architecture in Asilah"
            />
          </div>

          <div className={styles.content}>

            <h2 className="section-title">
              Discover Asilah
            </h2>

            <p className="section-subtitle">
              A quiet Atlantic town with art, flavor and character. Asilah is
              a small fishing village 45 km from Tangier, known for its white
              medina, murals, fresh fish and calm rhythm. It is the kind of
              place that makes the whole surf trip feel more complete.
            </p>

          </div>

        </SplitSection>

      </Container>
    </Section>
  );
}

export default Discover;
