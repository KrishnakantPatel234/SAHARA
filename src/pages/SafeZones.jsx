import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Card, CardContent } from "../components/ui/Card";
import { MapPin, Users, Shield, Home, CheckCircle, AlertTriangle, XCircle } from "lucide-react";
import { Link } from "react-router-dom";
import L from "leaflet";
import { useState } from "react";
import "leaflet/dist/leaflet.css";

// Fix Leaflet marker issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// ✅ Safe Zones Data
const safeZones = [
  { id: 1, name: "Lal Parade Ground Shelter", location: "Bhopal", coords: [23.2599, 77.4126], capacity: "800", status: "Available" },
  { id: 2, name: "AIIMS Bhopal Relief Center", location: "Bhopal", coords: [23.2146, 77.431], capacity: "600", status: "Almost Full" },
  { id: 3, name: "BHEL Township Community Hall", location: "Bhopal", coords: [23.2733, 77.4344], capacity: "400", status: "Available" },
  { id: 4, name: "Govt. Polytechnic College Ground", location: "Bhopal", coords: [23.247, 77.5012], capacity: "500", status: "Full" },
  { id: 5, name: "Ashoka Garden School Shelter", location: "Bhopal", coords: [23.2504, 77.4446], capacity: "300", status: "Available" },
  { id: 6, name: "Habibganj Stadium Safe Zone", location: "Bhopal", coords: [23.219, 77.453], capacity: "700", status: "Almost Full" },
  { id: 7, name: "Kolar Road Community Center", location: "Bhopal", coords: [23.1859, 77.3946], capacity: "350", status: "Available" },
];

// ✅ Status Badge Styling
const getStatusClass = (status) => {
  switch (status) {
    case "Available":
      return "bg-green-100 text-green-700 border-green-300";
    case "Almost Full":
      return "bg-yellow-100 text-yellow-700 border-yellow-300";
    case "Full":
      return "bg-red-100 text-red-700 border-red-300";
    default:
      return "bg-gray-100 text-gray-600 border-gray-300";
  }
};

// ✅ Status Icons
const getStatusIcon = (status) => {
  switch (status) {
    case "Available":
      return <CheckCircle className="w-4 h-4 text-green-600" />;
    case "Almost Full":
      return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
    case "Full":
      return <XCircle className="w-4 h-4 text-red-600" />;
    default:
      return null;
  }
};

export default function SafeZones() {
  const [filter, setFilter] = useState("All");

  // Filtered Zones
  const filteredZones = filter === "All" ? safeZones : safeZones.filter((z) => z.status === filter);

  // Analytics
  const total = safeZones.length;
  const available = safeZones.filter((z) => z.status === "Available").length;
  const almostFull = safeZones.filter((z) => z.status === "Almost Full").length;
  const full = safeZones.filter((z) => z.status === "Full").length;

  return (
    <div className="flex flex-col min-h-screen">
      {/* ✅ Navbar */}
      <header className="fixed top-0 left-0 w-full z-40 bg-white/30 backdrop-blur-md shadow-sm">
              <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl font-extrabold flex items-center gap-2 text-green-800"
                >
                  <Shield className="w-6 h-6 text-green-600" /> SAHARA
                </motion.h1>
      
                <nav className="hidden md:flex gap-8 text-lg font-medium text-gray-700">
                  {["Home", "Alerts", "Safe Zones", "Neighbors"].map((item, idx) => (
                    <motion.div key={idx} whileHover={{ scale: 1.1 }} className="relative group">
                      <Link
                        to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                        className="hover:text-green-700 transition"
                      >
                        {item}
                      </Link>
                      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-600 group-hover:w-full transition-all"></span>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </header>

      {/* ✅ Content */}
      <main className="flex-1 p-6 max-w-7xl mx-auto space-y-10 pt-24">
        {/* Page Header */}
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-bold text-green-700">🛡 Nearest Safe Zones</h2>
          <p className="text-gray-600 text-lg">
            Shelters and relief centers available during emergencies.  
            Use filters below or click markers on the map for details.
          </p>
        </div>

        {/* Analytics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-green-100 rounded-xl shadow">
            <p className="text-2xl font-bold">{total}</p>
            <p className="text-gray-600">Total Zones</p>
          </div>
          <div className="p-4 bg-green-200 rounded-xl shadow">
            <p className="text-2xl font-bold">{available}</p>
            <p className="text-gray-600">Available</p>
          </div>
          <div className="p-4 bg-yellow-200 rounded-xl shadow">
            <p className="text-2xl font-bold">{almostFull}</p>
            <p className="text-gray-600">Almost Full</p>
          </div>
          <div className="p-4 bg-red-200 rounded-xl shadow">
            <p className="text-2xl font-bold">{full}</p>
            <p className="text-gray-600">Full</p>
          </div>
        </div>

        {/* Filter */}
        <div className="flex justify-center">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-6 py-3 rounded-lg border shadow bg-white text-lg font-medium"
          >
            <option value="All">All Zones</option>
            <option value="Available">Available ✅</option>
            <option value="Almost Full">Almost Full ⚠️</option>
            <option value="Full">Full ❌</option>
          </select>
        </div>

        {/* Map Section */}
        <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-xl border">
          <MapContainer center={[23.2599, 77.4126]} zoom={12} style={{ height: "100%", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {filteredZones.map((zone) => (
              <Marker key={zone.id} position={zone.coords}>
                <Popup>
                  <div className="space-y-1">
                    <strong>{zone.name}</strong>
                    <br />📍 {zone.location}
                    <br />👥 Capacity: {zone.capacity}
                    <br />✅ Status: {zone.status}
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Safe Zones Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredZones.map((zone) => (
            <Card key={zone.id} className="shadow-md hover:shadow-xl transition rounded-xl border overflow-hidden">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-gray-800">{zone.name}</h3>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" /> {zone.location}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="w-4 h-4" /> Capacity: {zone.capacity}
                </div>
                <span
                  className={`inline-flex items-center gap-1 px-3 py-1 text-sm font-medium rounded-full border ${getStatusClass(
                    zone.status
                  )}`}
                >
                  {getStatusIcon(zone.status)} {zone.status}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      {/* ✅ Footer */}
      <footer className="bg-green-700 text-white py-4 mt-8">
        <div className="max-w-6xl mx-auto px-6 flex justify-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} SAHARA Disaster Management</p>
        </div>
      </footer>
    </div>
  );
}
