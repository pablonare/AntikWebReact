import Header from "./components/layout/Header/Header";
import Hero from "./pages/home/Hero/Hero";
import Intro from "./pages/home/Intro/Intro";
import SurfLessons from "./pages/home/SurfLessons/SurfLessons";
import UpcomingTrips from "./pages/home/Upcomingtrips/UpcomingTrips";
import Rentals from "./pages/home/Rentals/Rentals"; 
import "./styles/patterns.css";
import Footer from "./components/layout/Footer/Footer";

function App() {
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

export default App;