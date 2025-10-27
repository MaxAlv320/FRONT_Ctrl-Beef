import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import MenuApp  from "./pages/Menu.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
      <div>
        <MenuApp/>
      </div>
      
  );
}

export default App;
