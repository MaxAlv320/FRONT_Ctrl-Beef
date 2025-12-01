import React from "react";
import BackButton from "./BackButton.jsx";
import logoBurger from "../assets/logoburger.png";
import { useNavigate } from "react-router-dom";

const Navbar = ({ title }) => {
  const navigate = useNavigate();

  return (
    <>
      {/* 🔶 ESTILOS INTERNOS */}
      <style>{`
        .navbar-custom {
          background-color: #FED354;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;

          height: 110px; 
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 25px;

          font-family: 'Inria Sans', sans-serif;
        }

        /* ⭐ LOGO — ahora la MITAD de tamaño */
        .navbar-logo {
          width: 100px;    /* antes era 150px */
          height: auto;
        }

        /* TÍTULO CENTRADO */
        .navbar-title-wrapper {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }

        .navbar-title {
          color: #821018;
          font-size: 60px;
          margin: 0;
          white-space: nowrap;
          font-weight: bold;
        }

        /* 📱 Medianas */
        @media (max-width: 900px) {
          .navbar-custom {
            height: 90px;
          }
          .navbar-logo {
            width: 80px;   /* 50% también aquí */
          }
          .navbar-title {
            font-size: 45px;
          }
        }

        /* 📱 Pequeñas */
        @media (max-width: 600px) {
          .navbar-custom {
            height: 75px;
            padding: 0 15px;
          }
          .navbar-logo {
            width: 50px;   /* sigue siendo la mitad */
          }
          .navbar-title {
            font-size: 32px;
          }
        }

        /* 📱 Muy pequeñas */
        @media (max-width: 400px) {
          .navbar-custom {
            height: 65px;
          }
          .navbar-logo {
            width: 40px;   /* mitad del original proporcional */
          }
          .navbar-title {
            font-size: 26px;
          }
        }
      `}</style>

      {/* 🔶 NAVBAR */}
      <nav className="navbar-custom">
        {/* LOGO */}
        <img src={logoBurger} className="navbar-logo" alt="Ctrl+Beef Logo" />

        {/* TÍTULO CENTRADO */}
        <div className="navbar-title-wrapper">
          <h2 className="navbar-title">{title}</h2>
        </div>

        {/* BOTÓN BACK */}
        <BackButton title="Back" onClick={() => navigate(-1)} />
      </nav>
    </>
  );
};

export default Navbar;
