import React from 'react';
import { useCart } from './CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cart, totalQuantity, totalAmount } = useCart();

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <div>
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
