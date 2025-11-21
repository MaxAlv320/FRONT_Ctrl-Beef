import React from "react";
import { Card } from "react-bootstrap";


const Burger = ({ title, image, text, price, edit = "Edit", onEdit }) => {
  const miBurgerStyle = {
    marginTop: "0px",
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
        }}>


        <div
          style={{
            width: "600px",
            height: "600px",
            overflow: "hidden",
            borderRadius: "15px",
            flexShrink: 0,
          }}>
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


        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-end",
            width: "100%",
          }}>
         
          <h2
            style={{
              color: "#000000ff",
              fontSize: "5rem",
              fontWeight: "bold",
              margin: 0,
              textAlign: "left",
            }}>
            {title}
          </h2>


          <p
            style={{
              marginTop: "10px",
              fontFamily: "'Inria Sans', sans-serif",
              color: "#777",
              fontSize: "4rem",
              textAlign: "left",
              maxWidth: "90%",
            }}>
            {text}
          </p>


          <p
            style={{
              marginTop: "200px",
              fontFamily: "'Inria Sans', sans-serif",
              color: "#777",
              fontSize: "5rem",
              textAlign: "left",
              maxWidth: "90%",
            }}>
            {price}
          </p>


          {/* ✅ BOTÓN EDIT CORREGIDO */}
          <button
            className="edit-text"
            style={{
              marginTop: "10px",
              color: "#F6A700",
              fontSize: "4rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
            onClick={() => onEdit({ title, image, text, price })}
          >
            {edit}
          </button>


        </div>


      </Card>
    </div>
  );
};


export default Burger;
