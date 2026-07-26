import { Routes, Route } from "react-router-dom";

import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/typography.css";
import "./styles/globals.css";
import "./styles/utilities.css";
import "./styles/patterns.css";

import Home from "./pages/home/Home";
import SurfTrips from "./pages/surftrips/SurfTrips";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/surftrips" element={<SurfTrips />} />
    </Routes>
  );
}

export default App;