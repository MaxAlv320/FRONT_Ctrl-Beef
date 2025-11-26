import React, { useEffect, useState } from "react";
import "../styles/Login.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import burger from "../assets/burger.jpg";
import burger1 from "../assets/burger1.jpg";
import burger2 from "../assets/burger2.jpg";
import logoBurger from "../assets/logoburger.png";
import { Link, useNavigate } from "react-router-dom";
import { postLoginUsers } from "../js/users";

export default function Login() {
  const images = [burger, burger1, burger2];
  const [currentIndex, setCurrentIndex] = useState(0);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Rotación de imágenes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Función para iniciar sesión
  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const credentials = { email, password };

    try {
      const response = await postLoginUsers(credentials);
      console.log("Login Response:", response);

      if (response?.token) {
        window.sessionStorage.setItem("token", response.token);

        if (response.role === "admin") {
          sessionStorage.setItem("token", response.token);
          sessionStorage.setItem("role", "admin");
          navigate("/adminhome");
          return;
        }

        if (response?.token) {
          sessionStorage.setItem("token", response.token);
          sessionStorage.setItem("role", response.role);

          alert("Login successful!");

          if (response.role === "admin") {
            navigate("/adminhome");
          } else {
            navigate("/home");
          }

          return;
        }

        alert("Login successful!");
        navigate("/home");
      } else {
        setError(response?.message || "Invalid credentials.");
      }
    } catch (err) {
      console.error("Error logging in:", err);
      setError("User not found");
    } finally {
      setLoading(false);
    }
  };

  // ⬇️ ⬇️ EL JSX DEBE IR AQUÍ (NO dentro de handleSignIn)
  return (
    <div className="login-wrapper">
      <div className="login-frame">
        {/* HERO */}
        <div className="hero-side">
          <div
            className="hero-bg hero-bg--1"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
          />
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

        {/* FORMULARIO */}
        <div className="form-side">
          <div className="form-card">
            <div className="logo">
              <img src={logoBurger} alt="Ctrl+Beef Logo" className="logo-img" />
            </div>
            <p className="welcome">Welcome back!</p>

            <form className="mt-4" onSubmit={handleSignIn}>
              {/* EMAIL */}
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control custom-input"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* PASSWORD */}
              <div className="mb-2">
                <label className="form-label">Password</label>
                <div className="password-wrapper position-relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control custom-input"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <i
                    className={`bi ${
                      showPassword ? "bi-eye" : "bi-eye-slash"
                    } toggle-password`}
                    onClick={() => setShowPassword(!showPassword)}
                  ></i>
                </div>
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

              <button type="submit" className="sign-btn" disabled={loading}>
                {loading ? "Signing in..." : "Sign in"}
              </button>

              {error && <p className="error-msg mt-2">{error}</p>}

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
