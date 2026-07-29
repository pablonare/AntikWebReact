import { Navigate, Routes, Route } from "react-router-dom";

import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/typography.css";
import "./styles/globals.css";
import "./styles/utilities.css";
import "./styles/patterns.css";

import Home from "./pages/home/Home";
import SurfTrips from "./pages/surftrips/SurfTrips";
import Shop from "./pages/shop/Shop";
import Events from "./pages/events/Events";

import WhatsAppButton from "./components/ui/WhatsAppButton/WhatsAppButton";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/surftrips" element={<SurfTrips />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/events" element={<Events />} />
        <Route path="/AntikWebReact" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <WhatsAppButton />
    </>
  );
}

export default App;