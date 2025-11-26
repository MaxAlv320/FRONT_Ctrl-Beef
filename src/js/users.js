export async function postRegisterUsers(userData) {
  const url = "https://hylotropic-renee-unexcrescently.ngrok-free.dev/"; // Replace with your API endpoint

  const headers = {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true",
    Authorization: `Bearer ${sessionStorage.getItem("token")}`, // Example: Content-Type header
    "x-app-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOiJDdHJsQmVlZiIsImlhdCI6MTc2NDE3MzkwOCwiZXhwIjoxNzk1Mjc3OTA4fQ.aYiSMuLILGQt07Too8BY-x9UBmbPQhI3HJhHST1gbLQ",
  };

  console.log("HEADERS ENVIADOS:", headers);

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

    // Verificación segura
    if (!response.ok || !data.token) {
      throw new Error(data.message || "Invalid credentials");
    }

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
