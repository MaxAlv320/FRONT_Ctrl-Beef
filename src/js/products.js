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

export async function deleteProduct(id) {
  const url = `https://hylotropic-renee-unexcrescently.ngrok-free.dev/api/products/${id}`;

  const token = sessionStorage.getItem("token");

  if (!token) {
    console.error("Token NO encontrado en sessionStorage");
    throw new Error("Token no encontrado. Por favor, inicie sesión.");
  }

  const headers = {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true",
    Authorization: `Bearer ${token}`,
    "x-app-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOiJDdHJsQmVlZiIsImlhdCI6MTc2NDYwNTk3NywiZXhwIjoxNzk1NzA5OTc3fQ.LnhVpUZPFQzUqDB2ZIOFfy2DZG1utRd-kizP1h6aH4A",
  };

  console.log(`Eliminando producto con ID: ${id}`);
  console.log("HEADERS DELETE:", headers);

  const response = await fetch(url, {
    method: "DELETE",
    headers,
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`Error HTTP ${response.status}:`, errorText);
    throw new Error(
      `Error al eliminar producto: ${response.status} ${errorText}`
    );
  }

  if (response.status === 204) {
    return { success: true, message: "Producto eliminado exitosamente" };
  }

  return await response.json();
}
