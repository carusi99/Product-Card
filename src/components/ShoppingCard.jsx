import React from "react";

export default function ShoppingCard({ products, addToCart, updateQuantity }) {
  return (
    <div className="product-list">
      <h2>Lista de Productos</h2>
      <ul className="product-grid">
        {products.map((product) => (
          <li key={product.id} className={`product-item ${product.quantity > 0 ? "highlighted" : ""}`}>
            <img src={product.image_url} alt={product.name} />
            <div>
              <h3>{product.name}</h3>
              <p>{product.category}</p>
              <p>${product.price}</p>
              <div className="quantity-controls">
                <button onClick={() => updateQuantity(product.id, Math.max(0, product.quantity - 1))}>-</button>
                <span>{product.quantity || 0}</span>
                <button onClick={() => addToCart(product.id)}>+</button> {/* Cambiado aquí */}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
