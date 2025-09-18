import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { User, Phone, MapPin, AlertTriangle, Menu, Shield, Trash2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";

export default function Neighbors() {
  const [neighbors, setNeighbors] = useState([]);
  const [formData, setFormData] = useState({ name: "", phone: "", address: "" });
  const [showForm, setShowForm] = useState(false);

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
    setShowForm(false); // close modal after adding
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

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen relative">
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
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="md:hidden bg-white/95 backdrop-blur-md shadow-md overflow-hidden"
                >
                  <nav className="flex flex-col items-center gap-4 py-4 text-lg font-medium text-gray-700">
                    {["Home", "Alerts", "Safe Zones", "Neighbors"].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <Link
                          to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                          className="hover:text-green-700 transition"
                          onClick={() => setIsOpen(false)} // close after click
                        >
                          {item}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>

          {/* ✅ Open Form Modal */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="hidden md:inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md transition"
            onClick={() => setShowForm(true)}
          >
            ➕ Add Neighbor
          </motion.button>
        </div>
      </header>

      {/* ✅ Hero Section */}
      <section className="mt-20 bg-gradient-to-r from-green-50 to-green-100 py-12 text-center">
        <h2 className="text-4xl font-extrabold text-green-800">👥 Know Your Neighbor</h2>
        <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
          In times of disaster, your neighbors are your first line of support.
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
      </section>

      {/* ✅ Neighbor List */}
      <main className="flex-1 px-6 py-10 bg-white">
        <section className="max-w-4xl mx-auto mt-10 grid gap-6 md:grid-cols-2">
          {neighbors.map((n) => (
            <motion.div
              key={n.id}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-5 rounded-xl shadow-md border flex flex-col gap-3"
            >
              <h4 className="text-xl font-bold text-green-700 flex items-center gap-2">
                <User className="w-5 h-5 text-green-600" /> {n.name}
              </h4>
              <p className="flex items-center gap-2 text-gray-700">
                <Phone className="w-4 h-4 text-green-500" /> {n.phone}
              </p>
              {n.address && (
                <p className="flex items-center gap-2 text-gray-700">
                  <MapPin className="w-4 h-4 text-green-500" /> {n.address}
                </p>
              )}
              <div className="flex gap-3 mt-2">
                <button
                  onClick={() => callNeighbor(n.phone)}
                  className="px-3 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition"
                >
                  📞 Call
                </button>
                <button
                  onClick={() => alertNeighbor(n.name)}
                  className="px-3 py-2 bg-yellow-500 text-white rounded-lg text-sm hover:bg-yellow-600 transition"
                >
                  🚨 Alert
                </button>
                <button
                  onClick={() => removeNeighbor(n.id)}
                  className="px-3 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition flex items-center gap-1"
                >
                  <Trash2 className="w-4 h-4" /> Remove
                </button>
              </div>
            </motion.div>
          ))}

          {neighbors.length === 0 && (
            <p className="text-center text-gray-500 col-span-2">
              No neighbors added yet. Click ➕ Add Neighbor to start.
            </p>
          )}
        </section>
      </main>

      {/* ✅ Modal Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-600 transition"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="text-2xl font-bold text-green-700 text-center mb-4">
                ➕ Add Your Neighbor
              </h3>

              <form onSubmit={addNeighbor} className="grid gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Neighbor's Name"
                  className="p-3 border rounded-lg focus:ring-2 focus:ring-green-400"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="p-3 border rounded-lg focus:ring-2 focus:ring-green-400"
                />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address (optional)"
                  className="p-3 border rounded-lg focus:ring-2 focus:ring-green-400"
                />

                <div className="flex gap-3 mt-2">
                  <button
                    type="submit"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-3 rounded-lg font-semibold transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ Footer */}
      < Footer />
    </div>
  );
}
