import { useState, useEffect, useContext } from "react";
import { getItems } from "../js/items.js";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

import img1 from "../assets/classicburger.jpg";
import img2 from "../assets/cheesedeluxe.jpg";
import img3 from "../assets/checkencrispy.jpg";
import img4 from "../assets/bbqspecial.jpg";
import img5 from "../assets/veggieburger.jpg";
import img6 from "../assets/mushroomswiss.jpg";
import img7 from "../assets/supremeburger.jpg";

const MenuApp = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // ✅ Agregado

  const { addItem, items } = useContext(CartContext);
  const navigate = useNavigate();

  const img = [img1, img2, img3, img4, img5, img6, img7];

  // ⬇️ CARGAR PRODUCTOS DESDE LA API
  useEffect(() => {
    async function loadProducts() {
      try {
        setError(null); // Limpiar errores previos
        const response = await getItems();

        if (!Array.isArray(response)) {
          throw new Error("Formato inválido de respuesta");
        }

        const productsWithImages = response.map((product, index) => ({
          dbId: product._id || product.id,
          id: product._id || product.id,
          name: product.name || `Product ${index + 1}`,
          price: parseFloat(product.price) || 0,
          description: product.description || "Sin descripción",
          category: product.category || "All",
          image: img[index % img.length],
        }));

        setProducts(productsWithImages);
      } catch (err) {
        console.error("Error cargando productos:", err);
        setError(err.message || "Error al cargar el menú"); // ✅ Establecer error
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const handleAdd = (product) => {
    addItem({
      dbId: product.dbId,
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
      quantity: 1,
    });
  };

  const filters = [
    { name: "All" },
    { name: "Classic" },
    { name: "Special" },
    { name: "Vegetarian" },
    { name: "Combo" },
  ];

  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter(
          (product) =>
            product.category?.toLowerCase() === activeFilter.toLowerCase()
        );

  // ⬇️ PANTALLAS DE ESTADO (SÓLO UNA VEZ)
  if (loading) {
    return (
      <div className="text-center mt-5">
        <h2>Cargando menú...</h2>
        <div className="spinner-border text-primary mt-3" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-5">
        <h2 className="text-danger">Error</h2>
        <p>{error}</p>
        <button
          className="btn btn-primary mt-3"
          onClick={() => window.location.reload()}
        >
          Reintentar
        </button>
      </div>
    );
  }

  // ⬇️ UI PRINCIPAL
  return (
    <div className="container-custom">
      <div className="header">
        <h2 className="header-subtitle">Our Menu</h2>
        <p className="header-description">Choose your favorite burgers</p>
      </div>

      {/* FILTROS */}
      <div className="filters-container">
        {filters.map((filter) => (
          <button
            key={filter.name}
            className={`filter-button ${
              activeFilter === filter.name ? "active" : ""
            }`}
            onClick={() => setActiveFilter(filter.name)}
          >
            {filter.name}
          </button>
        ))}
      </div>

      <div className="divider"></div>

      {/* GRID DE PRODUCTOS */}
      {filteredProducts.length === 0 ? (
        <div className="text-center mt-5">
          <h3>No hay productos disponibles</h3>
          <p>Intenta seleccionar otra categoría</p>
        </div>
      ) : (
        <div className="menu-grid">
          {filteredProducts.map((product, index) => (
            <div key={`${product.id}-${index}`} className="menu-item">
              <img
                src={product.image}
                alt={product.name}
                className="menu-item-image"
              />

              <h3 className="menu-item-title">{product.name}</h3>
              <p className="menu-item-description">{product.description}</p>

              <div className="price-add-container">
                <div className="menu-item-price">
                  ${product.price.toFixed(2)}
                </div>

                <button
                  onClick={() => handleAdd(product)}
                  style={{
                    backgroundColor: "#f4c644",
                    color: "white",
                    border: "none",
                    padding: "8px 16px",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontWeight: "600",
                    transition: "0.2s",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#d9b138")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "#f4c644")
                  }
                >
                  + Add
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* VER ORDEN */}
      <div className="view-order-container">
        <button
          onClick={() => navigate("/checkout")}
          style={{
            backgroundColor: "#f4c644",
            color: "white",
            padding: "12px 24px",
            fontSize: "18px",
            fontWeight: "600",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "0.2s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#d9b138")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#f4c644")}
        >
          View Order ({items?.length || 0})
        </button>
      </div>
    </div>
  );
};

export default MenuApp;
