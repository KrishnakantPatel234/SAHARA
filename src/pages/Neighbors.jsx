import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, User, Phone, MapPin, Bell, AlertTriangle, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function Neighbors() {
  const [neighbors, setNeighbors] = useState([]);
  const [formData, setFormData] = useState({ name: "", phone: "", address: "" });

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("neighbors");
    if (saved) setNeighbors(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("neighbors", JSON.stringify(neighbors));
  }, [neighbors]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addNeighbor = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("⚠️ Please enter at least Name and Phone.");
      return;
    }
    setNeighbors([...neighbors, { ...formData, id: Date.now() }]);
    setFormData({ name: "", phone: "", address: "" });
  };

  const removeNeighbor = (id) => {
    setNeighbors(neighbors.filter((n) => n.id !== id));
  };

  const callNeighbor = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  const alertNeighbor = (name) => {
    alert(`🚨 Emergency Alert sent to ${name}!`);
  };

  const alertAllNeighbors = () => {
    if (neighbors.length === 0) {
      alert("⚠️ No neighbors to alert.");
      return;
    }
    if (window.confirm("🚨 Send emergency alert to ALL neighbors?")) {
      neighbors.forEach((n) => console.log(`Alert sent to ${n.name} (${n.phone})`));
      alert(`✅ Alert sent to all ${neighbors.length} neighbors!`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* ✅ Navbar (same as Home with animation) */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* ✅ Animated Logo */}
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-extrabold flex items-center gap-2 text-green-800"
          >
            <Shield className="w-6 h-6 text-green-600" /> SAHARA
          </motion.h1>

          {/* ✅ Navbar Links */}
          <nav className="hidden md:flex gap-8 text-lg font-medium text-gray-700">
            {["Home", "Alerts", "Safe Zones", "Neighbors"].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1 }}
                className="relative group"
              >
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

          {/* ✅ CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="hidden md:inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md transition"
            onClick={() => {
              document.getElementById("add-form")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            ➕ Add Neighbor
          </motion.button>
        </div>
      </header>

      {/* ✅ Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-gradient-to-r mt-5 from-green-50 to-green-100 py-12 text-center"
      >
        <h2 className="text-4xl font-extrabold text-green-800">👥 Know Your Neighbor</h2>
        <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
          In times of disaster, your neighbors are your first line of support. Add and connect with them for quick help and alerts.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={alertAllNeighbors}
          className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 mx-auto shadow-md"
        >
          <AlertTriangle className="w-5 h-5" /> Alert ALL Neighbors
        </motion.button>
      </motion.section>

      {/* ✅ Form Section */}
      <main className="flex-1 px-6 py-10 bg-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-green-50 p-6 rounded-xl shadow-lg space-y-6"
        >
          <h3 className="text-2xl font-bold text-green-700 text-center">➕ Add Your Neighbor</h3>
          <form onSubmit={addNeighbor} className="grid gap-4 md:grid-cols-2">
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Neighbor's Name" className="p-3 border rounded-lg focus:ring-2 focus:ring-green-400" />
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="p-3 border rounded-lg focus:ring-2 focus:ring-green-400" />
            <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address (optional)" className="md:col-span-2 p-3 border rounded-lg focus:ring-2 focus:ring-green-400" />
            <button
              type="submit"
              className="md:col-span-2 flex items-center justify-center gap-2 
                        bg-gradient-to-r from-green-600 to-emerald-600 
                        hover:from-green-700 hover:to-emerald-700 
                        text-white px-6 py-3 rounded-xl font-semibold shadow-lg 
                        transition-all duration-300 transform hover:scale-105 hover:shadow-xl 
                        active:scale-95"
            >
              <span className="text-lg">➕</span>
              Add Neighbor
            </button>

          </form>
        </motion.div>

        {/* ✅ Neighbor List */}
        <motion.section
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="pt-28 bg-gradient-to-r from-green-50 to-green-100 pb-16 text-center"
>
  <h2 className="text-4xl font-extrabold text-green-800">
    👥 Know Your Neighbor
  </h2>
  <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
    Disasters strike without warning. Build your safety circle by adding trusted neighbors here.  
    In critical moments, one tap can alert them all!
  </p>

  {/* ✅ Quick Stats */}
  <div className="mt-8 grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
    <motion.div whileHover={{ scale: 1.05 }} className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-bold text-green-700">🏠 Trusted Neighbors</h3>
      <p className="text-gray-600 mt-2">Keep a list of nearby helpers you can rely on instantly.</p>
    </motion.div>
    <motion.div whileHover={{ scale: 1.05 }} className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-bold text-green-700">🚨 One-Click Alerts</h3>
      <p className="text-gray-600 mt-2">Send emergency alerts to individuals or all neighbors at once.</p>
    </motion.div>
    <motion.div whileHover={{ scale: 1.05 }} className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-bold text-green-700">📊 Safety Network</h3>
      <p className="text-gray-600 mt-2">Build a connected safety net before disasters even occur.</p>
    </motion.div>
  </div>

  {/* ✅ Alert Button */}
  <motion.button
    whileHover={{ scale: 1.05 }}
    animate={{ scale: [1, 1.1, 1] }}
    transition={{ repeat: Infinity, duration: 1.5 }}
    onClick={alertAllNeighbors}
    className="mt-10 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 mx-auto shadow-md"
  >
    <AlertTriangle className="w-5 h-5" /> Alert ALL Neighbors
  </motion.button>
</motion.section>
      </main>

      {/* ✅ Footer */}
      <footer className="bg-green-700 text-white py-6 mt-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Disaster Management Project</p>
          <nav className="flex gap-4 text-sm mt-3 md:mt-0">
            <Link to="/alerts" className="hover:text-green-200">Alerts</Link>
            <Link to="/safezones" className="hover:text-green-200">Safe Zones</Link>
            <Link to="/neighbors" className="hover:text-green-200">Neighbors</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
