import { useState } from "react";
import { getProducts } from "../js/products.js";
import img1 from "../assets/classicburger.jpg";
import img2 from "../assets/cheesedeluxe.jpg";
import img3 from "../assets/checkencrispy.jpg";
import img4 from "../assets/bbqspecial.jpg";
import img5 from "../assets/veggieburger.jpg";
import img6 from "../assets/mushroomswiss.jpg";

const test = await getProducts();
console.log("DESDE LOGIN " + test.length);

const MenuApp = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [cartItems, setCartItems] = useState([]);
  const products = [];
  const img = [img1, img2, img3, img4, img5, img6];

  for (let i = 0; i < test.length; i++) {
    const product = {
      name: test[i].name,
      description: test[i].description,
      price: test[i].price,
      category: test[i].category,
      image: img[i],
    };
    products.push(product);
  }

  const filters = [
    { name: "All", type: "gold" },
    { name: "Classic", type: "wine" },
    { name: "Special", type: "gold" },
    { name: "Vegetarian", type: "wine" },
    { name: "Combo", type: "gold" },
  ];

  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter((product) => product.category === activeFilter);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getButtonText = () => {
    const totalItems = getTotalItems();
    return totalItems > 0 ? `View Order (${totalItems})` : "View Order";
  };

  return (
    <div className="container-custom">
      <div className="header">
        <h2 className="header-subtitle">Our Menu</h2>
        <p className="header-description">Choose your favorite burgers</p>
      </div>

      <div className="filters-container">
        {filters.map((filter) => (
          <button
            key={filter.name}
            className={`filter-button ${filter.type} ${
              activeFilter === filter.name ? "active" : ""
            }`}
            onClick={() => setActiveFilter(filter.name)}
          >
            {filter.name}
          </button>
        ))}
      </div>

      <div className="divider"></div>

      <div className="menu-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="menu-item">
            <img
              src={product.image}
              alt={product.name}
              className="menu-item-image"
            />
            <h3 className="menu-item-title">{product.name}</h3>
            <p className="menu-item-description">{product.description}</p>
            <div className="price-add-container">
              <div className="menu-item-price">${product.price}</div>
              <button
                className="btn-add-simple"
                onClick={() => addToCart(product)}
              >
                + Add
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="view-order-container">
        <button className="btn-view-order">{getButtonText()}</button>
      </div>
    </div>
  );
};

export default MenuApp;
