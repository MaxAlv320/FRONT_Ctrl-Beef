import React from "react";
import { Card, Button } from "react-bootstrap";
import iconMenos from "../assets/eliminar.png";
import "../styles/inventary.css";

const Ingredient = ({ title, image, onDelete }) => {
  return (
    <div className="ingredient-container">
      <Card className="shadow-sm ingredient-card">
        <div className="ingredient-image-container">
          <img src={image} alt={title} className="ingredient-image" />
        </div>
        <div className="ingredient-title-container">
          <h2 className="ingredient-title">{title}</h2>
        </div>

        <div className="ingredient-button-container">
          <Button
            variant="light"
            onClick={onDelete}
            className="ingredient-delete-button"
          >
            <img
              src={iconMenos}
              alt="Eliminar"
              className="ingredient-delete-icon"
            />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Ingredient;
