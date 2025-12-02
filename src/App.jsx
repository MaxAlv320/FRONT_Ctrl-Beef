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
import ProtectedAdmin from "./Component/ProtectedRoute.jsx";

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

        {/* 🔐 RUTAS PROTEGIDAS PARA ADMIN */}
        <Route
          path="/adminhome"
          element={
            <ProtectedAdmin>
              <AdminHome />
            </ProtectedAdmin>
          }
        />

        <Route
          path="/inventary"
          element={
            <ProtectedAdmin>
              <Inventary />
            </ProtectedAdmin>
          }
        />

        <Route
          path="/menumanagement"
          element={
            <ProtectedAdmin>
              <MenuManagement />
            </ProtectedAdmin>

          }
        />

        <Route
          path="/burgeredit"
          element={
            <ProtectedAdmin>
              <BurgerEdit />
            </ProtectedAdmin>
           
          }
        />

        <Route
          path="/ordermanagement"
          element={
            <ProtectedAdmin>
              <OrderManagement />
            </ProtectedAdmin>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
