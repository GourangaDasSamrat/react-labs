import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "../components";
import { clearCart } from "../features/cart";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // calculate total price
  let totalPrice = 0;
  cart.forEach((item) => (totalPrice += item.price * item.quantity));

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Title */}
      <h4 className="text-2xl font-semibold text-blue-700 flex items-center gap-2 mb-6">
        <i className="bi bi-cart3 text-3xl"></i>
        Shopping Cart
      </h4>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Table */}
        <div className="lg:col-span-2">
          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="w-full">
              <thead className="bg-blue-50">
                <tr>
                  <th className="p-4 text-left text-sm font-semibold text-blue-700">
                    Image
                  </th>
                  <th className="p-4 text-left text-sm font-semibold text-blue-700">
                    Product
                  </th>
                  <th className="p-4 text-left text-sm font-semibold text-blue-700">
                    Price
                  </th>
                  <th className="p-4 text-left text-sm font-semibold text-blue-700">
                    Quantity
                  </th>
                  <th className="p-4 text-left text-sm font-semibold text-blue-700">
                    Subtotal
                  </th>
                  <th className="p-4 text-left text-sm font-semibold text-blue-700">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {cart.map((item) => (
                  <CartItem item={item} key={item.id} />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary Box */}
        <div className="bg-white shadow-lg rounded-lg p-6 h-fit sticky top-24">
          <h5 className="text-lg font-semibold text-blue-700 mb-4 flex items-center gap-2">
            <i className="bi bi-receipt"></i>
            Order Summary
          </h5>

          <div className="flex justify-between text-gray-700 mb-3">
            <span>Total Items</span>
            <span>{cart.length}</span>
          </div>

          <div className="flex justify-between text-lg font-semibold border-t pt-4 mb-6">
            <span>Total</span>
            <span className="text-blue-700">${totalPrice}</span>
          </div>

          <button
            onClick={() => dispatch(clearCart())}
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-3 rounded-md font-medium transition"
          >
            <i className="bi bi-trash3"></i>
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
