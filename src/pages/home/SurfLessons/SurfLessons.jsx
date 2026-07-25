import Container from "../../../components/ui/Container/Container";
import SplitSection from "../../../components/layout/SplitSection/SplitSection";
import LessonsImage from "../../../assets/images/index/lessons.webp";

import styles from "./SurfLessons.module.css";


function SurfLessons() {
  return (
    <section className={styles.section}>
      <Container>

        <SplitSection reverse>

          <div className={styles.media}>
            <img 
              src={LessonsImage}
              alt="Surf lessons in Morocco"
            />
          </div>


          <div className={styles.content}>

            <h2 className="section-title">
              Surf Lessons
            </h2>

            <p className={styles.description}>
              Our surf lessons are designed for all levels, from beginners 
              to experienced surfers. Each session includes theory, 
              in-water practice, and personalized corrections.
            </p>


          </div>

        </SplitSection>

      </Container>
    </section>
  );
}

export default SurfLessons;