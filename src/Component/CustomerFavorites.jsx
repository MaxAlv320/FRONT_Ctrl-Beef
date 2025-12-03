import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { getProducts } from "../js/products.js";
import img1 from "../assets/classicburger.jpg";
import img2 from "../assets/cheesedeluxe.jpg";
import img3 from "../assets/checkencrispy.jpg";

const CustomerFavorites = () => {
  const [favorites, setFavorites] = useState([]);
  const img = [img1, img2, img3];

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const products = await getProducts();
        const selected = products.slice(0, 3).map((item, i) => ({
          id: item.id || i,
          name: item.name,
          description: item.description,
          price: item.price,
          img: img[i] || img1,
        }));
        setFavorites(selected);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <section className="container my-5">
      <h3 className="mb-4 text-center fw-bold">Customer Favorites</h3>
      <div className="row justify-content-center">
        {favorites.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <Card className="h-100 shadow-sm border-0">
              <Card.Img
                variant="top"
                src={item.img}
                height="230"
                style={{ objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <h6 className="text-warning fw-bold">${item.price}</h6>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <Button
          variant="outline-dark"
          href="/menu"
          className="btn-order-now fw-bold px-4"
        >
          Order now
        </Button>
      </div>
    </section>
  );
};

export default CustomerFavorites;
