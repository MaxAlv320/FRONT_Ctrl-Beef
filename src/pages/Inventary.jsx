import Ingredient from "../Component/Ingredient.jsx";
import "../styles/inventary.css";
import React, { useState, useEffect } from "react";
import Navbar from "../Component/Navbar.jsx";
import { getProducts, deleteProduct } from "../js/products.js";

import Burger0 from "../assets/0burger.jpg";
import Burger1 from "../assets/1burger.jpg";
import Burger2 from "../assets/2burger.jpg";
import Burger3 from "../assets/3burger.jpg";
import Burger4 from "../assets/4burger.jpg";
import Burger5 from "../assets/5burger.jpg";
import Burger6 from "../assets/6burger.jpg";
import Burger7 from "../assets/7burger.jpg";

const burgerImages = [
  Burger0,
  Burger1,
  Burger2,
  Burger3,
  Burger4,
  Burger5,
  Burger6,
  Burger7,
];

const Inventary = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const productsData = await getProducts();
      console.log("Productos cargados:", productsData);

      if (Array.isArray(productsData)) {
        setProducts(productsData);
      } else if (productsData.data && Array.isArray(productsData.data)) {
        setProducts(productsData.data);
      } else if (
        productsData.products &&
        Array.isArray(productsData.products)
      ) {
        setProducts(productsData.products);
      } else {
        console.error("Formato de datos inesperado:", productsData);
        setError("Formato de datos inesperado de la API");
      }
    } catch (err) {
      console.error("Error cargando productos:", err);
      setError(`Error al cargar productos: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = async (productId, productName) => {
    console.log(
      "Intentando eliminar producto ID:",
      productId,
      "Nombre:",
      productName
    );

    if (!productId) {
      alert("Error: ID del producto no válido");
      return;
    }

    if (
      !window.confirm(`¿Estás seguro de que deseas eliminar "${productName}"?`)
    ) {
      return;
    }

    try {
      console.log("Llamando a deleteProduct con ID:", productId);
      await deleteProduct(productId);
      console.log(`Producto ${productId} eliminado exitosamente`);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => {
          console.log("Comparando:", product.id, "con:", productId);
          return product.id !== productId;
        })
      );

      alert("Producto eliminado exitosamente");
    } catch (err) {
      console.error("Error eliminando producto:", err);
      alert(`Error al eliminar producto: ${err.message}`);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const getProductImage = (product, index) => {
    if (product.imageUrl) {
      return product.imageUrl;
    }

    const productIndex = product.id || index;
    return burgerImages[productIndex % burgerImages.length];
  };

  const getProductTitle = (product, index) => {
    if (product.name) {
      return product.name;
    }
    if (product.productName) {
      return product.productName;
    }

    const defaultNames = [
      "Classic Burger",
      "Cheese Burger",
      "BBQ Special",
      "Chicken Burger",
      "Mexican Burger",
      "Super Tocino",
      "Vegetarian",
      "Fish Burger",
    ];
    return (
      defaultNames[index % defaultNames.length] ||
      `Producto ${product.id || index + 1}`
    );
  };

  const getProductId = (product) => {
    if (product.id) {
      return product.id;
    }
    if (product._id) {
      return product._id;
    }
    if (product.productId) {
      return product.productId;
    }
    console.warn("Producto sin ID identificable:", product);
    return null;
  };

  return (
    <>
      <Navbar title="Inventary" />

      <div className="inventary-container">
        <h2 className="inventary-title">Burgers</h2>
        <div className="inventary-content">
          {loading ? (
            <div className="inventary-loading">Cargando productos...</div>
          ) : error ? (
            <div className="inventary-error">{error}</div>
          ) : products.length === 0 ? (
            <div className="inventary-empty">No hay productos disponibles.</div>
          ) : (
            <div className="inventary-list">
              {products.map((product, index) => {
                const productId = getProductId(product);
                const productName = getProductTitle(product, index);

                if (!productId) {
                  console.error("Producto sin ID:", product);
                  return null;
                }

                return (
                  <div key={productId || index} className="inventary-item">
                    <Ingredient
                      title={productName}
                      image={getProductImage(product, index)}
                      onDelete={() =>
                        handleDeleteProduct(productId, productName)
                      }
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Inventary;
