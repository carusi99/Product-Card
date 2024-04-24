import { useState } from "react";
//as

export default function ShoppingCounter({ actualizarCarrito }) {
 
    if ((value === -1 && countProduct > 0) || (value === 1 && countProduct >= 0)) {
      setCountProduct(countProduct + value);
      // Llamamos a la función proporcionada para actualizar el carrito
      actualizarCarrito(countProduct + value);
    }
  };

  return (
    <>
      <div className="container2">
        <button className="button" onClick={() => handleCounter(-1)}>
          -
        </button>
