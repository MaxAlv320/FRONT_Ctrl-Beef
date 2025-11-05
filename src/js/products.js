export async function getProducts() {
  const url = "https://hylotropic-renee-unexcrescently.ngrok-free.dev/"; // Replace with your API endpoint

  /*const headers = {
    'Authorization': 'Bearer YOUR_AUTH_TOKEN', // Example: Authorization header
    'Content-Type': 'application/json',        // Example: Content-Type header
    'x-app-token': 'My-Custom-Value',       // Example: Custom header
    'ngrok-skip-browser-warning' : true
    };*/

  const headers = {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": true, // Example: Content-Type header
  };

  try {
    const response = await fetch(url + "api/products", {
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
