// src/pages/Checkout.jsx
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/checkout.css";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { items, subtotal } = useContext(CartContext);
  const navigate = useNavigate();

  const total = subtotal; // no delivery fee

  return (
    <div className="checkout-page container my-4">
      <div className="row g-4">
        <div className="col-lg-8">

          <h3>Your Order</h3>

          {/* PRODUCT LIST */}
          {items.map((item) => (
            <div key={item.id} className="cart-item-card">
              <img src={item.image} alt={item.name} className="cart-item-img" />

              <div className="cart-item-info">
                <h5>{item.name}</h5>
                <div>${item.price.toFixed(2)}</div>

                <div className="qty-box">
                  <button>-</button>
                  <span>{item.quantity}</span>
                  <button>+</button>
                </div>
              </div>

              <div className="cart-item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}

          {/* ADD MORE ITEMS BUTTON */}
          <button
            className="btn-add-more mt-3"
            onClick={() => navigate("/menu")}
          >
            + Add more items
          </button>
        </div>

        {/* SUMMARY */}
        <div className="col-lg-4">
          <div className="summary-box">
            <h4>Summary</h4>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            {/* DELIVERY REMOVED */}

            <div className="summary-total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            {/* PROCEED TO PAYMENT */}
            <button
              className="btn btn-confirm mt-3"
              onClick={() => navigate("/checkoutpayment")}
            >
              Proceed to Payment
            </button>

            <div className="eta-box mt-3">
              Estimated time: 15–20 min
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
