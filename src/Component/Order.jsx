import React from "react";
import { Card } from "react-bootstrap";

const Order = ({ id, name, status }) => {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        marginTop: "10px",
      }}
    >
      <Card
        className="shadow-sm"
        style={{
          border: "2px solid #000",
          borderRadius: "15px",
          width: "55vw",             // MÁS CHICO
          height: "90px",            // MÁS BAJO
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 25px",
          fontFamily: "'Inria Sans', sans-serif",
        }}
      >

        {/* ID – izquierda */}
        <div style={{ width: "33%", textAlign: "left" }}>
          <h2
            style={{
              fontSize: "1.8rem",     // MÁS CHICO
              fontWeight: "bold",
              margin: 0,
            }}
          >
            {id}
          </h2>
        </div>

        {/* NAME – centro */}
        <div style={{ width: "33%", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "1.8rem",     // MÁS CHICO
              fontWeight: "bold",
              margin: 0,
            }}
          >
            {name}
          </h2>
        </div>

        {/* STATUS – derecha */}
        <div style={{ width: "33%", textAlign: "right" }}>
          <h2
            style={{
              fontSize: "1.8rem",     // MÁS CHICO
              fontWeight: "bold",
              margin: 0,
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
