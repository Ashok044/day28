import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Fetch JSON data
    axios.get('https://path/to/your/json/data')
      .then(response => {
        setCart(response.data);
        updateTotals(response.data);
      });
  }, []);

  const updateTotals = (cartItems) => {
    const totalQty = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const totalAmt = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalQuantity(totalQty);
    setTotalAmount(totalAmt);
  };

  const increaseQuantity = (id) => {
    const updatedCart = cart.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    updateTotals(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map(item => 
      item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart);
    updateTotals(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, totalQuantity, totalAmount, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
