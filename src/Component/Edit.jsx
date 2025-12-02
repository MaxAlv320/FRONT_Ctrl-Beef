import React from "react";
import { Card } from "react-bootstrap";

const Edit = ({ burger }) => {
  const { title, image, text, price } = burger;

  return (
    <div
      style={{
        marginTop: "120px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Card
        className="shadow-sm"
        style={{
          border: "2px solid #000",
          borderRadius: "20px",
          backgroundColor: "#fff",
          padding: "30px",
          display: "flex",
          flexDirection: "row",
          width: "80vw",
          maxWidth: "1100px",
          gap: "30px",
          fontFamily: "'Inria Sans', sans-serif",

          /* 📱 Pantallas pequeñas: vista vertical */
          flexWrap: "wrap",
        }}
      >
        {/* 🖼 Imagen */}
        <div
          style={{
            width: "100%",
            maxWidth: "450px",
            aspectRatio: "1 / 1",
            overflow: "hidden",
            borderRadius: "15px",
            flexShrink: 0,
            margin: "0 auto",
          }}
        >
          <img
            src={image}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* 📄 Texto */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
            minWidth: "250px",
          }}
        >
          {/* Título */}
          <h2
            style={{
              margin: 0,
              fontWeight: "bold",
              fontSize: "clamp(2rem, 4vw, 4rem)",
              color: "#000",
              textAlign: "left",
            }}
          >
            {title}
          </h2>

          {/* Descripción */}
          <p
            style={{
              marginTop: "10px",
              color: "#777",
              fontSize: "clamp(1rem, 2vw, 2rem)",
              textAlign: "left",
              maxWidth: "95%",
            }}
          >
            {text}
          </p>

          {/* Precio */}
          <p
            style={{
              marginTop: "40px",
              fontWeight: "bold",
              color: "#333",
              fontSize: "clamp(1.5rem, 3vw, 3.5rem)",
            }}
          >
            {price}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Edit;
