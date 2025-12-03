import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/checkout.css";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { 
    items, 
    addItem, 
    removeItem, 
    increase, 
    decrease,
    clearCart,
    subtotal: contextSubtotal,
    totalItems 
  } = useContext(CartContext);

  const navigate = useNavigate();

  const cartItems = items || [];

  const subtotal = contextSubtotal !== undefined 
    ? contextSubtotal 
    : cartItems.reduce(
        (acc, item) => acc + Number(item.price || 0) * (item.quantity || 0),
        0
      );

  const total = subtotal;

  return (
    <div className="checkout-page container my-4">
      <div className="row g-4">

        {/* LADO IZQUIERDO */}
        <div className="col-lg-8">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3>Your Order</h3>
            <span className="badge bg-primary">
              {totalItems} items
            </span>
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-5">
              <h4>Your cart is empty</h4>
              <button className="btn-browse mt-3" onClick={() => navigate("/menu")}>
                Browse Menu
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item-card mb-3">
                <div className="row align-items-center">

                  {/* Imagen */}
                  <div className="col-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-img"
                    />
                  </div>

                  {/* Info */}
                  <div className="col-5">
                    <h5>{item.name}</h5>
                    <p className="text-muted small mb-2">{item.description}</p>
                  </div>

                  {/* Cantidad */}
                  <div className="col-2">
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => decrease(item.id)}
                      >
                        -
                      </button>

                      <span className="mx-2 fw-bold">{item.quantity}</span>

                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => increase(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Total + Remove below */}
                  <div className="col-2 text-end d-flex flex-column align-items-end">
                    <div className="fw-bold mb-2">
                      ${((item.price * item.quantity)).toFixed(2)}
                    </div>

                    <button className="btn-remove mt-1" onClick={() => removeItem(item.id)}>
                      <FaTrashAlt />
                    </button>
                  </div>

                </div>
              </div>
            ))
          )}

          {/* Botones finales A LA DERECHA */}
          {cartItems.length > 0 && (
            <div className="mt-4 d-flex justify-content-end gap-2">
              <button className="btn-clear" onClick={clearCart}>
                Clear Cart
              </button>
              
              <button className="btn-add-more" onClick={() => navigate("/menu")}>
                + Add more items
              </button>
            </div>
          )}
        </div>

        {/* LADO DERECHO */}
        <div className="col-lg-4">
          <div className="summary-box sticky-top">
            <h4 className="mb-4">Order Summary</h4>

            <div className="summary-row">
              <span>Items ({totalItems})</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="summary-row">
              <span>Tax</span>
              <span>$0.00</span>
            </div>

            <div className="summary-row">
              <span>Delivery</span>
              <span className="text-success">FREE</span>
            </div>

            <div className="summary-total pt-3 border-top">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button
              className="btn-confirm mt-3"
              onClick={() => navigate("/checkoutpayment")}
            >
              Proceed to Payment
            </button>

            <div className="eta-box mt-4 p-3 text-center">
              <div className="text-muted mb-2">Estimated delivery time</div>
              <div className="fs-5 fw-bold">15-20 minutes</div>
              <small className="text-muted">Order will be ready for pickup</small>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
