export async function getProducts() {
  const url =
    "https://hylotropic-renee-unexcrescently.ngrok-free.dev/api/products";

  const token = sessionStorage.getItem("token"); 

  if (!token) {
    console.error("Token NO encontrado en sessionStorage");
  } else {
    console.log("Token encontrado:", token);
  }

  const headers = {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true",
    Authorization: `Bearer ${token}`,       
    "x-app-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOiJDdHJsQmVlZiIsImlhdCI6MTc2NDYwNTk3NywiZXhwIjoxNzk1NzA5OTc3fQ.LnhVpUZPFQzUqDB2ZIOFfy2DZG1utRd-kizP1h6aH4A",
  };

  console.log("HEADERS PRODUCTS:", headers);

  const response = await fetch(url, {
    method: "GET",
    headers,
  });

  if (!response.ok) {
    throw new Error(`Error HTTP ${response.status}`);
  }

  return await response.json();
}
