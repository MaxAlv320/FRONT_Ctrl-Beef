import React from "react";
import "../styles/ForgotPassword.css";
import logoBurger from "../assets/logoburger.png";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="forgot-wrapper">
      <div className="forgot-card">
        <div className="forgot-logo">
          <img src={logoBurger} alt="Ctrl+Beef Logo" />
        </div>

        <h2 className="forgot-title">Reset your password</h2>

        <div className="forgot-mail-icon" role="img" aria-label="Email icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="forgot-mail-svg"
            focusable="false"
            aria-hidden="true"
          >
            <title>Envelope</title>
            <path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4.25-8 5-8-5V6l8 5 8-5v2.25z" />
          </svg>
        </div>


        <p className="forgot-subtitle">
          Enter your email address and we'll send you instructions to reset your password
        </p>

        <form>
          <div>
            <label className="forgot-label">Email address</label>
            <input
              type="email"
              className="forgot-input"
              placeholder="your@email.com"
            />
          </div>

          <button type="button" className="forgot-btn">Send reset link</button>
        </form>

        <div className="forgot-footer">
          <p>
            Don’t have an account?{" "}
            <Link to="/signup" className="forgot-link-gold">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}