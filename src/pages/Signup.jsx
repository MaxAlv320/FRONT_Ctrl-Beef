import React, { useEffect, useState } from "react";
import "../styles/Signup.css";
import burger4 from "../assets/burger4.jpg";
import burger5 from "../assets/burger5.jpg";
import burger3 from "../assets/burger3.jpg";
import logoBurger from "../assets/logoburger.png";
import { Link, useNavigate } from "react-router-dom";
import { postRegisterUsers } from "../js/test";

export default function Signup() {
  const images = [burger4, burger5, burger3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const newUser = {
      name: fullName,
      email,
      password,
    };

    try {
      const response = await postRegisterUsers(newUser);
      console.log("✅ Usuario registrado:", response);

      // Puedes mostrar un mensaje o redirigir
      alert("User created successfully!");
      navigate("/"); // redirige al login
    } catch (err) {
      console.error("❌ Error registrando usuario:", err);
      setError("Error creating user. Try again.");
    } finally {
      setLoading(false);
    }
  };

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

              <form className="mt-4" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Full name</label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="Full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>

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

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control custom-input"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="sign-btn" disabled={loading}>
                  {loading ? "Creating..." : "Create account"}
                </button>

                {error && <p className="error-msg mt-2">{error}</p>}

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
