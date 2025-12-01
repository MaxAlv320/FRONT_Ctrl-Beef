import Ingredient from "../Component/Ingredient.jsx";
import "../styles/inventary.css";
import React from "react";
import Navbar from "../Component/Navbar.jsx";
import SaveButton from "../Component/SaveButton.jsx";

// 🧾 Importa todos los ingredientes
import Burger0 from "../assets/0burger.jpg";
import Burger1 from "../assets/1burger.jpg";
import Burger2 from "../assets/2burger.jpg";
import Burger3 from "../assets/3burger.jpg";
import Burger4 from "../assets/4burger.jpg";
import Burger5 from "../assets/5burger.jpg";
import Burger6 from "../assets/6burger.jpg";
import Burger7 from "../assets/7burger.jpg";

const Inventary = () => {
  return (
    <>
  {/* 🔶 Navbar fija */}
  <Navbar title="Inventary"/>


  {/* 🔹 Contenedor principal con espacio debajo del nav */}
  <div style={{ paddingTop: "50px", textAlign: "center" }}>
    <h2
      style={{
        color: "#000000ff",
        fontSize: "70px",
        fontFamily: "'Inria Sans', sans-serif",
        fontWeight: "bold",
      }}
    >
      Ingredients
    </h2>


    {/* 🧺 Sección de ingredientes */}
    <div style={{ marginTop: "40px" }}>
      <Ingredient title="Classic Burger" image={Burger0} />
      <Ingredient title="Cheese Burger" image={Burger1} />
      <Ingredient title="BBQ Special" image={Burger2} />
      <Ingredient title="Chicken Burger" image={Burger3} />
      <Ingredient title="Mexican Burger" image={Burger4} />
      <Ingredient title="Super Tocino" image={Burger5} />
      <Ingredient title="Vegetarian" image={Burger6} />
      <Ingredient title="Fish Burger" image={Burger7} />
    </div>
  </div>


  <SaveButton/>
</>
  );
};


export default Inventary;
