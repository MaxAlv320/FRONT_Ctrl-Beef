import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/checkout.css";
import { FaStore } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { postBuyItem } from "../js/items";

export default function CheckoutPayment() {
  const { items, subtotal, clearCart } = useContext(CartContext);
  const [method, setMethod] = useState("counter");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [purchaseStatus, setPurchaseStatus] = useState({}); // eliminado

  const total = Number(subtotal) || 0;
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Items en carrito para compra:", items);
  }, [items]);

  const generateOrderNumber = () => {
    const random = Math.floor(1000 + Math.random() * 9000);
    return `ORD-${Date.now().toString().slice(-6)}-${random}`;
  };

  const handleConfirm = async () => {
    if (items.length === 0) {
      setError("El carrito está vacío");
      return;
    }

    setLoading(true);
    setError(null);
    // setPurchaseStatus({}); // eliminado

    try {
      // Procesar cada item individualmente
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const itemId = item.dbId || item.id;

        if (!itemId) {
          throw new Error(`"${item.name}" no tiene un ID válido`);
        }

        try {
          const result = await postBuyItem(itemId, item.quantity);
          console.log(`✓ ${item.name} comprado:`, result);
        } catch (itemError) {
          throw new Error(`${item.name}: ${itemError.message}`);
        }
      }

      const orderNumber = generateOrderNumber();
      clearCart();

      navigate("/orderready", {
        state: {
          total,
          orderNumber,
          itemsCount: items.length,
        },
      });
    } catch (err) {
      console.error("Error en el proceso de compra:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout-page container my-4">
      <div className="row g-4">
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
              <div className="big-amount">${Number(total).toFixed(2)}</div>
            </div>

            <div className="info-note">
              After confirming your order, please proceed to the counter to
              complete your payment. Our staff will be happy to assist you!
            </div>

            {/* Estado de compras comentado */}
            {/* {Object.keys(purchaseStatus).length > 0 && (
              <div className="purchase-status mt-3 p-3 bg-light rounded">
                <h6>Estado de compras:</h6>
              </div>
            )} */}

            {error && (
              <div className="alert alert-danger mt-3">
                <strong>Error en la compra:</strong> {error}
              </div>
            )}

            <button
              className="btn-confirm mt-3"
              onClick={handleConfirm}
              disabled={loading || items.length === 0}
            >
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Processing purchase...
                </>
              ) : (
                "Confirm Order"
              )}
            </button>

            {/* Información de debug comentada */}
            {/* {process.env.NODE_ENV === "development" && items.length > 0 && (
              <div className="mt-3 p-2 bg-dark text-white rounded small">
                <div>IDs que se enviarán:</div>
              </div>
            )} */}
          </section>
        </div>

        <div className="col-lg-4">
          <div className="summary-box">
            <h4>Order summary</h4>

            {items.map((item) => (
              <div key={item.id} className="summary-item">
                <div className="d-flex justify-content-between">
                  <div>
                    <strong>
                      {item.quantity}x {item.name}
                    </strong>
                    {/* ID eliminado */}
                    {/* <div className="text-muted small">
                      ID: <code>{item.dbId || item.id}</code>
                    </div> */}
                  </div>
                  <div>
                    ${(Number(item.price) * Number(item.quantity)).toFixed(2)}
                  </div>
                </div>
              </div>
            ))}

            <div className="summary-row">
              <span>Subtotal</span>
              <span>${Number(subtotal).toFixed(2)}</span>
            </div>

            <div className="summary-total">
              <span>Total</span>
              <span>${Number(total).toFixed(2)}</span>
            </div>

            <div className="eta-box mt-3">
              <div className="text-muted small">Estimated time</div>
              <div className="fw-bold">15–20 minutes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
