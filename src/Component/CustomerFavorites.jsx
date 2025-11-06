import React from "react";
import { Card, Button } from "react-bootstrap";

const favorites = [
  {
    id: 1,
    name: "Classic Burger",
    description: "100% beef, lettuce, tomato, onion",
    price: "$12.99",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800",
  },
  {
    id: 2,
    name: "Cheese Deluxe",
    description: "Double meat, cheddar cheese, bacon",
    price: "$15.99",
    img: "https://images.unsplash.com/photo-1606755962773-0e8b28e7a8c8?w=800",
  },
  {
    id: 3,
    name: "BBQ Special",
    description: "BBQ sauce, caramelized onion, jalapeños",
    price: "$14.99",
    img: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=800",
  },
];

const CustomerFavorites = () => {
  return (
    <section className="container my-5">
      <h3 className="mb-4">Customer Favorites</h3>
      <div className="row">
        {favorites.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={item.img}
                height="230"
                style={{ objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <h6 className="text-warning">{item.price}</h6>
                <Button variant="warning" className="fw-bold text-white">
                  Add
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <Button
          variant="outline-dark"
          href="/menu"
          className="btn-order-now fw-bold"
        >
          Order now
        </Button>
      </div>
    </section>
  );
};

export default CustomerFavorites;
