import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Home from "./pages/Home.jsx"; // 👈 nuevo
import Menu from "./pages/Menu.jsx"; // 👈 nuevo

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot" element={<ForgotPassword />} />
      <Route path="/home" element={<Home />} /> {/* 👈 nueva ruta */}
      <Route path="/menu" element={<Menu />} /> {/* 👈 nueva ruta */}
    </Routes>
  );
}

export default App;
