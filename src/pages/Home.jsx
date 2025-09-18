import {
  Shield,
  MapPin,
  Handshake,
  Users,
  Phone,
  AlertTriangle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-100">
      {/* 🌐 Navbar */}
      <Navbar />
      {/* 🌟 Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-16 md:py-24 relative">
        <h2 className="text-5xl md:text-6xl font-extrabold text-emerald-800 leading-tight drop-shadow-sm">
          Disaster Management <span className="text-emerald-600">System</span>
        </h2>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
          Stay informed, stay safe. Get{" "}
          <span className="text-emerald-700 font-semibold">
            real-time alerts
          </span>
          , locate{" "}
          <span className="text-emerald-700 font-semibold">safe zones</span>,
          and unite with{" "}
          <span className="text-emerald-700 font-semibold">SAHAYAK</span>.
        </p>

        {/* 🚨 Emergency Number */}
        <div className="mt-6 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold text-lg px-8 py-4 cursor-pointer transition rounded-2xl shadow-lg animate-bounce">
          📞 Emergency Helpline:{" "}
          <span className="font-extrabold">108 / 112</span>
        </div>

        {/* 🚀 Quick Action Buttons */}

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/alerts">
            <button className="px-6 py-3 cursor-pointer rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-600 font-semibold shadow-md hover:bg-emerald-500 hover:text-white hover:shadow-lg transition duration-200">
              View Alerts
            </button>
          </Link>
          <Link to="/safezones">
            <button className="px-6 py-3  cursor-pointer rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-600 font-semibold shadow-md hover:bg-emerald-500 hover:text-white hover:shadow-lg transition duration-200">
              Find Safe Zones
            </button>
          </Link>
          <Link to="/sahayak">
            <button className="px-6 py-3 cursor-pointer  rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-600 font-semibold shadow-md hover:bg-emerald-500 hover:text-white  hover:shadow-lg transition duration-200">
              Join as SAHAYAK
            </button>
          </Link>
          <Link to="/neighbors">
            <button className="px-6 py-3 cursor-pointer  rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-600 font-semibold shadow-md hover:bg-emerald-500 hover:text-white hover:shadow-lg transition duration-200">
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
              icon: (
                <Shield className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              ),
              title: "Real-time Alerts",
              desc: "Instant notifications about disasters near you.",
            },
            {
              icon: (
                <MapPin className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              ),
              title: "Safe Zones",
              desc: "Locate nearby shelters and relief centers easily.",
            },
            {
              icon: (
                <Handshake className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              ),
              title: "SAHAYAK",
              desc: "Register as a volunteer & help on-ground.",
            },
            {
              icon: (
                <Users className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              ),
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

      <div className="bg-yellow-50">
        <section className="py-16 bg-yellow-50">
          <div className="container mx-auto px-4">
            {/* Heading */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                🚨 Emergency Response
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                In times of crisis, quick action can save lives. Use these tools
                to get immediate help or alert your community.
              </p>
            </div>

            {/* Action Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Emergency Alert */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6 mx-auto">
                  <AlertTriangle className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">
                  Emergency Alert
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  Send an immediate emergency alert to all registered users in
                  your area. Use for life-threatening situations.
                </p>
                <button className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg px-6 py-3 transition-all shadow-md hover:shadow-lg">
                  <Phone className="h-5 w-5" /> Alert All Users
                </button>
              </div>

              {/* Alert Neighbors */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-6 mx-auto">
                  <Users className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">
                  Alert Your Neighbors
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  Notify nearby neighbors by sharing your location so that can
                  provide immediate assistance while waiting for official help.
                </p>
                <button className="w-full flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg px-6 py-3 transition-all shadow-md hover:shadow-lg">
                  <MapPin className="h-5 w-5" /> Alert Neighbors
                </button>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="mt-12 bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h4 className="font-semibold text-blue-600 mb-4 text-center text-lg">
                ⚡ Quick Emergency Tips
              </h4>
              <div className="grid sm:grid-cols-2 gap-6 text-sm text-gray-700 max-w-3xl mx-auto px-4">
                <div>
                  <strong className="text-gray-900">Before alerting:</strong>{" "}
                  Ensure you're in actual danger
                </div>
                <div>
                  <strong className="text-gray-900">Stay calm:</strong> Clear
                  communication saves time
                </div>
                <div>
                  <strong className="text-gray-900">Share location:</strong>{" "}
                  Enable GPS for accurate help
                </div>
                <div>
                  <strong className="text-gray-900">Follow up:</strong> Update
                  status when safe
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 📜 Guidelines Section */}

        <section className="py-16 bg-yellow-50 border-t border-emerald-100">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-emerald-700 text-center mb-10">
              ✅ Easy Safety Tips for Disasters
            </h2>

            <div className="grid gap-10 md:grid-cols-3">
              {/* 🌀 Stay Ready (Before Disaster) */}
              <div className="bg-emerald-50 p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold text-emerald-700 mb-4">
                  🌀 Stay Ready
                </h3>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li>📢 Keep checking weather updates and alerts.</li>
                  <li>📍 Know nearby safe places and exit routes.</li>
                  <li>
                    🧰 Pack an emergency bag: torch, food, water, first-aid,
                    medicines, cash.
                  </li>
                  <li>
                    📞 Save helpline numbers (108 / 112) and local contacts.
                  </li>
                  <li>
                    🏠 Fix weak walls, windows, and electric points in your
                    home.
                  </li>
                  <li>👨‍👩‍👧‍👦 Plan with family where to meet in case of trouble.</li>
                  <li>🔋 Keep power banks charged for phones and radios.</li>
                </ul>
              </div>

              {/* ⏳ Stay Safe (During Disaster) */}
              <div className="bg-red-50 p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold text-red-600 mb-4">
                  ⏳ Stay Safe
                </h3>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li>🏃 Follow evacuation orders quickly.</li>
                  <li>🚫 Don’t believe rumors, trust only official updates.</li>
                  <li>🧍 Stay calm, guide children and elders.</li>
                  <li>🏠 Indoors: move away from windows and heavy items.</li>
                  <li>
                    🌳 Outdoors: go to an open place, avoid trees and poles.
                  </li>
                  <li>🚗 Don’t use flooded or broken roads.</li>
                  <li>📱 Use your phone only for urgent calls.</li>
                </ul>
              </div>

              {/* 🛠 Stay Strong (After Disaster) */}
              <div className="bg-yellow-200 p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold text-yellow-600 mb-4">
                  🛠 Stay Strong
                </h3>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li>✅ Check injuries and give first-aid if needed.</li>
                  <li>🤝 Help neighbors, especially elders and disabled.</li>
                  <li>
                    📞 Call SAHAYAK volunteers or rescue teams if trapped.
                  </li>
                  <li>💧 Drink only clean water, avoid dirty sources.</li>
                  <li>⚡ Don’t touch wires or appliances in water.</li>
                  <li>🏚 Stay away from weak or broken buildings.</li>
                  <li>
                    📋 Register at relief camps for help and missing reports.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 🌍 Footer */}
      < Footer />
    </div>
  );
}
