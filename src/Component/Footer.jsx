import React from "react";

const Footer = () => {
  return (
    <footer
      id="about-us"
      className="footer-section text-white text-center py-5"
    >
      <div className="container">
        <h4>About Us</h4>
        <p className="mt-3 mx-auto" style={{ maxWidth: "700px" }}>
          At Ctrl+Beef, we’re passionate about making the best burgers in town.
          Every ingredient is selected carefully to ensure premium quality and
          unbeatable flavor. Visit us and taste the difference!
        </p>
        <p className="mt-4 mb-0 small">
          © 2025 Ctrl+Beef. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
