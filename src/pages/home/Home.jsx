import Header from "../../components/layout/Header/Header";
import Hero from "./Hero/Hero";
import Intro from "./Intro/Intro";
import SurfLessons from "./SurfLessons/SurfLessons";
import UpcomingTrips from "./Upcomingtrips/UpcomingTrips";
import Rentals from "./Rentals/Rentals"; 
import Footer from "../../components/layout/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <Hero />   
      <Intro />
      <UpcomingTrips />
      <SurfLessons />
      <Rentals />
      <Footer />
    </>
  );
}

export default Home;