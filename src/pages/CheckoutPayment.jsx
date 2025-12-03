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
  const [purchaseStatus, setPurchaseStatus] = useState({});

  const total = Number(subtotal) || 0;
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Items en carrito:", items);
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
    setPurchaseStatus({});

    try {
      // Preparar datos en el formato correcto para la API
      const itemsToBuy = items.map(item => ({
        id: item.dbId || item.id,
        quantity: item.quantity
      }));

      console.log("Items a comprar:", itemsToBuy);

      // Verificar que todos los items tienen ID
      const itemsWithoutId = items.filter(item => !item.dbId && !item.id);
      if (itemsWithoutId.length > 0) {
        throw new Error(`Los siguientes items no tienen ID: ${itemsWithoutId.map(i => i.name).join(', ')}`);
      }

      // Enviar los datos al backend
      const result = await postBuyItem(itemsToBuy);
      
      console.log("Resultado de la compra:", result);

      // Procesar resultados
      if (result.results) {
        // Crear un mapa para mostrar estado por item
        const resultsMap = {};
        result.results.forEach(r => {
          resultsMap[r.id] = r;
        });

        // Actualizar estado para cada item
        items.forEach(item => {
          const itemId = item.dbId || item.id;
          const resultItem = resultsMap[itemId];
          
          if (resultItem) {
            if (resultItem.status === "success") {
              setPurchaseStatus(prev => ({
                ...prev,
                [item.name]: {
                  status: "success",
                  message: `✓ ${resultItem.message || "Comprado exitosamente"}`
                }
              }));
            } else {
              setPurchaseStatus(prev => ({
                ...prev,
                [item.name]: {
                  status: "error",
                  message: `✗ ${resultItem.message || "Error en la compra"}`
                }
              }));
            }
          } else {
            setPurchaseStatus(prev => ({
              ...prev,
              [item.name]: {
                status: "warning",
                message: "⚠ No se recibió respuesta para este item"
              }
            }));
          }
        });

        // Verificar si hay errores
        const errors = result.results.filter(r => r.status === "error");
        if (errors.length > 0) {
          const errorMessages = errors.map(e => 
            `${items.find(i => (i.dbId || i.id) === e.id)?.name || e.id}: ${e.message}`
          );
          throw new Error(`Errores: ${errorMessages.join('; ')}`);
        }
      } else {
        // Si no hay results, asumir éxito
        items.forEach(item => {
          setPurchaseStatus(prev => ({
            ...prev,
            [item.name]: {
              status: "success",
              message: "✓ Compra exitosa"
            }
          }));
        });
      }

      // Si todo fue exitoso, proceder con la orden
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
      
      // Si el error es de stock, mostrar sugerencia
      if (err.message.includes("stock") || err.message.includes("Stock") || err.message.includes("enough")) {
        setError(prev => `${prev}. Por favor, ajusta las cantidades o elimina algunos items.`);
      }
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

            {/* Estado de compras */}
            {Object.keys(purchaseStatus).length > 0 && (
              <div className="purchase-status mt-3 p-3 bg-light rounded">
                <h6>Estado de compras:</h6>
                {Object.entries(purchaseStatus).map(([itemName, status]) => (
                  <div
                    key={itemName}
                    className={`mb-1 ${
                      status.status === "error"
                        ? "text-danger"
                        : status.status === "success"
                        ? "text-success"
                        : "text-warning"
                    }`}
                  >
                    {status.status === "success" && "✅ "}
                    {status.status === "error" && "❌ "}
                    {status.status === "warning" && "⚠️ "}
                    <strong>{itemName}:</strong> {status.message}
                  </div>
                ))}
              </div>
            )}

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
                  Procesando compra...
                </>
              ) : (
                "Confirm Order"
              )}
            </button>
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
                    <div className="text-muted small">
                      ${Number(item.price).toFixed(2)} c/u
                    </div>
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