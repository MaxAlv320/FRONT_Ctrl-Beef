import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section text-white py-5">
      <div className="container footer-container">
        <div className="footer-left">
          <h4 className="footer-title mb-3">About Us</h4>
          <p className="footer-description">
            At <span className="highlight">Ctrl+Beef</span>, we’re passionate
            about making the best burgers in town. Every ingredient is selected
            carefully to ensure premium quality and unbeatable flavor. Visit us
            and taste the difference!
          </p>
        </div>

        <div className="footer-right">
          <div className="footer-contact">
            <p>
              <FaPhoneAlt className="footer-icon" /> +52 449 143 31 95
            </p>
            <p>
              <FaMapMarkerAlt className="footer-icon" /> Talamantes 716, AGS
            </p>
          </div>

          <div className="footer-social mt-3">
            <a href="#" className="social-icon facebook" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="social-icon instagram"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a href="#" className="social-icon twitter" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-copy text-center mt-4">
        © 2025 <span className="highlight">Ctrl+Beef.</span> All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
