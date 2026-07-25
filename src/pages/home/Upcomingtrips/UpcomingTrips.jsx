import Container from "../../../components/ui/Container/Container";
import SplitSection from "../../../components/layout/SplitSection/SplitSection";
import surftripsImage from "../../../assets/images/common/surftrips.webp";

import trips from "./Trips";
import styles from "./UpcomingTrips.module.css";

function UpcomingTrips() {
  console.log(trips[0]);

  return (
    <section className={styles.section}>
      <Container>
        <SplitSection>
          <div className={styles.media}>
            <img 
              src={surftripsImage} 
              alt="Surf trips in Asilah Morocco" 
            />
          </div>

          <div className={styles.content}>
            <h2 className="section-title">
              Upcoming Surftrips 2026
            </h2>

            <p className="section-subtitle">
              Join our Surf Trips in Asilah, Morocco
            </p>

            <p className={styles.label}>
              Dates
            </p>

            <div className={styles.tripList}>
                {trips.map((trip) => (
                  <p key={trip.id} className={styles.trip}>
                    <span className={styles.date}>
                      {trip.dates}
                    </span>

                    {" | "}

                    {trip.name}

                    {" | "}

                    <span
                      className={`${styles.status} ${
                        trip.status === "Full"
                          ? styles.full
                          : styles.available
                      }`}
                    >
                      {trip.status}
                    </span>
                  </p>
                ))}
              </div>
          </div>
        </SplitSection>
      </Container>
    </section>
  );
}

export default UpcomingTrips;