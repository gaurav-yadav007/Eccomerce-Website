// Cart.js
import React from 'react';
import { useCart } from './CartContext';

import "./Cart.css";

function Cart() {
  const { cartItems, removeFromCart } = useCart();  // Destructure removeFromCart from useCart

  function handleRemoveFromCart(itemId){
    removeFromCart(itemId);
  }

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <ul className="cart-items">
        {cartItems.length === 0 ? (
          <div>
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/your-cart-is-empty-2161427-1815069.png" alt="Empty Cart" />
            <h1>Your Cart is Empty !!!</h1>
          </div>
        ) : (
          cartItems.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.Itemname} />
              <div className="cart-item-details">
                <p>{item.Itemname}</p>
                <p>${item.price}</p>
                <button onClick={() => handleRemoveFromCart(item._id)}>Remove From Cart</button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Cart;
