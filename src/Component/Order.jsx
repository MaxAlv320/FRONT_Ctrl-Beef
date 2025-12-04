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
          width: "55vw",
          height: "90px",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 25px",
          fontFamily: "'Inria Sans', sans-serif",
        }}
      >
        <div style={{ width: "33%", textAlign: "left" }}>
          <h2
            style={{
              fontSize: "1.8rem",
              fontWeight: "bold",
              margin: 0,
            }}
          >
            {id}
          </h2>
        </div>

        <div style={{ width: "33%", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "1.8rem",
              fontWeight: "bold",
              margin: 0,
            }}
          >
            {name}
          </h2>
        </div>

        <div style={{ width: "33%", textAlign: "right" }}>
          <h2
            style={{
              fontSize: "1.8rem",
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
