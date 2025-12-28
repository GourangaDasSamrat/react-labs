import { useEffect, useState } from "react";
import { CartItem } from "../components";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        const newCart = data.map((item) => ({
          ...item,
          quantity: 1,
        }));
        setCart(newCart);
        setLoading(false);
      })
      .catch((error) => {
        console.error("API Error:", error);
        setLoading(false);
      });
  }, []);

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container my-5">
      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">
          <i className="bi bi-cart3 me-2 text-primary"></i>
          Shopping Cart
        </h2>
        <span className="badge bg-primary rounded-pill fs-6">
          {cart.length} {cart.length === 1 ? "item" : "items"}
        </span>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : cart.length === 0 ? (
        <div className="text-center py-5">
          <i className="bi bi-cart-x display-1 text-muted"></i>
          <h4 className="mt-3 text-muted">Your cart is empty</h4>
          <p className="text-muted">Add some products to get started!</p>
        </div>
      ) : (
        <>
          {/* Cart Table */}
          <div className="table-responsive mb-4">
            <table className="table table-hover align-middle cart-table">
              <thead className="table-light">
                <tr>
                  <th scope="col" style={{ width: "100px" }}>
                    Image
                  </th>
                  <th scope="col">Product</th>
                  <th scope="col" style={{ width: "120px" }}>
                    Price
                  </th>
                  <th scope="col" style={{ width: "180px" }}>
                    Quantity
                  </th>
                  <th scope="col" style={{ width: "120px" }}>
                    Subtotal
                  </th>
                  <th scope="col" style={{ width: "80px" }}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((cartItem) => (
                  <CartItem key={cartItem.id} item={cartItem} />
                ))}
              </tbody>
            </table>
          </div>

          {/* Cart Summary */}
          <div className="row justify-content-end">
            <div className="col-lg-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title mb-4">Cart Summary</h5>

                  <div className="d-flex justify-content-between mb-3">
                    <span className="text-muted">Items ({cart.length}):</span>
                    <span className="fw-semibold">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>

                  <hr />

                  <div className="d-flex justify-content-between mb-4">
                    <span className="fw-bold fs-5">Total:</span>
                    <span className="fw-bold fs-5 text-primary">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>

                  <button type="button" className="btn btn-primary w-100 mb-2">
                    <i className="bi bi-credit-card me-2"></i>
                    Proceed to Checkout
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline-danger w-100"
                  >
                    <i className="bi bi-trash3 me-2"></i>
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
