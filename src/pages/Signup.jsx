import React, { useEffect, useState } from "react";
import "../styles/Signup.css";
import burger4 from "../assets/burger4.jpg";
import burger5 from "../assets/burger5.jpg";
import burger3 from "../assets/burger3.jpg";
import logoBurger from "../assets/logoburger.png";
import { Link } from "react-router-dom";

export default function Signup() {
  const images = [burger4, burger5, burger3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="signup-page">
      <div className="login-wrapper">
        <div className="login-frame signup-frame">

          {/* HERO */}
          <div className="hero-side">
            <div
              className="hero-bg"
              style={{ backgroundImage: `url(${images[currentIndex]})` }}
            />

            <div className="hero-overlay" />

            <div className="hero-content">
              <h1>Join the Ctrl+Beef Club!</h1>
              <p>Create your account and start enjoying the best burgers in town</p>

              <div className="dots">
                {images.map((_, idx) => (
                  <span key={idx} className={`dot ${idx === currentIndex ? "active" : ""}`} />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="form-side">
            <div className="form-card signup-form-card">

              <div className="logo">
                <img src={logoBurger} alt="Ctrl+Beef Logo" className="logo-img" />
              </div>

              <p className="welcome">Create your account</p>

              <form className="mt-4">
                <div className="mb-3">
                  <label className="form-label">Full name</label>
                  <input type="text" className="form-control custom-input" placeholder="Full name" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control custom-input" placeholder="your@email.com" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control custom-input" placeholder="••••••••" />
                </div>

                <Link to="/" className="sign-btn">Create account</Link>

                <div className="footer-cta mt-3">
                  <p>
                    Already have an account?{" "}
                    <Link to="/" className="signup">Sign in</Link>
                  </p>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
