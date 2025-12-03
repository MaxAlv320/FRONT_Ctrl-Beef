import React from "react";
import { Card } from "react-bootstrap";
import logoBurger from "../assets/logoburger.png";


const AdminCard = ({ title, onClick }) => {
  return (
    <Card
      className="text-center feature-card shadow-sm"
      style={{
        width: "600px",
        height: "300px",
        border: "2px solid #f5b300",
        borderRadius: "12px",
        cursor: "pointer",
        transition: "transform 0.2s",
        fontFamily: "'Inria Sans', sans-serif"
      }}
      onClick={onClick}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <Card.Body>
        <div className="feature-icon mb-3">
          <img
            src={logoBurger}
            alt="Ctrl+Beef Logo"
            style={{ width: "80px", height: "auto" }}
          />
        </div>
        <Card.Title
          className="text-danger fw-bold"
          style={{ fontSize: "2rem" }}
        >
          {title}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};


export default AdminCard;
