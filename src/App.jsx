import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Alerts from "./pages/Alerts";
import SafeZones from "./pages/SafeZones";
import Sahayak from "./pages/Sahayak";
import Neighbors from "./pages/Neighbors";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/alerts" element={< Alerts />} />
      <Route path="/safezones" element={< SafeZones />} />
      <Route path="/sahayak" element={< Sahayak />} />
      <Route path="/neighbors" element={< Neighbors />} />
    </Routes>
  );
}
