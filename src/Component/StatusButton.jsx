import React from "react";


const StatusButton = ({ title, onClick }) => {
  return (
    <button
      className="text-center feature-card shadow-sm"
      style={{
        width: "300px",
        height: "120px",
        backgroundColor: "#ffffffff", // fondo café oscuro
        border: "10px solid #000000ff", // borde café claro
        borderRadius: "10px",
        color: "#000000ff", // texto blanco
        fontSize: "40px",
        fontWeight: "500", // Medium
        fontFamily: "'Inria Sans', sans-serif",
        cursor: "pointer",
        transition: "all 0.2s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {title}
    </button>
  );
};


export default StatusButton;
