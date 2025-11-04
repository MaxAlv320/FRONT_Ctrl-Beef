import React from "react";
import { Card } from "react-bootstrap";

const FeatureCard = ({ icon, title, text, onClick }) => {
  return (
    <Card
      className="text-center feature-card shadow-sm"
      style={{
        border: "2px solid #f5b300",
        borderRadius: "12px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <Card.Body>
        <div className="feature-icon mb-3">{icon}</div>
        <Card.Title className="text-danger fw-bold">{title}</Card.Title>
        <Card.Text className="text-muted">{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FeatureCard;
