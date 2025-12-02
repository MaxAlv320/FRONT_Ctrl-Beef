const API_URL =
  "https://hylotropic-renee-unexcrescently.ngrok-free.dev/api/items";

export async function getItems() {
  const url =
    "https://hylotropic-renee-unexcrescently.ngrok-free.dev/api/items";

  const token = sessionStorage.getItem("token");

  const headers = {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true",
    Authorization: `Bearer ${token}`,
    "x-app-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOiJDdHJsQmVlZiIsImlhdCI6MTc2NDE3MzkwOCwiZXhwIjoxNzk1Mjc3OTA4fQ.aYiSMuLILGQt07Too8BY-x9UBmbPQhI3HJhHST1gbLQ",
  };

  const response = await fetch(url, {
    method: "GET",
    headers,
  });

  if (!response.ok) {
    throw new Error(`Error HTTP ${response.status}`);
  }

  return await response.json();
}

// 🔥 PATCH STOCK
// items.js

// 🔥 PATCH STOCK - CORREGIDO
// items.js
export async function patchItemStock(id, amount) {
  try {
    if (!id) throw new Error("❌ itemId está vacío o undefined");

    const url = `https://hylotropic-renee-unexcrescently.ngrok-free.dev/api/items/${id}/stock`;

    const token = sessionStorage.getItem("token");

    // Verificación del token
    if (!token) {
      console.error("❌ Token no encontrado en sessionStorage");
      throw new Error("No autenticado. Por favor, inicie sesión nuevamente.");
    }

    console.log("🔑 Token obtenido");
    console.log("📤 Enviando PATCH a:", url);
    console.log("📝 Amount enviado:", amount);

    const headers = {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "true",
      Authorization: `Bearer ${token}`,
      "x-app-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOiJDdHJsQmVlZiIsImlhdCI6MTc2NDE3MzkwOCwiZXhwIjoxNzk1Mjc3OTA4fQ.aYiSMuLILGQt07Too8BY-x9UBmbPQhI3HJhHST1gbLQ",
    };

    const body = JSON.stringify({ amount });

    const response = await fetch(url, {
      method: "PATCH",
      headers,
      body,
    });

    console.log("📥 Response status:", response.status);

    if (!response.ok) {
      let errorMessage = `Error HTTP ${response.status}`;

      try {
        const errorData = await response.json();
        errorMessage += `: ${errorData.message || JSON.stringify(errorData)}`;
      } catch (e) {
        const errorText = await response.text();
        errorMessage += `: ${errorText}`;
      }

      // Si es 401, el token es inválido
      if (response.status === 401) {
        console.error("⚠️ Token inválido o expirado");
        sessionStorage.removeItem("token");
        throw new Error(
          "Sesión expirada. Por favor, inicie sesión nuevamente."
        );
      }

      throw new Error(errorMessage);
    }

    const result = await response.json();
    console.log("✅ Stock actualizado exitosamente:", result);
    return result;
  } catch (error) {
    console.error("❌ Error en patchItemStock:", error);
    throw error;
  }
}
// 🔍 Buscar item por nombre
export async function getItemByName(name) {
  const url = `https://hylotropic-renee-unexcrescently.ngrok-free.dev/api/items/name/${name}`;

  const token = sessionStorage.getItem("token");

  const headers = {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true",
    Authorization: `Bearer ${token}`,
    "x-app-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOiJDdHJsQmVlZiIsImlhdCI6MTc2NDE3MzkwOCwiZXhwIjoxNzk1Mjc3OTA4fQ.aYiSMuLILGQt07Too8BY-x9UBmbPQhI3HJhHST1gbLQ",
  };

  const response = await fetch(url, {
    method: "GET",
    headers,
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error(`Error HTTP ${response.status}`);
  }

  return await response.json();
}
