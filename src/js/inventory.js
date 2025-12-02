// js/inventory.js
const API_URL = 'https://hylotropic-renee-unexcrescently.ngrok-free.dev/api/users/items';

export async function updateInventory(items) {
  try {
    const token = sessionStorage.getItem('token');
    
    if (!token) {
      throw new Error('No authentication token found');
    }

    const response = await fetch(API_URL, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ items })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API Error: ${response.status} - ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error updating inventory:', error);
    throw error;
  }
}