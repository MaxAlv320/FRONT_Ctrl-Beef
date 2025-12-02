import Order from "../Component/Order.jsx";
import "../styles/inventary.css";
import React from "react";
import Navbar from "../Component/Navbar.jsx";
import StatusButton from "../Component/StatusButton.jsx";

const OrderManagement = () => {
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
          marginTop: "180px",
          fontFamily: "'Inria Sans', sans-serif",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",     // CENTRADO REAL
        }}
      >

        {/* Título */}
        <h2
          style={{
            color: "#000",
            fontSize: "2.4rem",
            fontWeight: "bold",
            width: "55vw",
            textAlign: "left",
          }}
        >
          Orders
        </h2>

        {/* ID + Input */}
        <div
          style={{
            marginTop: "15px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            width: "55vw",
          }}
        >
          <span
            style={{
              fontSize: "1.6rem",
              fontWeight: "bold",
              color: "#000",
            }}
          >
            ID:
          </span>

          <input
            type="text"
            placeholder="Enter ID"
            style={{
              fontSize: "1.4rem",
              padding: "8px 14px",
              borderRadius: "15px",
              border: "2px solid #000",
              width: "160px",
              outline: "none",
            }}
          />
        </div>

        {/* BOTONES */}
        <div
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "25px",
            width: "55vw",
          }}
        >
          <StatusButton title="Search" />
          <StatusButton title="Finished" />
          <StatusButton title="In Progress" />
          <StatusButton title="Delete" />
        </div>

        {/* Encabezado */}
        <div style={{ marginTop: "30px" }}>
          <Order id="ID" name="Name" status="Status" />
        </div>

        {/* TABLA */}
        <table
          style={{
            marginTop: "10px",
            width: "55vw",                        // IGUAL QUE ORDER
            borderCollapse: "collapse",
            fontSize: "1.8rem",
          }}
        >
          <tbody>
            {orders.map((item, index) => (
              <tr
                key={index}
                style={{
                  borderBottom: "2px solid #ddd",
                  height: "90px",                 // IGUAL QUE ORDER
                }}
              >
                <td style={{ textAlign: "left", width: "33%" }}>
                  {item.id}
                </td>

                <td style={{ textAlign: "center", width: "33%" }}>
                  {item.name}
                </td>

                <td style={{ textAlign: "right", width: "33%" }}>
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
