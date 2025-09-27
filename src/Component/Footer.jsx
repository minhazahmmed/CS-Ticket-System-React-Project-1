import React from "react";
import Container from "./Container";
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 mt-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

          {/* Left side (Brand Info) */}
          <div>
            <h1 className="text-white text-xl font-bold mb-3">CS — Ticket System</h1>
            <p className="text-sm leading-6">
              A reliable customer support solution designed to make ticket
              management faster and easier. Stay connected with your clients
              and resolve issues seamlessly.
            </p>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-3">Company</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Our Mission</a></li>
              <li><a href="#" className="hover:text-white">Contact Sales</a></li>
            </ul>
          </div>

         
          <div>
            <h2 className="text-white text-lg font-semibold mb-3">Services</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Products & Services</a></li>
              <li><a href="#" className="hover:text-white">Customer Stories</a></li>
              <li><a href="#" className="hover:text-white">Download Apps</a></li>
            </ul>
          </div>

         
          <div>
            <h2 className="text-white text-lg font-semibold mb-3">Information</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white">Join Us</a></li>
            </ul>
          </div>

          
          <div>
            <h2 className="text-white text-lg font-semibold mb-3">Social Links</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><FaTwitter/><a href="#" className="hover:text-white"> Twitter — Ticket System</a></li>
              <li className="flex items-center gap-2"><FaLinkedin/><a href="#" className="hover:text-white">LinkedIn — Ticket System</a></li>
              <li className="flex items-center gap-2"><FaFacebook/><a href="#" className="hover:text-white"> Facebook — Ticket System</a></li>
              <li className="flex items-center gap-2"> <FaEnvelope/> <a href="mailto:support@cst.com" className="hover:text-white"> support@cst.com</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm text-gray-400">
          © 2025 CS — Ticket System. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
