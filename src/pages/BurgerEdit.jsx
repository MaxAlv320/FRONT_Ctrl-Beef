import { useLocation } from "react-router-dom";
import Navbar from "../Component/Navbar.jsx";
import Edit from "../Component/Edit.jsx";
import SaveButton from "../Component/SaveButton.jsx";

const BurgerEdit = () => {
  const { state } = useLocation();
  const burger = state;

  return (
    <>
      <Navbar title="Edit Product" />

      <Edit burger={burger} />

      <SaveButton />
    </>
  );
};

export default BurgerEdit;
