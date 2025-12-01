import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import iconMas from "../assets/mas.png";
import iconMenos from "../assets/eliminar.png";


const Ingredient = ({ title, image }) => {
  const [cantidad, setCantidad] = useState(0);


  const aumentar = () => setCantidad((prev) => prev + 1);
  const disminuir = () => setCantidad((prev) => (prev > 0 ? prev - 1 : 0));


  const textColor = cantidad <= 10 ? "#FFD700" : "#000";


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
          fontFamily: "'Inria Sans', sans-serif", // 👈 Fuente aplicada a todo el card
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
              fontFamily: "'Inria Sans', sans-serif", // 👈 También aquí
            }}
          >
            {title}
          </h2>
        </div>


        {/* ➕ Controles */}
        <div
          style={{
            flex: "1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {/* Botón + */}
          <Button
            variant="light"
            onClick={aumentar}
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
            }}
          >
            <img
              src={iconMas}
              alt="Más"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Button>


          {/* Número */}
          <p
            style={{
              fontSize: "3.2rem",
              fontWeight: "bold",
              color: textColor,
              margin: 0,
              width: "60px",
              textAlign: "center",
              fontFamily: "'Inria Sans', sans-serif", // 👈 También aquí
            }}
          >
            {cantidad}
          </p>


          {/* Botón – */}
          <Button
            variant="light"
            onClick={disminuir}
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
            }}
          >
            <img
              src={iconMenos}
              alt="Menos"
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
