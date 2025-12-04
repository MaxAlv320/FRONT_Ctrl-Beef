import TopBar from "../Component/TopBar";
import Navbar from "../Component/Navbar";
import { Outlet, useLocation } from "react-router-dom";

export default function MainLayout() {
  const location = useLocation();

  const adminRoutes = {
    "/adminhome": "Admin Home",
    "/inventary": "Inventory",
    "/menumanagement": "Menu Management",
    "/burgeredit": "Edit Burger",
    "/ordermanagement": "Order Management",
  };

  const currentPath = location.pathname;
  const adminTitle = adminRoutes[currentPath];

  return (
    <>
      {!adminTitle && <TopBar />}
      {adminTitle && <Navbar title={adminTitle} />}
      <div style={{ marginTop: adminTitle ? "120px" : "0px" }}>
        <Outlet />
      </div>
    </>
  );
}
