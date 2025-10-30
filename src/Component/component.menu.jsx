import React from "react";

const MenuCard = ({ product }) => {
  const { name, description, img, price } = product;

  return (
    <div className="col-12 mb-4">
      <div className="card border-0">
        <div className="row g-0 align-items-center">
          <div className="col-md-3">
            <img
              className="img-fluid rounded"
              src={img}
              alt={name}
              style={{
                height: "120px",
                objectFit: "cover",
                width: "100%",
              }}
            />
          </div>

          <div className="col-md-7">
            <div className="card-body py-0">
              <h5 className="card-title mb-1 fw-bold">{name}</h5>
              <p className="card-text text-muted small mb-2">{description}</p>
            </div>
          </div>

          <div className="col-md-2 text-end">
            <div className="card-body py-0">
              <p className="card-text fw-bold text-danger mb-2">${price}</p>
              <button className="btn btn-outline-danger btn-sm">+ Add</button>
            </div>
          </div>
        </div>

        <div className="card-footer bg-transparent border-top mt-2"></div>
      </div>
    </div>
  );
};

export default MenuCard;
