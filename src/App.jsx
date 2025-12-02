import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import AdminHome from "./pages/AdminHome.jsx";
import Inventary from "./pages/Inventary.jsx";
import MenuManagement from "./pages/MenuManagement.jsx";
import BurgerEdit from "./pages/BurgerEdit.jsx";
import OrderManagement from "./pages/OrderManagement.jsx";

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

        {/* 🔓 RUTAS DE ADMIN AHORA DESPROTEGIDAS */}
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/inventary" element={<Inventary />} />
        <Route path="/menumanagement" element={<MenuManagement />} />
        <Route path="/burgeredit" element={<BurgerEdit />} />
        <Route path="/ordermanagement" element={<OrderManagement />} />
      </Route>
    </Routes>
  );
}

export default App;
