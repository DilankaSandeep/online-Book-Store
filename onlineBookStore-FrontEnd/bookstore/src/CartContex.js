
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orderQuantities, setOrderQuantities] = useState({});

  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...existingCart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.alert(`${product.title} is added to cart`);
    
  };

  const removeFromCart = (productId) => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = existingCart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const increaseOrderQuantity = (itemId) => {
  
    setOrderQuantities((prevOrderQuantities) => ({
      ...prevOrderQuantities,
      [itemId]: (prevOrderQuantities[itemId] || 1) + 1,
    }));
  };
  const decreaseOrderQuantity = (itemId) => {
    setOrderQuantities((prevOrderQuantities) => ({
      ...prevOrderQuantities,
      [itemId]: Math.max((prevOrderQuantities[itemId] || 0) - 1, 1), 
    }));
  };
  return (
    <CartContext.Provider value={{ cart,orderQuantities, addToCart, removeFromCart,increaseOrderQuantity,decreaseOrderQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
