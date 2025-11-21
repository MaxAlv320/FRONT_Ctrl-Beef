import React from "react";


const SaveButton = ({ title = "Save", onClick }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "120px", // 🔹 separación desde arriba
      }}
    >
      <button
        className="text-center feature-card shadow-sm"
        style={{
          width: "300px",
          height: "120px",
          backgroundColor: "#FED354", // fondo amarillo claro
          border: "5px solid #444", // borde gris oscuro
          borderRadius: "10px",
          color: "#ffffffff", // texto blanco
          fontSize: "40px",
          fontWeight: "500",
          fontFamily: "'Kanit', sans-serif", // 🔹 Fuente Kanit Medium
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
    </div>
  );
};


export default SaveButton;
