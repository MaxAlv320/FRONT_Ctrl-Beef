import React from "react";
import FeatureCard from "../Component/FeatureCard.jsx";
import CustomerFavorites from "../Component/CustomerFavorites";
import Footer from "../component/Footer.jsx";
import { Button } from "react-bootstrap";
import { FaClock, FaStar, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/home.css";
import heroImage from "../assets/burger2.jpg";

const Home = () => {
  const scrollToFooter = () => {
    const footer = document.getElementById("about-us");
    if (footer) footer.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section
        className="hero-section text-center text-white d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div className="overlay"></div>
        <div className="content">
          <h2>The Best Burgers in Town</h2>
          <p>Made with fresh ingredients and passion</p>
          
        </div>
      </section>

      <section className="container my-5">
        <div className="row g-4">
          <div className="col-md-4">
            <FeatureCard
              icon={<FaClock size={28} color="#f6a700" />}
              title="About Us"
              text="Learn more about our story"
              onClick={scrollToFooter}
            />
          </div>
          <div className="col-md-4">
            <FeatureCard
              icon={<FaStar size={28} color="#56070c" />}
              title="Promotions"
              text="Exclusive deals every week"
            />
          </div>
          <div className="col-md-4">
            <FeatureCard
              icon={<FaMapMarkerAlt size={28} color="#f6a700" />}
              title="Location"
              text=" Talamantes 716, Barrio de San Marcos"
            />
          </div>
        </div>
      </section>

      <CustomerFavorites />

      <Footer />
    </>
  );
};

export default Home;
