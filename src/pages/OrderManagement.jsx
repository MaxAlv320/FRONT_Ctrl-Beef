import Order from "../Component/Order.jsx";
import "../styles/inventary.css";
import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar.jsx";
import StatusButton from "../Component/StatusButton.jsx";
import { getAllUsers } from "../js/users.js";

const OrderManagement = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchEmail, setSearchEmail] = useState("");

  useEffect(() => {
    const loadUsers = async () => {
      try {
        console.log(
          "TOKEN AL ENTRAR A OrderManagement:",
          sessionStorage.getItem("token")
        );

        const data = await getAllUsers();
        const usersData = data.users || data || [];
        setUsers(usersData);
        setFilteredUsers(usersData);
      } catch (error) {
        console.error("Error loading users:", error);
      }
    };

    loadUsers();
  }, []);

  // Función para filtrar usuarios por email
  const handleSearch = () => {
    if (!searchEmail.trim()) {
      setFilteredUsers(users);
      return;
    }

    const filtered = users.filter((user) =>
      user.email.toLowerCase().includes(searchEmail.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  // También se puede buscar al presionar Enter
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <Navbar title="Registered Users" />

      <div
        style={{
          marginTop: "180px",
          fontFamily: "'Inria Sans', sans-serif",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
          Users
        </h2>

        {/* Buscador por Email */}
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
            Email:
          </span>

          <input
            type="text"
            placeholder="Enter email to search"
            value={searchEmail}
            onChange={(e) => setSearchEmail(e.target.value)}
            onKeyPress={handleKeyPress}
            style={{
              fontSize: "1.4rem",
              padding: "8px 14px",
              borderRadius: "15px",
              border: "2px solid #000",
              width: "300px",
              outline: "none",
            }}
          />
        </div>

        {/* Encabezado */}
        <div style={{ marginTop: "30px", width: "55vw" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "1.8rem",
              fontWeight: "bold",
              borderBottom: "2px solid #000",
              paddingBottom: "10px",
            }}
          >
            <div style={{ width: "50%", textAlign: "center" }}>Name</div>
            <div style={{ width: "50%", textAlign: "center" }}>Email</div>
          </div>
        </div>

        {/* TABLA DE USUARIOS */}
        <div style={{ marginTop: "10px", width: "55vw" }}>
          {filteredUsers.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "40px",
                fontSize: "1.8rem",
                color: "#666",
              }}
            >
              {searchEmail
                ? "No users found with that email"
                : "No registered users found"}
            </div>
          ) : (
            filteredUsers.map((user, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "2px solid #ddd",
                  height: "90px",
                  fontSize: "1.8rem",
                }}
              >
                <div style={{ width: "50%", textAlign: "center" }}>
                  {user.name}
                </div>
                <div style={{ width: "50%", textAlign: "center" }}>
                  {user.email}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default OrderManagement;
