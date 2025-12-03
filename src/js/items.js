export async function getItems() {
  const url =
    "https://hylotropic-renee-unexcrescently.ngrok-free.dev/api/items";

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
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOiJDdHJsQmVlZiIsImlhdCI6MTc2NDE3MzkwOCwiZXhwIjoxNzk1Mjc3OTA4fQ.aYiSMuLILGQt07Too8BY-x9UBmbPQhI3HJhHST1gbLQ",
  };

  console.log("HEADERS ITEMS:", headers);

  const response = await fetch(url, {
    method: "GET",
    headers,
  });

  if (!response.ok) {
    throw new Error(`Error HTTP ${response.status}`);
  }

  return await response.json();
}


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
    cache: 'no-cache'
  });

  if (!response.ok) {
    throw new Error(`Error HTTP ${response.status}`);
  }

  return await response.json();
}