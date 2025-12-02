import Ingredient from "../Component/Ingredient.jsx";
import "../styles/inventary.css";
import React, { useState, useEffect } from "react";
import Navbar from "../Component/Navbar.jsx";
import { getProducts, deleteProduct } from "../js/products.js";

// Importa todas las imágenes de burgers
import Burger0 from "../assets/0burger.jpg";
import Burger1 from "../assets/1burger.jpg";
import Burger2 from "../assets/2burger.jpg";
import Burger3 from "../assets/3burger.jpg";
import Burger4 from "../assets/4burger.jpg";
import Burger5 from "../assets/5burger.jpg";
import Burger6 from "../assets/6burger.jpg";
import Burger7 from "../assets/7burger.jpg";

// Mapeo de imágenes por índice
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

  // Función para cargar productos desde la API
  const loadProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const productsData = await getProducts();
      console.log("Productos cargados:", productsData);

      // IMPORTANTE: Verifica la estructura de los datos que devuelve la API
      if (Array.isArray(productsData)) {
        setProducts(productsData);
      } else if (productsData.data && Array.isArray(productsData.data)) {
        // Si la respuesta viene dentro de un objeto {data: [...]}
        setProducts(productsData.data);
      } else if (
        productsData.products &&
        Array.isArray(productsData.products)
      ) {
        // Si la respuesta viene dentro de un objeto {products: [...]}
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

  // Función para eliminar un producto
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

      // Actualizar la lista de productos eliminando el producto borrado
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

  // Cargar productos al montar el componente
  useEffect(() => {
    loadProducts();
  }, []);

  // Función para obtener la imagen correspondiente
  const getProductImage = (product, index) => {
    // Si el producto tiene una URL de imagen, la usamos
    if (product.imageUrl) {
      return product.imageUrl;
    }
    // Si el producto tiene un índice o id, usamos la imagen correspondiente
    const productIndex = product.id || index;
    return burgerImages[productIndex % burgerImages.length];
  };

  // Función para obtener el nombre del producto
  const getProductTitle = (product, index) => {
    if (product.name) {
      return product.name;
    }
    if (product.productName) {
      return product.productName;
    }
    // Nombres por defecto si la API no proporciona nombres
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

  // Función para obtener el ID del producto
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

      <div style={{ paddingTop: "50px", textAlign: "center" }}>
        <h2
          style={{
            color: "#000000ff",
            fontSize: "70px",
            fontFamily: "'Inria Sans', sans-serif",
            fontWeight: "bold",
          }}
        >
          Burgers
        </h2>

        {/* Sección de ingredientes/products */}
        <div style={{ marginTop: "40px" }}>
          {loading ? (
            <div style={{ margin: "40px", color: "#666", fontSize: "22px" }}>
              Cargando productos...
            </div>
          ) : error ? (
            <div
              style={{
                margin: "20px auto",
                color: "#d32f2f",
                backgroundColor: "#ffebee",
                padding: "20px",
                borderRadius: "10px",
                fontSize: "18px",
                maxWidth: "600px",
              }}
            >
              {error}
            </div>
          ) : products.length === 0 ? (
            <div
              style={{
                margin: "60px",
                color: "#666",
                fontSize: "22px",
                fontStyle: "italic",
              }}
            >
              No hay productos disponibles.
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                alignItems: "center",
              }}
            >
              {products.map((product, index) => {
                const productId = getProductId(product);
                const productName = getProductTitle(product, index);

                if (!productId) {
                  console.error("Producto sin ID:", product);
                  return null;
                }

                return (
                  <div
                    key={productId || index}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Ingredient
                      title={productName}
                      image={getProductImage(product, index)}
                      onDelete={() =>
                        handleDeleteProduct(productId, productName)
                      }
                    />
                    {/* Mostrar información de depuración */}
                    <div
                      style={{
                        position: "absolute",
                        right: "100px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        fontSize: "14px",
                        color: "#666",
                        backgroundColor: "#f0f0f0",
                        padding: "5px 10px",
                        borderRadius: "4px",
                      }}
                    >
                      ID: {productId}
                    </div>
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
