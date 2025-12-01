// src/pages/Menu.jsx (fragmento completo reutilizable)
import { useState, useEffect, useContext } from "react";
import { getProducts } from "../js/products.js";
import { CartContext } from "../context/CartContext";
import img1 from "../assets/classicburger.jpg";
import img2 from "../assets/cheesedeluxe.jpg";
import img3 from "../assets/checkencrispy.jpg";
import img4 from "../assets/bbqspecial.jpg";
import img5 from "../assets/veggieburger.jpg";
import img6 from "../assets/mushroomswiss.jpg";
import img7 from "../assets/supremeburger.jpg";

export default function MenuApp() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [products, setProducts] = useState([]);
  const { addItem, totalItems } = useContext(CartContext);
  const img = [img1, img2, img3, img4, img5, img6, img7];

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getProducts();
        if (data && Array.isArray(data)) {
          // Map products adding image from local assets (matching index)
          const mapped = data.map((p, i) => ({
            id: p.id || i,
            name: p.name,
            description: p.description,
            price: Number(p.price) || 0,
            category: p.category || "Classic",
            image: img[i % img.length],
          }));
          setProducts(mapped);
        } else {
          // fallback: create demo
          setProducts([]);
        }
      } catch (err) {
        console.error(err);
        setProducts([]);
      }
    };
    fetch();
  }, []);

  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter((product) => product.category === activeFilter);

  const handleAdd = (product) => addItem(product);

  return (
    <div className="container-custom">
      {/* ... header, filters ... */}
      <div className="menu-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="menu-item">
            <img src={product.image} alt={product.name} className="menu-item-image" />
            <h3 className="menu-item-title">{product.name}</h3>
            <p className="menu-item-description">{product.description}</p>
            <div className="price-add-container">
              <div className="menu-item-price">${product.price}</div>
              <button className="btn-add-simple" onClick={() => handleAdd(product)}>
                + Add
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="view-order-container">
        <a href="/checkout" className="btn-view-order">
          View Order ({totalItems})
        </a>
      </div>
    </div>
  );
}
