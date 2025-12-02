import React from "react";
import { Card, Button } from "react-bootstrap";
import iconMenos from "../assets/eliminar.png";

const Ingredient = ({ title, image, onDelete }) => {
  const miIngredientStyle = {
    marginTop: "0px",
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div style={miIngredientStyle}>
      <Card
        className="shadow-sm"
        style={{
          border: "2px solid #000000ff",
          borderRadius: "40px",
          width: "70vw",
          backgroundColor: "#fff",
          padding: "20px 40px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "'Inria Sans', sans-serif",
        }}
      >
        {/* 🥬 Imagen del ingrediente */}
        <div style={{ flex: "1", display: "flex", justifyContent: "center" }}>
          <img
            src={image}
            alt={title}
            style={{
              width: "90px",
              height: "90px",
              objectFit: "cover",
            }}
          />
        </div>

        {/* 📄 Nombre del ingrediente */}
        <div
          style={{
            flex: "2",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#000000ff",
              fontSize: "3rem",
              fontWeight: "bold",
              fontFamily: "'Inria Sans', sans-serif",
            }}
          >
            {title}
          </h2>
        </div>

        {/* ➖ Solo botón de eliminar */}
        <div
          style={{
            flex: "1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="light"
            onClick={onDelete}
            style={{
              border: "1px solid #ccc",
              borderRadius: "12px",
              width: "60px",
              height: "60px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              padding: 0,
              backgroundColor: "#ffebee",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#ffcdd2";
              e.currentTarget.style.borderColor = "#f44336";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#ffebee";
              e.currentTarget.style.borderColor = "#ccc";
            }}
          >
            <img
              src={iconMenos}
              alt="Eliminar"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Ingredient;
