import React from "react";
import "../styles/TopBar.css";
import logo from "../assets/logoburger2.png";
import { FaArrowLeft, FaShoppingCart, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function TopBar() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <header className="topbar">
      <div className="topbar-left" onClick={handleBack}>
        <FaArrowLeft className="back-arrow" />
        <div className="logo-container">
          <img src={logo} alt="Ctrl+Beef logo" className="logo-img" />
          <span className="brand-text">Ctrl+Beef</span>
        </div>
      </div>

      <div className="topbar-right">
        <div className="cart">
          <FaShoppingCart className="icon" />
          <span className="badge">3</span>
        </div>
        <div className="user">
          <FaUser className="icon" />
        </div>
      </div>
    </header>
  );
}


