import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import Hero from "./hero/Hero"
import UpcomingTrips from "./upcomingtrips/UpcomingTrips";
import Included from "./included/Included";
import Accommodation from "./accommodation/Accommodation";
import SurfSpots from "./surfspots/SurfSpots";
import Equipment from "./equipment/Equipment";
import Studio from "./studio/Studio";
import Faq from "./faq/Faq";
import Cta from "./cta/Cta";

function SurfTrips() {
  return (
    <>
      <Header />
      <Hero />
      <UpcomingTrips />
      <Included />
      <Accommodation />
      <SurfSpots />
      <Equipment />
      <Studio />
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}

export default SurfTrips;