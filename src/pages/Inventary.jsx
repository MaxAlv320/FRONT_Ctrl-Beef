// Inventary.jsx
import Ingredient from "../Component/Ingredient.jsx";
import "../styles/inventary.css";
import React, { useState, useEffect } from "react";
import Navbar from "../Component/Navbar.jsx";
import SaveButton from "../Component/SaveButton.jsx";
import { updateInventory } from "../js/inventory.js";

// 🧾 Importa todos los ingredientes
import Burger0 from "../assets/0burger.jpg";
import Burger1 from "../assets/1burger.jpg";
import Burger2 from "../assets/2burger.jpg";
import Burger3 from "../assets/3burger.jpg";
import Burger4 from "../assets/4burger.jpg";
import Burger5 from "../assets/5burger.jpg";
import Burger6 from "../assets/6burger.jpg";
import Burger7 from "../assets/7burger.jpg";

const Inventary = () => {
  // Estado para almacenar todos los ingredientes
  const [ingredients, setIngredients] = useState([
    { id: 1, title: "Classic Burger", image: Burger0, quantity: 0 },
    { id: 2, title: "Cheese Burger", image: Burger1, quantity: 0 },
    { id: 3, title: "BBQ Special", image: Burger2, quantity: 0 },
    { id: 4, title: "Chicken Burger", image: Burger3, quantity: 0 },
    { id: 5, title: "Mexican Burger", image: Burger4, quantity: 0 },
    { id: 6, title: "Super Tocino", image: Burger5, quantity: 0 },
    { id: 7, title: "Vegetarian", image: Burger6, quantity: 0 },
    { id: 8, title: "Fish Burger", image: Burger7, quantity: 0 }
  ]);

  // Estado para el botón de guardar
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  // Función para actualizar la cantidad de un ingrediente
  const updateIngredientQuantity = (id, newQuantity) => {
    setIngredients(prevIngredients => 
      prevIngredients.map(ingredient =>
        ingredient.id === id ? { ...ingredient, quantity: newQuantity } : ingredient
      )
    );
  };

  // Función para guardar en la API
  const handleSave = async () => {
    setIsSaving(true);
    setSaveMessage('');
    
    try {
      // Prepara los datos para enviar
      const itemsToSend = ingredients.map(ing => ({
        name: ing.title,
        quantity: ing.quantity
      }));

      console.log('📤 Sending data:', itemsToSend);

      // Llama a la función de la API
      const result = await updateInventory(itemsToSend);
      
      console.log('✅ Succesful save', result);
      setSaveMessage({ type: 'success', text: '¡Inventario saved succesfully!' });
      
      // Mensaje se limpia después de 3 segundos
      setTimeout(() => setSaveMessage(''), 3000);
      
    } catch (error) {
      console.error('❌ Error saving:', error);
      
      // Mensajes de error específicos
      if (error.message.includes('401') || error.message.includes('403')) {
        setSaveMessage({ 
          type: 'error', 
          text: 'Autentication error. Start session.' 
        });
      } else if (error.message.includes('No authentication token')) {
        setSaveMessage({ 
          type: 'error', 
          text: 'You must start session.' 
        });
      } else {
        setSaveMessage({ 
          type: 'error', 
          text: `Error to save: ${error.message}` 
        });
      }
      
      // El mensaje de error permanece hasta que el usuario lo cierre
    } finally {
      setIsSaving(false);
    }
  };

  // Verificar si hay cambios sin guardar (opcional)
  const hasUnsavedChanges = ingredients.some(ing => ing.quantity > 0);

  return (
    <>
      <Navbar title="Inventary"/>

      <div style={{ paddingTop: "50px", textAlign: "center" }}>
        <h2
          style={{
            color: "#000000ff",
            fontSize: "70px",
            fontFamily: "'Inria Sans', sans-serif",
            fontWeight: "bold",
          }}
        >
          Burgers
        </h2>

        {/* Mensaje de estado */}
        {saveMessage && (
          <div style={{
            margin: '20px auto',
            padding: '10px 20px',
            borderRadius: '5px',
            width: 'fit-content',
            backgroundColor: saveMessage.type === 'success' ? '#d4edda' : '#f8d7da',
            color: saveMessage.type === 'success' ? '#155724' : '#721c24',
            border: `1px solid ${saveMessage.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`,
            fontSize: '16px'
          }}>
            {saveMessage.text}
          </div>
        )}

        {/* Mostrar si hay cambios sin guardar */}
        {hasUnsavedChanges && !isSaving && !saveMessage && (
          <div style={{
            margin: '10px auto',
            color: '#856404',
            backgroundColor: '#fff3cd',
            padding: '5px 15px',
            borderRadius: '5px',
            display: 'inline-block'
          }}>
            ⚠️ There are changes unsaved
          </div>
        )}

        <div style={{ marginTop: "40px" }}>
          {ingredients.map((ingredient) => (
            <Ingredient
              key={ingredient.id}
              title={ingredient.title}
              image={ingredient.image}
              quantity={ingredient.quantity}
              onQuantityChange={(newQuantity) => 
                updateIngredientQuantity(ingredient.id, newQuantity)
              }
            />
          ))}
        </div>
      </div>

      <SaveButton 
        onClick={handleSave} 
        title={isSaving ? "Saving..." : "Save Inventory"}
        disabled={isSaving}
      />
    </>
  );
};

export default Inventary;