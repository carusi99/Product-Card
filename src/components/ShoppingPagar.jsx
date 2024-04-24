import React from "react";

export default function ShoppingPagar({ cart, removeFromCart, calculateTotal }) {
  return (
    <div className="shopping-cart">
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <div className="cart-item">
              <div className="item-info">
                <p>{product.name}</p>
              </div>
              <p className="item-price">${product.price * product.quantity}</p>
            </div>
          </li>
        ))}
      </ul>
      <p>Total: ${calculateTotal()}</p>
    </div>
  );
}
