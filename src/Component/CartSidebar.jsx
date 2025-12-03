import React, { useContext, useMemo } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/cart.css";

const DELIVERY_FEE = 3.0;

export default function CartSidebar({ onProceed = () => {} }) {
  const { items, increase, decrease, removeItem, subtotal, totalItems } = useContext(CartContext);

  const delivery = useMemo(() => (subtotal > 0 ? DELIVERY_FEE : 0), [subtotal]);
  const total = useMemo(() => subtotal + delivery, [subtotal, delivery]);

  return (
    <aside className="cart-sidebar">
      <div className="cart-box">
        <h4>Summary</h4>

        <div className="cart-lines">
          {items.length === 0 && <p className="empty">Your cart is empty</p>}
          {items.map((it) => (
            <div key={it.id} className="cart-line">
              <div className="cart-line-left">
                <div className="cart-thumb">
                  <img src={it.image || it.img || ""} alt={it.name} />
                </div>
                <div>
                  <div className="cart-name">{it.name}</div>
                  <div className="cart-qty">x{it.quantity}</div>
                </div>
              </div>

              <div className="cart-line-right">
                <div className="cart-price">${(it.price * it.quantity).toFixed(2)}</div>
                <div className="cart-actions">
                  <button onClick={() => decrease(it.id)} className="qty-btn">−</button>
                  <span className="qty-num">{it.quantity}</span>
                  <button onClick={() => increase(it.id)} className="qty-btn">+</button>
                  <button onClick={() => removeItem(it.id)} className="remove-btn" title="Remove">🗑️</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr />

        <div className="price-row">
          <span>Subtotal</span>
          <strong>${subtotal.toFixed(2)}</strong>
        </div>
        <div className="price-row">
          <span>Delivery</span>
          <strong>${delivery.toFixed(2)}</strong>
        </div>

        <div className="total-row">
          <span>Total</span>
          <strong>${total.toFixed(2)}</strong>
        </div>

        <div className="checkout-actions">
          <button className="btn btn-primary proceed" onClick={() => onProceed()}>
            {totalItems > 0 ? "Proceed to Payment" : "Start Order"}
          </button>
          <div className="eta">Estimated time: 30-40 min</div>
        </div>
      </div>
    </aside>
  );
}