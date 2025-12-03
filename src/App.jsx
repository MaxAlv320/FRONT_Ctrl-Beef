import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import Checkout from "./pages/Checkout.jsx";
import CheckoutPayment from "./pages/CheckoutPayment.jsx";
import OrderReady from "./pages/OrderReady";

function App() {
  return (
    <CartProvider>
      <Routes>
        {/* RUTAS SIN TOPBAR */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />   {/* <---- aquí */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<ForgotPassword />} />

        {/* RUTAS CON TOPBAR (MainLayout) */}
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkoutpayment" element={<CheckoutPayment />} />
          <Route path="/orderready" element={<OrderReady />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
