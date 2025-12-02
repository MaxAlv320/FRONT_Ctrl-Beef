import React from "react";
import { Card } from "react-bootstrap";

const Burger = ({ title, image, text, price, edit = "Edit", onEdit }) => {
  return (
    <div className="burger-container">
      <Card className="burger-card shadow-sm">

        {/* Imagen */}
        <div className="burger-image-wrapper">
          <img src={image} alt={title} className="burger-image" />
        </div>

        {/* Texto */}
        <div className="burger-info">
          <h2 className="burger-title">{title}</h2>

          <p className="burger-text">{text}</p>

          <p className="burger-price">${price}</p>

          <button
            className="edit-text"
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
