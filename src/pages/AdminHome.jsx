import React from "react";
import AdminCard from "../Component/AdminCard.jsx";
import Footer from "../component/Footer.jsx";
import "../styles/adminhome.css";
import { useNavigate } from "react-router-dom";
import heroImageAdmin1 from "../assets/burgerAdmin1.jpg";
import Navbar from "../Component/Navbar.jsx";

const AdminHome = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar title="Welcome, Admin!" />

      <section
        className="hero-section text-center text-white d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${heroImageAdmin1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          marginTop: "0px", // antes 200px
        }}
      >
        <div className="overlay"></div>
        <div className="content">
          <h2 className="what">What you want to do?</h2>
        </div>
      </section>

      <section className="container my-5">
        <div
          className="row justify-content-between align-items-center text-center"
          style={{ marginTop: "50px" }}
        >
          <div className="col-md-3 d-flex justify-content-center">
            <AdminCard
              title="Remove Rroducts"
              onClick={() => navigate("/inventary")}
            />
          </div>
          <div className="col-md-3 d-flex justify-content-center">
            <AdminCard
              title="Menu Management"
              onClick={() => navigate("/menumanagement")}
            />
          </div>
          <div className="col-md-3 d-flex justify-content-center">
            <AdminCard
              title="Registered Users"
              onClick={() => navigate("/ordermanagement")}
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AdminHome;
