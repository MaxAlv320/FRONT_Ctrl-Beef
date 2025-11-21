import React from "react";
import BackButton from "./BackButton.jsx";
import logoBurger from "../assets/logoburger.png";
import { useNavigate } from "react-router-dom";


const Navbar = ({ title }) => {
  const navigate = useNavigate();


  return (
    <nav
      style={{
        backgroundColor: "#FED354",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 30px",
        fontFamily: "'Inria Sans', sans-serif"
      }}
    >
      {/* 🔸 Logo */}
      <img
        src={logoBurger}
        alt="Ctrl+Beef Logo"
        style={{ width: "200px", height: "auto" }}
      />


      {/* 🔸 Título centrado */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <h2
          style={{
            color: "#821018",
            fontSize: "100px",
            margin: 0,
            fontWeight: "bold",
            fontFamily: "'Inria Sans', sans-serif"
          }}
        >
          {title}
        </h2>
      </div>


      {/* 🔸 Botón de regreso */}
      <BackButton title="Back" onClick={() => navigate(-1)} />
    </nav>
  );
};


export default Navbar;