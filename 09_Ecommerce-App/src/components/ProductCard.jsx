import { useDispatch } from "react-redux";
import { addTodoCart } from '../features/cart';

function ProductCard({ product }) {
  const dispatch=useDispatch()

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-blue-100">
      {/* Image */}
      <div className="bg-blue-50 p-4 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-40 object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <h3 className="text-lg font-semibold text-blue-900 line-clamp-2">
          {product.title}
        </h3>

        <p className="text-xl font-bold text-blue-600">${product.price}</p>

        {/* Button */}
        <button
          onClick={() => dispatch(addTodoCart(product))}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 active:scale-95 transition-all duration-200"
        >
          <i className="bi bi-cart-plus text-lg"></i>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
