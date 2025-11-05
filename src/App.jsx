import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import MainLayout from "./layouts/MainLayout.jsx"; // 👈 importa tu layout

function App() {
  return (
    <Routes>
      {/* Rutas sin TopBar */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot" element={<ForgotPassword />} />

      {/* Rutas con TopBar */}
      <Route element={<MainLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Route>
    </Routes>
  );
}

export default App;
