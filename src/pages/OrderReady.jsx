import React from "react";
import "../styles/orderReady.css";
import { useLocation, useNavigate } from "react-router-dom";
import { FaStore } from "react-icons/fa";

export default function OrderReady() {
  const location = useLocation();
  const navigate = useNavigate();

  const { total, orderNumber } = location.state || {};

  return (
    <div className="order-ready-page">
      <div className="order-card">

        <div className="order-icon">
          <FaStore />
        </div>

        <h2 className="order-title">Order Ready!</h2>
        <p className="order-subtitle">Your order has been confirmed</p>

        <div className="order-number-box">
          <span>Order number</span>
          <div className="order-number">#{orderNumber}</div>
        </div>

        <div className="order-total-box">
          <small>Total to pay:</small>
          <div className="order-total">${Number(total).toFixed(2)}</div>
        </div>

        <button
          className="btn-return"
          onClick={() => navigate("/menu")}
        >
          Back to Menu
        </button>

      </div>
    </div>
  );
}