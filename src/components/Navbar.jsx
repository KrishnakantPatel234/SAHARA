import { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-white/30 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-extrabold flex items-center gap-2 text-green-800"
        >
          <Shield className="w-6 h-6 text-green-600" /> SAHARA
        </motion.h1>

        {/* Desktop Nav */}
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-green-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown with Animation */}
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
    </header>
  );
}
