import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../components/ui/Card";
import {
  User,
  Phone,
  MapPin,
  AlertTriangle,
  Shield,
  Trash2,
  X,
  Search,
  Info,
} from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import Footer from "../components/Footer";

export default function Alerts() {
  // Dummy alert data
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: "Critical",
      message: "Heavy rainfall expected in Bhopal. Stay indoors!",
      time: "2 mins ago",
      color: "border-red-400 bg-red-50",
      icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
    },
    {
      id: 2,
      type: "Warning",
      message: "Flood alert issued near Upper Lake. Avoid low-lying areas.",
      time: "10 mins ago",
      color: "border-yellow-400 bg-yellow-50",
      icon: <AlertTriangle className="w-6 h-6 text-yellow-600" />,
    },
    {
      id: 3,
      type: "Info",
      message: "Relief camp set up at TT Nagar Stadium, Bhopal.",
      time: "30 mins ago",
      color: "border-blue-400 bg-blue-50",
      icon: <Info className="w-6 h-6 text-blue-600" />,
    },
  ]);

  // Search / Filter state
  const [search, setSearch] = useState("");

  // Dummy prediction data
  const predictionData = [
    { day: "Mon", rainfall: 20, floodRisk: 10 },
    { day: "Tue", rainfall: 40, floodRisk: 25 },
    { day: "Wed", rainfall: 60, floodRisk: 50 },
    { day: "Thu", rainfall: 80, floodRisk: 70 },
    { day: "Fri", rainfall: 65, floodRisk: 55 },
    { day: "Sat", rainfall: 50, floodRisk: 35 },
    { day: "Sun", rainfall: 30, floodRisk: 15 },
  ];

  // ✅ Auto-refresh simulation: new dummy alert every 15 sec
  useEffect(() => {
    const interval = setInterval(() => {
      const newAlert = {
        id: Date.now(),
        type: "Critical",
        message: "New sudden alert generated! Stay tuned!",
        time: "Just now",
        color: "border-red-400 bg-red-50",
        icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
      };
      setAlerts((prev) => [newAlert, ...prev]);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  // Filter alerts
  const filteredAlerts = alerts.filter(
    (a) =>
      a.type.toLowerCase().includes(search.toLowerCase()) ||
      a.message.toLowerCase().includes(search.toLowerCase())
  );

  // Stats summary
  const criticalCount = alerts.filter((a) => a.type === "Critical").length;
  const warningCount = alerts.filter((a) => a.type === "Warning").length;
  const infoCount = alerts.filter((a) => a.type === "Info").length;

  return (
    <div className="flex flex-col min-h-screen">
      {/*Navbar */}

      <Navbar />

      {/* ✅ Alerts Section */}
      <main className="flex-1 py-24 px-6 bg-gradient-to-r from-green-50 to-green-100">
        <h2 className="text-4xl font-bold text-green-800 text-center mb-8 animate-fade-in">
          🔔 Live Alerts
        </h2>

        {/* ✅ Stats Summary */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          <Card className="bg-red-50 border-l-8 border-red-400 shadow">
            <CardContent className="p-4 text-center">
              <h3 className="font-bold text-red-700 text-2xl">
                {criticalCount}
              </h3>
              <p className="text-sm text-red-600">Critical Alerts</p>
            </CardContent>
          </Card>
          <Card className="bg-yellow-50 border-l-8 border-yellow-400 shadow">
            <CardContent className="p-4 text-center">
              <h3 className="font-bold text-yellow-700 text-2xl">
                {warningCount}
              </h3>
              <p className="text-sm text-yellow-600">Warnings</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-l-8 border-blue-400 shadow">
            <CardContent className="p-4 text-center">
              <h3 className="font-bold text-blue-700 text-2xl">{infoCount}</h3>
              <p className="text-sm text-blue-600">Info Alerts</p>
            </CardContent>
          </Card>
        </div>

        {/* ✅ Search Bar */}
        <div className="max-w-3xl mx-auto mb-8 flex items-center gap-2 bg-white rounded-lg shadow px-4 py-2">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search alerts by type or message..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 outline-none p-2 bg-transparent"
          />
        </div>

        {/* ✅ Alerts List */}
        <div className="max-w-4xl mx-auto grid gap-6">
          {filteredAlerts.map((alert, index) => (
            <Card
              key={alert.id}
              className={`border-l-8 ${alert.color} shadow-md hover:shadow-lg transition transform hover:scale-[1.02] animate-slide-up`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="flex items-start gap-4 p-6">
                {alert.icon}
                <div>
                  <h3 className="font-semibold text-lg">{alert.type} Alert</h3>
                  <p className="text-sm mt-1">{alert.message}</p>
                  <p className="text-xs text-gray-500 mt-2">{alert.time}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ✅ Prediction Charts */}
        <div className="max-w-5xl mx-auto mt-16 grid md:grid-cols-2 gap-8">
          {/* Line Chart */}
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-800 mb-6 text-center">
                🌧️ Rainfall & Flood Risk Prediction
              </h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={predictionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="rainfall"
                    stroke="#2563eb"
                    strokeWidth={3}
                  />
                  <Line
                    type="monotone"
                    dataKey="floodRisk"
                    stroke="#dc2626"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Bar Chart */}
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-800 mb-6 text-center">
                📊 Weekly Rainfall Comparison
              </h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={predictionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="rainfall" fill="#2563eb" />
                  <Bar dataKey="floodRisk" fill="#dc2626" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* ✅ Footer */}
      < Footer />
    </div>
  );
}
