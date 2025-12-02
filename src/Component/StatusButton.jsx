import React from "react";

const StatusButton = ({ title, onClick }) => {
  return (
    <button
      className="text-center feature-card shadow-sm"
      style={{
        backgroundColor: "#fff",
        border: "3px solid #000",
        borderRadius: "10px",
        padding: "8px 18px",            // tamaño compacto
        color: "#000",
        fontSize: "1.4rem",             // tamaño del texto ordenado
        fontWeight: "600",
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
