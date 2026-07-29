import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import Hero from "./hero/Hero"
import UpcomingTrips from "./upcomingtrips/UpcomingTrips";
import Included from "./included/Included";
import Accommodation from "./accommodation/Accommodation";
import SurfSpots from "./surfspots/SurfSpots";
import Equipment from "./equipment/Equipment";
import Studio from "./studio/Studio";
import Discover from "./discover/Discover";
import Faq from "./faq/Faq";
import Cta from "./cta/Cta";
import { Helmet } from "react-helmet-async";

function SurfTrips() {
  return (
    <>
      <Helmet>
        <title>Surf Trips in Asilah, Morocco | Antik Surf Club</title>
        <meta
          name="description"
          content="Surf trips in Asilah, Morocco with small groups, local guides, accommodation, surf lessons, cultural experiences and direct booking via Antik Surf Club."
        />
        <link rel="canonical" href="https://antiksurf.com/surftrips" />
      </Helmet>

      <Header />
      <Hero />
      <UpcomingTrips />
      <Included />
      <Accommodation />
      <SurfSpots />
      <Equipment />
      <Studio />
      <Discover/>
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}

export default SurfTrips;