import { User, Phone, MapPin, AlertTriangle, Shield, Trash2, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-100">
      {/* 🌐 Navbar */}
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
      {/* 🌟 Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-16 md:py-24 relative">
        <h2 className="text-5xl md:text-6xl font-extrabold text-emerald-800 leading-tight drop-shadow-sm">
          Disaster Management <span className="text-emerald-600">System</span>
        </h2>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
          Stay informed, stay safe. Get <span className="text-emerald-700 font-semibold">real-time alerts</span>, locate{" "}
          <span className="text-emerald-700 font-semibold">safe zones</span>, and unite with{" "}
          <span className="text-emerald-700 font-semibold">SAHAYAK</span>.
        </p>

        {/* 🚨 Emergency Number */}
        <div className="mt-6 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold text-lg px-8 py-4 cursor-pointer transition rounded-2xl shadow-lg animate-bounce">
          📞 Emergency Helpline: <span className="font-extrabold">108 / 112</span>
        </div>

        {/* 🚀 Quick Action Buttons */}
        
       <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/alerts">
            <button className="px-6 py-3 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-600 font-semibold shadow-md hover:bg-emerald-500 hover:text-white hover:shadow-lg transition duration-200">
              View Alerts
            </button>
          </Link>
          <Link to="/safezones">
            <button className="px-6 py-3 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-600 font-semibold shadow-md hover:bg-emerald-500 hover:text-white hover:shadow-lg transition duration-200">
              Find Safe Zones
            </button>
          </Link>
          <Link to="/sahayak">
            <button className="px-6 py-3 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-600 font-semibold shadow-md hover:bg-emerald-500 hover:text-white  hover:shadow-lg transition duration-200">
              Join as SAHAYAK
            </button>
          </Link>
          <Link to="/neighbors">
            <button className="px-6 py-3 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-600 font-semibold shadow-md hover:bg-emerald-500 hover:text-white hover:shadow-lg transition duration-200">
              Know Your Neighbor
            </button>
          </Link>
       </div>

      </section>

      {/* 💡 Features Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 via-white to-emerald-100">
        <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <Shield className="w-12 h-12 text-emerald-600 mx-auto mb-4" />,
              title: "Real-time Alerts",
              desc: "Instant notifications about disasters near you.",
            },
            {
              icon: <MapPin className="w-12 h-12 text-emerald-600 mx-auto mb-4" />,
              title: "Safe Zones",
              desc: "Locate nearby shelters and relief centers easily.",
            },
            {
              icon: <Handshake className="w-12 h-12 text-emerald-600 mx-auto mb-4" />,
              title: "SAHAYAK",
              desc: "Register as a volunteer & help on-ground.",
            },
            {
              icon: <Users className="w-12 h-12 text-emerald-600 mx-auto mb-4" />,
              title: "Know Your Neighbor",
              desc: "Stay connected & alert your nearby community.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 text-center transition transform hover:scale-105"
            >
              {f.icon}
              <h3 className="text-lg font-semibold text-gray-800">{f.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 📜 Guidelines Section */}
      <section className="py-16 bg-white border-t border-emerald-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-emerald-700 text-center mb-10">
            ✅ Comprehensive Disaster Safety Guidelines
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            {/* 🌀 Before Disaster */}
            <div className="bg-emerald-50 p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-emerald-700 mb-4">🌀 Before Disaster</h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li>📢 Stay updated with local weather forecasts & alerts.</li>
                <li>📍 Identify the nearest safe zones & evacuation routes.</li>
                <li>🧰 Prepare an emergency kit: torch, food, water, first-aid, medicines, and cash.</li>
                <li>📞 Save emergency helpline numbers (108 / 112) & local contacts.</li>
                <li>🏠 Secure your home: fix weak walls, windows, and electrical hazards.</li>
                <li>👨‍👩‍👧‍👦 Discuss a family emergency plan & meeting point.</li>
                <li>🔋 Keep power banks charged for phones & radios.</li>
              </ul>
            </div>

            {/* ⏳ During Disaster */}
            <div className="bg-red-50 p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-red-600 mb-4">⏳ During Disaster</h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li>🏃 Follow official evacuation orders without delay.</li>
                <li>🚫 Avoid rumors; rely only on verified alerts.</li>
                <li>🧍 Stay calm & avoid panicking — guide children & elderly.</li>
                <li>🏠 If indoors: stay away from windows & heavy furniture.</li>
                <li>🌳 If outdoors: move to an open area, avoid trees & electric poles.</li>
                <li>🚗 Don’t use flooded or damaged roads.</li>
                <li>📱 Use phone only for emergency calls to avoid network overload.</li>
              </ul>
            </div>

            {/* 🛠 After Disaster */}
            <div className="bg-yellow-50 p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-yellow-600 mb-4">🛠 After Disaster</h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li>✅ Check yourself & family for injuries — give first-aid if needed.</li>
                <li>🤝 Help neighbors, especially elderly & disabled persons.</li>
                <li>📞 Contact SAHAYAK volunteers or relief authorities if trapped.</li>
                <li>💧 Use safe & clean water; avoid contaminated sources.</li>
                <li>⚡ Do not touch broken wires or electrical equipment in water.</li>
                <li>🏚 Stay away from damaged buildings until inspected.</li>
                <li>📋 Register at local relief camps for aid & missing person reports.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* 🌍 Footer */}
      <footer className="bg-emerald-700 text-white py-8 mt-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} SAHARA | Disaster Management Project
          </p>
          <nav className="flex gap-4 text-sm">
            <Link to="/alerts" className="hover:text-emerald-200">Alerts</Link>
            <Link to="/safezones" className="hover:text-emerald-200">Safe Zones</Link>
            <Link to="/sahayak" className="hover:text-emerald-200">Sahayak</Link>
            <Link to="/neighbors" className="hover:text-emerald-200">Neighbors</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
