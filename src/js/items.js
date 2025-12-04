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

export async function postBuyItem(itemsData) {
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

  let formattedItems = [];

  if (Array.isArray(itemsData)) {
    formattedItems = itemsData.map((item) => {
      if (item && typeof item === "object" && item.id) {
        return {
          id: item.id,
          quantity: Number(item.quantity) || 1,
        };
      }
      return {
        id: item,
        quantity: 1,
      };
    });
  } else {
    if (itemsData && typeof itemsData === "object" && itemsData.id) {
      formattedItems = [
        {
          id: itemsData.id,
          quantity: Number(itemsData.quantity) || 1,
        },
      ];
    } else {
      formattedItems = [
        {
          id: itemsData,
          quantity: 1,
        },
      ];
    }
  }

  const body = JSON.stringify({
    items: formattedItems,
  });

  console.log("Intentando con PATCH...");

  try {
    let response = await fetch(url, {
      method: "PATCH",
      headers,
      body: body,
    });

    if (!response.ok && response.status === 404) {
      console.log("PATCH falló, intentando con POST...");
      response = await fetch(url, {
        method: "POST",
        headers,
        body: body,
      });
    }

    if (!response.ok && response.status === 404) {
      console.log("POST falló, intentando con PUT...");
      response = await fetch(url, {
        method: "PUT",
        headers,
        body: body,
      });
    }

    const responseText = await response.text();
    console.log("Status:", response.status);
    console.log("Response:", responseText);

    if (!response.ok) {
      throw new Error(
        `Error ${response.status}: ${responseText || response.statusText}`
      );
    }

    try {
      const parsed = JSON.parse(responseText);

      if (parsed.results && Array.isArray(parsed.results)) {
        const errors = parsed.results.filter((r) => r.status === "error");
        if (errors.length > 0) {
          const errorMessages = errors.map((e) => `ID ${e.id}: ${e.message}`);
          throw new Error(errorMessages.join("; "));
        }
      }

      return parsed;
    } catch (e) {
      console.log("Respuesta no JSON, pero éxito:", responseText);
      return { success: true, message: "Compra realizada", raw: responseText };
    }
  } catch (error) {
    console.error("Error en postBuyItem:", error);
    throw error;
  }
}

export async function patchItemStock(id, amount) {
  const url = `https://hylotropic-renee-unexcrescently.ngrok-free.dev/api/items/${id}/stock`;

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
      method: "PATCH",
      headers,
      body: JSON.stringify({ amount }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error HTTP ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en patchItemStock:", error);
    throw error;
  }
}
