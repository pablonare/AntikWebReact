import Header from "./components/layout/Header/Header";
import Hero from "./pages/Home/Hero/Hero";
import Intro from "./pages/Home/Intro/Intro";
import SurfLessons from "./pages/home/SurfLessons/SurfLessons";
import UpcomingTrips from "./pages/home/Upcomingtrips/UpcomingTrips";
import "./styles/patterns.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <UpcomingTrips />
      <SurfLessons />
    </>
  );
}

export default App;