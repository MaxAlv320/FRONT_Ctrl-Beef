import React from "react";
import { Card } from "react-bootstrap";


const Order = ({ id, name, status }) => {
  const miOrderStyle = {
    marginTop: "0px",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };


  return (
    <div style={miOrderStyle}>
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


        {/* 🟦 ID — un poco a la derecha */}
        <div style={{ flex: 1, textAlign: "left" }}>
          <h2
            style={{
              color: "#000000ff",
              fontSize: "4rem",
              fontWeight: "bold",
              marginLeft: "40px",   // 👈 Mueve ID a la derecha
            }}
          >
            {id}
          </h2>
        </div>


        {/* 🟩 NAME — centrado */}
        <div style={{ flex: 1, textAlign: "center" }}>
          <h2
            style={{
              color: "#000000ff",
              fontSize: "4rem",
              fontWeight: "bold",
            }}
          >
            {name}
          </h2>
        </div>


        {/* 🟧 STATUS — un poco a la izquierda */}
        <div style={{ flex: 1, textAlign: "right" }}>
          <h2
            style={{
              color: "#000000ff",
              fontSize: "4rem",
              fontWeight: "bold",
              marginRight: "40px",  // 👈 Mueve STATUS a la izquierda
            }}
          >
            {status}
          </h2>
        </div>
      </Card>
    </div>
  );
};


export default Order;
