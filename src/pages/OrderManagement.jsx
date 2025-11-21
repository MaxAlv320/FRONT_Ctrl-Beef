import Order from "../Component/Order.jsx";
import "../styles/inventary.css";
import React from "react";
import Navbar from "../Component/Navbar.jsx";
import StatusButton from "../Component/StatusButton.jsx";


const OrderManagement = () => {


  // JSON de ejemplo conectado a la tabla
  const orders = [
    { id: "001", name: "Diego", status: "Pending" },
    { id: "002", name: "Frida", status: "Completed" },
    { id: "003", name: "Valeria", status: "In Progress" }
  ];


  return (
    <>
  <Navbar title="Order Management" />


  <div
  style={{
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "20px",
    marginTop: "280px",   // espacio debajo del navbar
    paddingLeft: "120px", // alineado con los botones
    fontFamily: "'Inria Sans', sans-serif",
  }}
>
  <span
    style={{
      fontSize: "3rem",
      fontWeight: "bold",
      color: "#000000ff",
    }}
  >
    ID:
  </span>


  <input
    type="text"
    placeholder="Enter ID"
    style={{
      fontSize: "2.8rem",
      padding: "10px 20px",
      borderRadius: "20px",
      border: "2px solid #000",
      fontFamily: "'Inria Sans', sans-serif",
      outline: "none",
    }}
  />
</div>


  {/* BOTONES EN FILA */}
<div
  style={{
    display: "flex",
    justifyContent: "flex-start", // alineados a la izquierda
    alignItems: "center",
    gap: "30px",
    marginTop: "220px", // más separados del navbar
    paddingLeft: "120px", // moverlos hacia la izquierda sin pegar al borde
  }}
>
  <StatusButton title="Search" />
  <StatusButton title="Finished" />
  <StatusButton title="In Progress" />
  <StatusButton title="Delete" />
</div>




  <div style={{ paddingTop: "100px", textAlign: "center" }}>
    <h2
      style={{
        color: "#000000ff",
        fontSize: "150px",
        fontFamily: "'Inria Sans', sans-serif",
        fontWeight: "bold",
        marginTop: "0px",
      }}
    >
      Order Management
    </h2>


    {/* Encabezado */}
    <div style={{ marginTop: "100px" }}>
      <Order id="ID" name="Name" status="Status" />
    </div>


    {/* TABLA */}
    <table
      style={{
        margin: "50px auto",
        width: "70vw",
        borderCollapse: "collapse",
        fontFamily: "'Inria Sans', sans-serif",
        fontSize: "3rem",
      }}
    >
      <tbody>
        {orders.map((item, index) => (
          <tr
            key={index}
            style={{
              borderBottom: "2px solid #ddd",
              height: "120px",
            }}
          >
            <td style={{ paddingLeft: "60px", width: "33%", textAlign: "left" }}>
              {item.id}
            </td>


            <td style={{ width: "33%", textAlign: "center" }}>
              {item.name}
            </td>


            <td style={{ paddingRight: "60px", width: "33%", textAlign: "right" }}>
              {item.status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</>
  );
};


export default OrderManagement;
