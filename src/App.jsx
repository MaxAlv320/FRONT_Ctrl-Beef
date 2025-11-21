import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import MainLayout from "./layouts/MainLayout.jsx"; // 👈 importa tu layout
import AdminHome from "./pages/AdminHome.jsx"; // 👈 nuevo
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
        <Route path="/adminhome" element={<AdminHome />} /> {/* 👈 nueva ruta */}
        <Route path="/inventary" element={<Inventary />} /> {/* 👈 nueva ruta */}
        <Route path="/menumanagement" element={<MenuManagement />} /> {/* 👈 nueva ruta */}
        <Route path="/burgeredit" element={<BurgerEdit />} /> {/* 👈 nueva ruta */}
        <Route path="/ordermanagement" element={<OrderManagement />} /> {/* 👈 nueva ruta */}
      </Route>
    </Routes>
  );
}

export default App;
