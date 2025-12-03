import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar.jsx";
import Burger from "../Component/Burger.jsx";
import "../styles/inventary.css";
import { useNavigate } from "react-router-dom";
import { getItems, patchItemStock } from "../js/items.js";

import img1 from "../assets/classicburger.jpg";
import img2 from "../assets/cheesedeluxe.jpg";
import img3 from "../assets/checkencrispy.jpg";
import img4 from "../assets/bbqspecial.jpg";
import img5 from "../assets/veggieburger.jpg";
import img6 from "../assets/mushroomswiss.jpg";
import img7 from "../assets/supremeburger.jpg";

const MenuManagement = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const img = [img1, img2, img3, img4, img5, img6, img7];

  useEffect(() => {
    const verifyAndLoad = async () => {
      try {
        const token = sessionStorage.getItem("token");
        if (!token) {
          alert("Sesión expirada. Por favor, inicie sesión nuevamente.");
          navigate("/login");
          return;
        }

        const data = await getItems();

        if (Array.isArray(data)) {
          const itemsWithImages = data.map((item, index) => ({
            ...item,
            imageUrl: item.imageUrl || img[index % img.length],
          }));

          setItems(itemsWithImages);
        } else {
          console.error("Los datos no son un array:", data);
        }
      } catch (error) {
        if (
          error.message.includes("401") ||
          error.message.includes("autenticado") ||
          error.message.includes("Sesión expirada")
        ) {
          sessionStorage.removeItem("token");
          alert("Sesión expirada. Por favor, inicie sesión nuevamente.");
          navigate("/login");
        } else {
          alert(`Error al cargar productos: ${error.message}`);
        }
      } finally {
        setIsLoading(false);
      }
    };

    verifyAndLoad();
  }, [navigate]);

  const handleEdit = (item) => {
    navigate("/burgeredit", { state: item });
  };

  const increaseStock = async (item) => {
    try {
      const itemId = item._id;
      if (!itemId) {
        alert("Error: ID del producto no encontrado");
        return;
      }

      const updated = await patchItemStock(itemId, 1);
      setItems((prevItems) =>
        prevItems.map((i) =>
          i._id === itemId ? { ...i, stock: updated.stock } : i
        )
      );
    } catch (err) {
      if (
        err.message.includes("401") ||
        err.message.includes("autenticado") ||
        err.message.includes("Sesión expirada")
      ) {
        alert("Sesión expirada. Por favor, inicie sesión nuevamente.");
        sessionStorage.removeItem("token");
        navigate("/login");
      } else {
        alert(`Error al aumentar stock: ${err.message}`);
      }
    }
  };

  const decreaseStock = async (item) => {
    try {
      if ((item.stock || 0) <= 0) {
        alert("No hay stock disponible para disminuir");
        return;
      }

      const itemId = item._id;
      if (!itemId) {
        alert("Error: ID del producto no encontrado");
        return;
      }

      const updated = await patchItemStock(itemId, -1);
      setItems((prevItems) =>
        prevItems.map((i) =>
          i._id === itemId ? { ...i, stock: updated.stock } : i
        )
      );
    } catch (err) {
      if (
        err.message.includes("401") ||
        err.message.includes("autenticado") ||
        err.message.includes("Sesión expirada")
      ) {
        alert("Sesión expirada. Por favor, inicie sesión nuevamente.");
        sessionStorage.removeItem("token");
        navigate("/login");
      } else {
        alert(`Error al reducir stock: ${err.message}`);
      }
    }
  };

  if (isLoading) {
    return (
      <>
        <Navbar title="Menu Management" />
        <div
          style={{
            paddingTop: "150px",
            textAlign: "center",
            fontFamily: "'Inria Sans', sans-serif",
          }}
        >
          <h2>Cargando productos...</h2>
          <p>Por favor espera</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar title="Menu Management" />

      <div style={{ paddingTop: "50px", textAlign: "center" }}>
        <h2 className="inventory-title">Burgers</h2>

        <div className="inventory-container">
          {items.length === 0 ? (
            <div style={{ padding: "50px" }}>
              <h3>No hay productos disponibles</h3>
              <button
                onClick={() => window.location.reload()}
                style={{
                  marginTop: "20px",
                  padding: "10px 20px",
                  backgroundColor: "#8B0000",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Reintentar
              </button>
            </div>
          ) : (
            <div className="grid-2-columns">
              {items.map((item) => (
                <Burger
                  key={item._id}
                  id={item._id}
                  title={item.name}
                  image={item.imageUrl}
                  text={item.description}
                  price={item.price}
                  stock={item.stock}
                  onEdit={() => handleEdit(item)}
                  onIncrease={() => increaseStock(item)}
                  onDecrease={() => decreaseStock(item)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MenuManagement;
