import React from "react";
import Navbar from "../Component/Navbar.jsx";
import Burger from "../Component/Burger.jsx";
import "../styles/inventary.css";
import { useNavigate } from "react-router-dom";

import Burger0 from "../assets/0burger.jpg";
import Burger1 from "../assets/1burger.jpg";
import Burger2 from "../assets/2burger.jpg";
import Burger3 from "../assets/3burger.jpg";
import Burger4 from "../assets/4burger.jpg";
import Burger5 from "../assets/5burger.jpg";
import Burger6 from "../assets/6burger.jpg";
import Burger7 from "../assets/7burger.jpg";

const MenuManagement = () => {
  const navigate = useNavigate();
  const burgers = [
    { title: "Classic Burger", image: Burger0, text: "100% beef, tomate, onion, pickles, lettuce.", price: "12.99" },
    { title: "Cheese Burger", image: Burger1, text: "Double meat, double cheddar cheese, crispy bacon.", price: "15.99" },
    { title: "BBQ Special", image: Burger2, text: "Homemade BBQ sauce, caramelized onion, jalapeños.", price: "14.99" },
    { title: "Chicken Burger", image: Burger3, text: "100% chicken, tomate, onion, pickles, lettuce.", price:"11.99" },
    { title: "Mexican Burger", image: Burger4, text: "Chili, double meat, cheese, tomato, lettuce, sauce.", price:"13.99" },
    { title: "Super Tocino", image: Burger5, text: "Double meat, tocino, tomate, onion, pickles, lettuce.", price:"16.99" },
    { title: "Vegetarian", image: Burger6, text: "Onion, lettuce, tomato, pickles, soja.", price:"17.99" },
    { title: "Fish Burger", image: Burger7, text: "Fish meat, lettuce, tomato.", price:"18.99" },
  ];

  const handleEdit = (burger) => {
    navigate("/burgeredit", { state: burger });
  };

  return (
    <>
      <Navbar title="Menu Management" />

      <div style={{ paddingTop: "50px", textAlign: "center" }}>
        <h2 className="inventory-title">Ingredients</h2>

        <div className="inventory-container">
          <div className="grid-2-columns">
            {burgers.map((b, idx) => (
              <Burger
                key={idx}
                title={b.title}
                image={b.image}
                text={b.text}
                price={b.price}
                onEdit={handleEdit}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuManagement;
