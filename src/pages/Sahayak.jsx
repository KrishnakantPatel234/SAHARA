import { useState } from "react";
import { Shield, Home, User, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sahayak() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    skills: "",
    availability: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Thank you for joining as SAHAYAK!\nWe will contact you soon.");
    setFormData({
      name: "",
      phone: "",
      location: "",
      skills: "",
      availability: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* ✅ Navbar */}
      <header className="w-full bg-green-700 text-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Shield className="w-6 h-6" /> Join as SAHAYAK
          </h1>
          <nav>
            <Link
              to="/"
              className="hover:text-green-200 flex items-center gap-1 text-lg"
            >
              <Home className="w-5 h-5" /> Home
            </Link>
          </nav>
        </div>
      </header>

      {/* ✅ Form Section */}
      <main className="flex-1 flex items-center justify-center bg-gradient-to-r from-green-50 via-blue-50 to-green-100 px-6 py-12">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl border p-8 space-y-6">
          <h2 className="text-3xl font-bold text-green-700 text-center">
            🙌 Register as SAHAYAK
          </h2>
          <p className="text-center text-gray-600">
            Fill out the form below to become a <span className="font-semibold text-green-700">SAHAYAK</span> and help during disasters.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="flex items-center gap-2 font-medium text-gray-700">
                <User className="w-4 h-4 text-green-600" /> Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
                placeholder="Enter your full name"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="flex items-center gap-2 font-medium text-gray-700">
                <Phone className="w-4 h-4 text-green-600" /> Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Location */}
            <div>
              <label className="flex items-center gap-2 font-medium text-gray-700">
                <MapPin className="w-4 h-4 text-green-600" /> Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
                placeholder="Enter your city / area"
              />
            </div>

            {/* Skills */}
            <div>
              <label className="flex items-center gap-2 font-medium text-gray-700">
                💡 Skills
              </label>
              <input
                type="text"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="E.g. First Aid, Driving, Rescue"
              />
            </div>

            {/* Availability */}
            <div>
              <label className="flex items-center gap-2 font-medium text-gray-700">
                <Clock className="w-4 h-4 text-green-600" /> Availability
              </label>
              <select
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                required
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              >
                <option value="">Select availability</option>
                <option value="Immediate">Immediate</option>
                <option value="Within 1 Hour">Within 1 Hour</option>
                <option value="Within a Day">Within a Day</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="flex items-center gap-2 font-medium text-gray-700">
                <MessageSquare className="w-4 h-4 text-green-600" /> Additional
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
                placeholder="Any extra information..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg text-lg font-semibold transition shadow-md"
            >
              🚀 Submit & Join as SAHAYAK
            </button>
          </form>
        </div>
      </main>

      {/* ✅ Footer */}
      <footer className="bg-green-700 text-white py-4">
        <div className="max-w-6xl mx-auto px-6 flex justify-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Disaster Management Project
          </p>
        </div>
      </footer>
    </div>
  );
}
