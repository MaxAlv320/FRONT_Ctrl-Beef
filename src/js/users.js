export async function postLoginUsers(userData) {
  const url =
    "https://hylotropic-renee-unexcrescently.ngrok-free.dev/api/users/login";

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

    const data = await response.json();

    if (!response.ok || !data.token) {
      throw new Error(data.message || "Invalid credentials");
    }

    //Para guardar el token correctamente
    sessionStorage.setItem("token", data.token);

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}


export async function postRegisterUsers(userData) {
  const url = "https://hylotropic-renee-unexcrescently.ngrok-free.dev/api/users/register";

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
