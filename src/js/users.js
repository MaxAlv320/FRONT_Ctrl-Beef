export async function postUsers() {
  const url = "https://hylotropic-renee-unexcrescently.ngrok-free.dev/"; // Replace with your API endpoint

  const headers = {
    'Authorization': 'Bearer YOUR_AUTH_TOKEN', // Example: Authorization header
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOiJDdHJsQmVlZiIsImlhdCI6MTc2MjI3MzQwMCwiZXhwIjoxNzkzMzc3NDAwfQ.PNLW05qyUE0ydxI1ji77CT_DbvY7x0GPFzGLLtA3Ynk': 'application/json',        // Example: Content-Type header
    'x-app-token': 'My-Custom-Value',       // Example: Custom header
    'ngrok-skip-browser-warning' : true
    };

  /*const headers = {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": true, // Example: Content-Type header
  };*/

  try {
    const response = await fetch(url + "api/users", {
      method: "GET", // Explicitly set method to GET (optional for GET, but good practice)
      headers: headers,
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
