import React from 'react';
import { useCart } from './CartContext';

const CartItem = ({ item }) => {
  const { increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className="cart-item">
      <h2>{item.name}</h2>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => decreaseQuantity(item.id)}>-</button>
      <button onClick={() => increaseQuantity(item.id)}>+</button>
    </div>
  );
};

export default CartItem;
