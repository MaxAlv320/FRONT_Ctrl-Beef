import TopBar from "../Component/TopBar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  );
}
