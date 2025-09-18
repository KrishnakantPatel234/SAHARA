import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
        <footer className="bg-[#d2fae6] text-white py-10 mt-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-sm">
          {/* Branding / About */}
          <div>
            <h2 className="text-lg font-semibold text-emerald-600 mb-3">
              SAHARA
            </h2>
            <p className="text-emerald-900">
              A Disaster Management Project to alert, connect, and safeguard
              communities during emergencies.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-lg text-emerald-600 font-semibold mb-3">
              Quick Links
            </h2>
            <nav className="flex flex-col gap-2">
              <Link
                to="/alerts"
                className="text-emerald-900 hover:text-emerald-500"
              >
                Alerts
              </Link>
              <Link
                to="/safezones"
                className="text-emerald-900 hover:text-emerald-500"
              >
                Safe Zones
              </Link>
              <Link
                to="/sahayak"
                className="text-emerald-900 hover:text-emerald-500"
              >
                Sahayak
              </Link>
              <Link
                to="/neighbors"
                className="text-emerald-900 hover:text-emerald-500"
              >
                Neighbors
              </Link>
            </nav>
          </div>

          {/* Contact / Social */}
          <div>
            <h2 className="text-lg text-emerald-600 font-semibold mb-3">
              Stay Connected
            </h2>
            <p className="text-emerald-100 mb-3">
              Contact us for support or suggestions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-emerald-900 hover:text-emerald-500">
                Twitter
              </a>
              <a href="#" className="text-emerald-900 hover:text-emerald-500">
                LinkedIn
              </a>
              <a href="#" className="text-emerald-900 hover:text-emerald-500">
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-8 border-t border-emerald-600 pt-4 text-center text-xs text-emerald-600">
          &copy; {new Date().getFullYear()} SAHARA | Disaster Management
          Project. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Footer;