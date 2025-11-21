import React from "react";


const BackButton = ({ title = "Back", onClick }) => {
  return (
    <button
      className="text-center feature-card shadow-sm"
      style={{
        width: "300px",
        height: "120px",
        backgroundColor: "#9b5c03ff", // fondo café oscuro
        border: "10px solid #d78005ff", // borde café claro
        borderRadius: "10px",
        color: "#fff", // texto blanco
        fontSize: "40px",
        fontWeight: "500", // Medium
        fontFamily: "'Kanit', sans-serif", // 👈 Fuente Kanit Medium aplicada
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


export default BackButton;
