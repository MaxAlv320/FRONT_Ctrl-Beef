import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/checkout.css";
import { FaStore } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function CheckoutPayment() {
  const { items, subtotal, clearCart } = useContext(CCartContext);
  const [method, setMethod] = useState("counter");
  const total = subtotal;

  const navigate = useNavigate();

  // Generate a random order number
  const generateOrderNumber = () => {
    const random = Math.floor(1000 + Math.random() * 9000);
    return `CB-2025-${random}`;
  };

  const handleConfirm = () => {
    const orderNumber = generateOrderNumber();

    clearCart();

    navigate("/orderready", {
      state: {
        total,
        orderNumber,
      },
    });
  };

  return (
    <div className="checkout-page container my-4">
      <div className="row g-4">

        {/* LEFT SIDE */}
        <div className="col-lg-8">
          <section className="payment-method-card">
            <h3>Payment method</h3>

            <div className="methods">
              <button
                className={`method ${method === "counter" ? "active" : ""}`}
                onClick={() => setMethod("counter")}
              >
                <div className="method-ico">
                  <FaStore />
                </div>
                <div>At Counter</div>
              </button>
            </div>
          </section>

          <section className="pay-info-card">
            <h4>Pay at Counter</h4>

            <div className="big-box">
              <small>You're dining in at our restaurant</small>
              <div className="big-amount">${total.toFixed(2)}</div>
            </div>

            <div className="info-note">
              After confirming your order, please proceed to the counter to
              complete your payment. Our staff will be happy to assist you!
            </div>

            <button className="btn-confirm" onClick={handleConfirm}>
              Confirm Order
            </button>
          </section>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-lg-4">
          <div className="summary-box">
            <h4>Order summary</h4>

            {items.map((item) => (
              <div key={item.id} className="summary-item">
                <span>
                  {item.quantity}x {item.name}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}

            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="summary-total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div className="eta-box mt-3">Ready in: 15–20 min</div>
          </div>
        </div>
      </div>
    </div>
  );
}
