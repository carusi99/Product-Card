/* eslint-disable react/prop-types */

export default function ShoppingCard({ products, addToCart, updateQuantity }) {
  return (
    <div className="product-list">
      <h2 className="text-xl font-semibold mb-4">Lista de Productos</h2>
      <ul className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <li
            key={product.id}
            className="bg-white shadow rounded-lg overflow-hidden"
          >
            <div className="w-54 h-48 flex items-center justify-center">
              <img
                src={product.image_url}
                alt={product.name}
                className="object-cover max-w-full max-h-full"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-500 mb-2">{product.category}</p>
              <p className="text-gray-700 font-semibold">${product.price}</p>
              <div className="flex items-center mt-4">
                <button
                  className="px-3 py-1 bg-blue-500 text-white rounded-md mr-2"
                  onClick={() =>
                    updateQuantity(
                      product.id,
                      Math.max(0, product.quantity - 1)
                    )
                  }
                >
                  -
                </button>
                <span className="px-3 py-1 bg-gray-200 rounded-md mr-2">
                  {product.quantity || 0}
                </span>
                <button
                  className="px-3 py-1 bg-blue-500 text-white rounded-md"
                  onClick={() => addToCart(product.id)}
                >
                  +
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
