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

  // ====== LOGIN ======
  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Validación básica
    if (!email || !password) {
      setError("Please enter both email and password");
      setLoading(false);
      return;
    }

    try {
      const credentials = { email, password };
      const response = await postLoginUsers(credentials);

      console.log("Login Response:", response);

      // Verificar si la respuesta tiene token
      if (!response?.token) {
        setError(response?.message || "Invalid credentials");
        setLoading(false);
        return;
      }

      // Guardar datos en sessionStorage
      sessionStorage.setItem("token", response.token);
      sessionStorage.setItem("role", response.role || "user");

      // Guardar información del usuario para TopBar
      sessionStorage.setItem(
        "user",
        JSON.stringify({
          name: response.name || response.nombre || "User",
          email: response.email || email,
        })
      );

      // Redirección según rol
      if (response.role === "admin") {
        navigate("/adminhome");
      } else {
        navigate("/home");
      }

      // No necesitas alert aquí si la navegación funciona
    } catch (err) {
      console.error("Error logging in:", err);
      // Mensajes de error más específicos
      if (err.message?.includes("Network")) {
        setError("Network error. Please check your connection.");
      } else if (err.message?.includes("401")) {
        setError("Invalid email or password");
      } else {
        setError(err.message || "Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

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
                  disabled={loading}
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
                    disabled={loading}
                  />
                  <i
                    className={`bi ${
                      showPassword ? "bi-eye" : "bi-eye-slash"
                    } toggle-password`}
                    onClick={() => !loading && setShowPassword(!showPassword)}
                    style={{ cursor: loading ? "not-allowed" : "pointer" }}
                  ></i>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="remember"
                    disabled={loading}
                  />
                  <label className="form-check-label" htmlFor="remember">
                    Remember me
                  </label>
                </div>
                <Link
                  to="/forgot"
                  className="forgot"
                  style={{ pointerEvents: loading ? "none" : "auto" }}
                >
                  Forgot password?
                </Link>
              </div>

              <button type="submit" className="sign-btn" disabled={loading}>
                {loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Signing in...
                  </>
                ) : (
                  "Sign in"
                )}
              </button>

              {error && (
                <div className="alert alert-danger mt-3" role="alert">
                  {error}
                </div>
              )}

              <div className="footer-cta mt-3">
                <p>
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="signup"
                    style={{ pointerEvents: loading ? "none" : "auto" }}
                  >
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
