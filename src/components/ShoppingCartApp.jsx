import React, { useState } from "react";
import ShoppingCard from "./ShoppingCard.jsx";
import ShoppingPagar from "./ShoppingPagar.jsx";
import productsDB from "../data/products.json";

export default function ShoppingCartApp() {
  const [cart, setCart] = useState([]);

  const initialProducts = productsDB.map(product => ({ ...product, quantity: 0 }));
  const [products, setProducts] = useState(initialProducts);
  const [productQuantities, setProductQuantities] = useState({}); // Nuevo estado para las cantidades

  const addToCart = (productId) => {
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex((item) => item.id === productId);

    if (existingProductIndex !== -1) {
      // Si el producto ya está en el carrito, actualiza la cantidad
      updatedCart[existingProductIndex].quantity += 1;
    } else {
      // Si el producto no está en el carrito, agrégalo
      updatedCart.push({ ...products.find(product => product.id === productId), quantity: 1 });
    }

    setCart(updatedCart);

    // También actualiza la cantidad en la lista de productos
    const updatedProducts = products.map(prod =>
      prod.id === productId
        ? { ...prod, quantity: prod.quantity + 1 }
        : prod
    );
    setProducts(updatedProducts);

    // Actualiza la cantidad en el nuevo estado productQuantities
    setProductQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1
    }));
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);

    // También actualiza la cantidad en la lista de productos
    const updatedProducts = products.map(prod =>
      prod.id === productId
        ? { ...prod, quantity: 0 }
        : prod
    );
    setProducts(updatedProducts);

    // Actualiza la cantidad en el nuevo estado productQuantities
    setProductQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: 0
    }));
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map(item =>
      item.id === productId
        ? { ...item, quantity: newQuantity }
        : item
    );
    setCart(updatedCart);

    // También actualiza la cantidad en la lista de productos
    const updatedProducts = products.map(prod =>
      prod.id === productId
        ? { ...prod, quantity: newQuantity }
        : prod
    );
    setProducts(updatedProducts);

    // Actualiza la cantidad en el nuevo estado productQuantities
    setProductQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: newQuantity
    }));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="app">
      <ShoppingCard
        products={products}
        addToCart={addToCart}
        updateQuantity={updateQuantity}
        productQuantities={productQuantities}  // Pasa productQuantities al componente
      />
      <ShoppingPagar
        cart={cart}
        removeFromCart={removeFromCart}
        calculateTotal={calculateTotal}
      />
    </div>
  );
}
