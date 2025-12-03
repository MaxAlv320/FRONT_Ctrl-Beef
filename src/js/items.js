// items.js - Archivo completo de API
export async function getItems() {
  const url =
    "https://hylotropic-renee-unexcrescently.ngrok-free.dev/api/items";

  const token = sessionStorage.getItem("token");

  if (!token) {
    console.error("Token NO encontrado en sessionStorage");
    throw new Error("No hay token de autenticación");
  }

  const headers = {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true",
    Authorization: `Bearer ${token}`,
    "x-app-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOiJDdHJsQmVlZiIsImlhdCI6MTc2NDE3MzkwOCwiZXhwIjoxNzk1Mjc3OTA4fQ.aYiSMuLILGQt07Too8BY-x9UBmbPQhI3HJhHST1gbLQ",
  };

  try {
    const response = await fetch(url, {
      method: "GET",
      headers,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error HTTP ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en getItems:", error);
    throw error;
  }
}

export async function getItemByName(name) {
  const url = `https://hylotropic-renee-unexcrescently.ngrok-free.dev/api/items/name/${name}`;

  const token = sessionStorage.getItem("token");

  if (!token) {
    throw new Error("No hay token de autenticación");
  }

  const headers = {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true",
    Authorization: `Bearer ${token}`,
    "x-app-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOiJDdHJsQmVlZiIsImlhdCI6MTc2NDE3MzkwOCwiZXhwIjoxNzk1Mjc3OTA4fQ.aYiSMuLILGQt07Too8BY-x9UBmbPQhI3HJhHST1gbLQ",
  };

  try {
    const response = await fetch(url, {
      method: "GET",
      headers,
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error(`Error HTTP ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error en getItemByName:", error);
    throw error;
  }
}

export async function postBuyItem(itemId, quantity = 1) {
  const url =
    "https://hylotropic-renee-unexcrescently.ngrok-free.dev/api/items/buy";

  const token = sessionStorage.getItem("token");

  if (!token) {
    throw new Error("Token no encontrado. Por favor, inicia sesión.");
  }

  const headers = {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true",
    Authorization: `Bearer ${token}`,
    "x-app-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOiJDdHJsQmVlZiIsImlhdCI6MTc2NDE3MzkwOCwiZXhwIjoxNzk1Mjc3OTA4fQ.aYiSMuLILGQt07Too8BY-x9UBmbPQhI3HJhHST1gbLQ",
  };

  const body = JSON.stringify({
    itemId: String(itemId),
    quantity: parseInt(quantity),
  });

  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: body,
    });

    const responseText = await response.text();

    if (!response.ok) {
      throw new Error(
        `Error ${response.status}: ${responseText || response.statusText}`
      );
    }

    try {
      const parsed = JSON.parse(responseText);

      // Verificar si hay errores en results
      if (parsed.results && Array.isArray(parsed.results)) {
        const errors = parsed.results.filter((r) => r.status === "error");
        if (errors.length > 0) {
          throw new Error(errors.map((e) => e.message).join(", "));
        }
      }

      return parsed;
    } catch (e) {
      return { success: true, message: "Compra realizada" };
    }
  } catch (error) {
    console.error("Error en postBuyItem:", error);
    throw error;
  }
}
