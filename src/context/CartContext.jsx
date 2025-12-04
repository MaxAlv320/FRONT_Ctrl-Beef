import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    try {
      const raw = sessionStorage.getItem("cart_v1");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  //Para guardar carrito 
  useEffect(() => {
    console.log(" Carrito actualizado:", items);
    sessionStorage.setItem("cart_v1", JSON.stringify(items));
  }, [items]);

  //Para agrega los productos al cart
  const addItem = (product) => {
    console.log("agrego el porducto:", product);
    
    if (!product || !product.id) {
      console.error("Producto inválido:", product);
      return;
    }
    
    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => 
        item.id === product.id
      );
      
      console.log("Índice encontrado:", existingIndex);
      
      if (existingIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingIndex] = {
          ...updatedItems[existingIndex],
          quantity: updatedItems[existingIndex].quantity + 1
        };
        console.log(" suma de cantidads :", updatedItems[existingIndex].quantity);
        return updatedItems;
      } else {
        const newItem = {
          ...product,
          quantity: 1
        };
        console.log("Agregando nuevo producto:", newItem);
        return [...prevItems, newItem];
      }
    });
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const increase = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrease = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id 
          ? { ...item, quantity: Math.max(0, item.quantity - 1) } 
          : item
      ).filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setItems([]);
    console.log("bajo mis condiciones");
  };

  const totalItems = items.reduce((total, item) => total + (item.quantity || 0), 0);

  const subtotal = items.reduce(
    (total, item) => total + (item.price || 0) * (item.quantity || 0),
    0
  );

  console.log("los porductos:", items.length, "Total items:", totalItems, "Subtotal:", subtotal);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        increase,
        decrease,
        clearCart,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};