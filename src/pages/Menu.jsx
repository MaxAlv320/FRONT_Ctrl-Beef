import { useState } from "react";

const MenuApp = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [cartItems, setCartItems] = useState([]);

  const products = [
    {

      name: "Classic Burger",
      description: "100% beef, lettuce, tomato, onion, pickles",
      price: "12.99",
      category: "Classic",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {

      name: "Cheese Deluxe",
      description: "Double meat, double cheddar cheese, crispy bacon",
      price: "15.99",
      category: "Special",
      image:
        "https://images.unsplash.com/photo-1549611016-3a70d82b5040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {

      name: "Chicken Crispy",
      description: "Breaded chicken, chipotle mayo, lettuce",
      price: "13.99",
      category: "Classic",
      image:
        "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      
      name: "BBQ Special",
      description: "Homemade BBQ sauce, caramelized onion, jalapeños",
      price: "14.99",
      category: "Special",
      image:
        "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      
      name: "Veggie Burger",
      description: "Plant-based patty, avocado, fresh vegetables",
      price: "11.99",
      category: "Vegetarian",
      image:
        "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      
      name: "Mushroom Swiss",
      description: "Sautéed mushrooms, Swiss cheese, onion",
      price: "14.50",
      category: "Vegetarian",
      image:
        "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
  ];

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
