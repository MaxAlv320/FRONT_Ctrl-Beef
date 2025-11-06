export async function postRegisterUsers(userData) {
  const url = "https://hylotropic-renee-unexcrescently.ngrok-free.dev/"; // Replace with your API endpoint

  const headers = {
    Authorization: "Bearer YOUR_AUTH_TOKEN", // Example: Authorization header
    "Content-Type": "application/json", // Example: Content-Type header
    "x-app-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOiJDdHJsQmVlZiIsImlhdCI6MTc2MjI3MzQwMCwiZXhwIjoxNzkzMzc3NDAwfQ.PNLW05qyUE0ydxI1ji77CT_DbvY7x0GPFzGLLtA3Ynk", // Example: Custom header
    "ngrok-skip-browser-warning": true,
  };

  /*const headers = {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": true, // Example: Content-Type header
  };*/

  try {
    const response = await fetch(url + "api/users/register", {
      method: "POST", // Explicitly set method to GET (optional for GET, but good practice)
      headers: headers,
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function postLoginUsers(userData) {
  const url =
    "https://hylotropic-renee-unexcrescently.ngrok-free.dev/api/users/login";

  const headers = {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true",
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(userData), // 👈 Enviamos las credenciales aquí
    });

    if (!response.ok) {
      console.error("Login failed with status:", response.status);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Fetched data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
