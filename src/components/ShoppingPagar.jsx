/* eslint-disable react/prop-types */

export default function ShoppingPagar({
  cart,
  removeFromCart,
  calculateTotal,
}) {
  return (
    <div className="shopping-cart bg-gray-100 p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Carrito de Compras</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id} className="border-b border-gray-300 py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-12 h-12 object-cover mr-4"
                />
                <div>
                  <p className="text-lg font-semibold">{product.name}</p>
                  <p className="text-gray-500">{product.category}</p>
                </div>
              </div>
              <div className="flex items-center">
                <p className="text-gray-700 mr-4">
                  ${product.price * product.quantity}
                </p>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => removeFromCart(product.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-lg font-semibold">Total: ${calculateTotal()}</p>
    </div>
  );
}
