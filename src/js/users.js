const API = "https://hylotropic-renee-unexcrescently.ngrok-free.dev/api";

export async function postLoginUsers(userData) {
  const url =
    "https://hylotropic-renee-unexcrescently.ngrok-free.dev/api/users/login";

  const headers = {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true",
    "x-app-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOiJDdHJsQmVlZiIsImlhdCI6MTc2NDYwNTk3NywiZXhwIjoxNzk1NzA5OTc3fQ.LnhVpUZPFQzUqDB2ZIOFfy2DZG1utRd-kizP1h6aH4A",
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok || !data.token) {
      throw new Error(data.message || "Invalid credentials");
    }

    // ⬅️⬅️ GUARDAR TOKEN CORRECTAMENTE
    sessionStorage.setItem("token", data.token);

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function postRegisterUsers(userData) {
  const url =
    "https://hylotropic-renee-unexcrescently.ngrok-free.dev/api/users/register";

  const headers = {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true",
    "x-app-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOiJDdHJsQmVlZiIsImlhdCI6MTc2NDE3MzkwOCwiZXhwIjoxNzk1Mjc3OTA4fQ.aYiSMuLILGQt07Too8BY-x9UBmbPQhI3HJhHST1gbLQ",
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.message || "Error in register");
    }

    const data = await response.json();
    console.log("Usuario registrado:", data);

    return data;
  } catch (error) {
    console.error("Error en register:", error);
    throw error;
  }
}

export async function getAllUsers() {
  const token = sessionStorage.getItem("token");

  console.log("TOKEN USADO EN getAllUsers:", token);

  if (!token) {
    throw new Error("Usuario no autenticado");
  }

  try {
    const response = await fetch(`${API}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
        Authorization: `Bearer ${token}`,
        "x-app-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOiJDdHJsQmVlZiIsImlhdCI6MTc2NDE3MzkwOCwiZXhwIjoxNzk1Mjc3OTA4fQ.aYiSMuLILGQt07Too8BY-x9UBmbPQhI3HJhHST1gbLQ",
      },
    });

    if (!response.ok) {
      throw new Error(`Error al obtener usuarios: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error en getAllUsers:", error);
    throw error;
  }
}

export async function getUserByEmail(email) {
  const url = `${API}/users/email?email=${encodeURIComponent(email)}`;

  const headers = {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true",
    "x-app-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOiJDdHJsQmVlZiIsImlhdCI6MTc2NDYwNTk3NywiZXhwIjoxNzk1NzA5OTc3fQ.LnhVpUZPFQzUqDB2ZIOFfy2DZG1utRd-kizP1h6aH4A",
  };

  try {
    const response = await fetch(url, {
      method: "GET",
      headers,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "User not found");
    }

    return data;
  } catch (error) {
    console.error("Error getting user by email:", error);
    throw error;
  }
}
