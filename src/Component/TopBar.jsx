import React, { useState } from "react";
import "../styles/TopBar.css";
import logo from "../assets/logoburger2.png";
import { FaArrowLeft, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function TopBar() {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  //Los datos del usuario se obtienen de sessionStorage
  const user = JSON.parse(sessionStorage.getItem("user")) || {
    name: "Invitado",
    email: "Sin correo",
  };

  const handleBack = () => {
    navigate(-1);
  };

  const toggleUserMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
    navigate("/login");
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
        {/* Icono de usuario */}
        <div className="user" onClick={toggleUserMenu}>
          <FaUser className="icon" />
        </div>

        {/* Menú */}
        {openMenu && (
          <div className="user-menu">
            <p className="user-name">{user.name}</p>
            <p className="user-email">{user.email}</p>

            <button className="logout-btn" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
