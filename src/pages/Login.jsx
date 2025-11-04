import React, { useEffect, useState } from "react";
import "../styles/Login.css";
import burger from "../assets/burger.jpg";
import burger1 from "../assets/burger1.jpg";
import burger2 from "../assets/burger2.jpg";
import logoBurger from "../assets/logoburger.png"; // importa el logo localmente
import { Link, useNavigate } from "react-router-dom"; // 👈 solo agregamos useNavigate

export default function Login() {
  const images = [burger, burger1, burger2];
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // 👈 agregamos esto

  // 👇 esta función ahora se usa para el botón Sign in
  const handleSignIn = (e) => {
    e.preventDefault();
    navigate("/home"); // redirige al Home
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000); // cada 2 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="login-wrapper">
      <div className="login-frame">
        {/* HERO: ahora tiene dos capas para poder hacer fade */}
        <div className="hero-side">
          {/* capa de imagen activa */}
          <div
            className="hero-bg hero-bg--1"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
          />
          {/* opcional: capa adicional para crossfade si quieres preponer otra imagen */}
          <div className="hero-overlay" />
          <div className="hero-content">
            <h1>Craving a burger?</h1>
            <p>Order from our amazing selection of gourmet burgers</p>

            <div className="dots">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`dot ${idx === currentIndex ? "active" : ""}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="form-side">
          <div className="form-card">
            <div className="logo">
              <img src={logoBurger} alt="Ctrl+Beef Logo" className="logo-img" />
            </div>
            <p className="welcome">Welcome back!</p>

            <form className="mt-4">
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control custom-input"
                  placeholder="your@email.com"
                />
              </div>

              <div className="mb-2">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control custom-input"
                  placeholder="••••••••"
                />
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="remember"
                  />
                  <label className="form-check-label" htmlFor="remember">
                    Remember me
                  </label>
                </div>
                <Link to="/forgot" className="forgot">
                  Forgot password?
                </Link>
              </div>

              {/* 👇 ahora el Sign in redirige al Home */}
              <button type="button" className="sign-btn" onClick={handleSignIn}>
                Sign in
              </button>

              <div className="footer-cta">
                <p>
                  Don't have an account?{" "}
                  <Link to="/signup" className="signup">
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
