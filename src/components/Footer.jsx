import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B1D27] text-white font-['Urbanist'] px-6 py-14 sm:px-10 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12">

        {/* Left: Logo + Description + Social */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight tracking-wide">
            Qpixx <br />
            <span className="text-4xl sm:text-5xl font-extrabold text-white">
              Solutions
            </span>
          </h1>
          <p className="text-sm text-gray-300 max-w-xs">
            Building value where expectations meet reality. Let’s create something remarkable together.
          </p>
        </div>

        {/* Middle: Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Get in Touch</h3>
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <FaPhoneAlt className="text-lg text-[#38BDF8]" />
            <span>+91 88600 66868</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <FaEnvelope className="text-lg text-[#FBBF24]" />
            <span>info@qpixxsolutions.com</span>
          </div>
        </div>

        {/* Right: Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-3 text-white">Quick Links</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>
              <a href="/privacy-policy" className="hover:underline hover:text-white transition">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-and-condition" className="hover:underline hover:text-white transition">Terms & Conditions</a>
            </li>
            <li>
              <a href="/refund-policy" className="hover:underline hover:text-white transition">Refund Policy</a>
            </li>
            <li>
              <a href="/contact-us" className="hover:underline hover:text-white transition">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-10 text-center text-xs text-gray-400 tracking-wide">
        © {new Date().getFullYear()} Qpixx Solutions Private Limited. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
