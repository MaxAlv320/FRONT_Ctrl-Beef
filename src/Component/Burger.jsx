import React from "react";
import { Card } from "react-bootstrap";

const Burger = ({
  id,
  title,
  image,
  text,
  price,
  stock,
  onIncrease,
  onDecrease,
}) => {
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

          {stock !== undefined && (
            <>
              <p className="burger-stock">
                <b>Stock:</b> {stock}
              </p>

              <div className="stock-controls">
                <button className="stock-btn" onClick={() => onDecrease(id)}>
                  -
                </button>
                <button className="stock-btn" onClick={() => onIncrease(id)}>
                  +
                </button>
              </div>
            </>
          )}
        </div>
      </Card>
    </div>
  );
};

export default Burger;
