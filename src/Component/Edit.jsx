import React from "react";
import { Card } from "react-bootstrap";


const Edit = ({ burger }) => {
  const { title, image, text, price } = burger;


  const miBurgerStyle = {
    marginTop: "600px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };


  return (
    <div style={miBurgerStyle}>
      <Card
        className="shadow-sm"
        style={{
          border: "2px solid #000000ff",
          borderRadius: "20px",
          backgroundColor: "#fff",
          padding: "40px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          width: "40vw",
          fontFamily: "'Inria Sans', sans-serif",
          gap: "40px",
        }}
      >
        {/* 🥬 Imagen */}
        <div
          style={{
            width: "600px",
            height: "600px",
            overflow: "hidden",
            borderRadius: "15px",
            flexShrink: 0,
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
            justifyContent: "flex-start",
            alignItems: "flex-end",
            width: "100%",
          }}
        >
          <h2
            style={{
              color: "#000000ff",
              fontSize: "5rem",
              fontWeight: "bold",
              margin: 0,
              textAlign: "left",
            }}
          >
            {title}
          </h2>


          <p
            style={{
              marginTop: "10px",
              marginBottom: 0,
              fontFamily: "'Inria Sans', sans-serif",
              color: "#777",
              fontSize: "4rem",
              textAlign: "left",
              maxWidth: "90%",
            }}
          >
            {text}
          </p>


          <p
            style={{
              marginTop: "200px",
              marginBottom: 10,
              fontFamily: "'Inria Sans', sans-serif",
              color: "#777",
              fontSize: "5rem",
              textAlign: "left",
              maxWidth: "90%",
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
