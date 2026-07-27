import Container from "../../../components/ui/Container/Container";
import Section from "../../../components/layout/Section/Section";
import SplitSection from "../../../components/layout/SplitSection/SplitSection";

import studioImage from "../../../assets/images/surftrips/classic-studio/classic-studio.webp";

import styles from "./Studio.module.css";

function Studio() {
  return (
    <Section>
      <Container>

        <SplitSection reverse={false}>

          <div className={styles.content}>

            <h2 className="section-title">
              Classic Studio
            </h2>

            <p className="section-subtitle">
              Issam from Classic Studio will join us on this incredible
              experience, capturing the most memorable moments of the trip so
              you come back with photos and videos of your fantastic
              adventure.
            </p>

          </div>

          <div className={styles.media}>
            <img
              className={styles.image}
              src={studioImage}
              alt="Issam from Classic Studio"
            />
          </div>

        </SplitSection>

      </Container>
    </Section>
  );
}

export default Studio;
