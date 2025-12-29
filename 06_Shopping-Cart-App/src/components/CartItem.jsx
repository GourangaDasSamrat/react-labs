import { useState } from "react";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const dispatch = useDispatch();

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      dispatch({
        type: "cart/modifyQuantity",
        payload: {
          id: item.id,
          quantity: newQuantity,
        },
      });
      setQuantity(newQuantity);
    }
  };

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    dispatch({
      type: "cart/modifyQuantity",
      payload: {
        id: item.id,
        quantity: newQuantity,
      },
    });
    setQuantity(newQuantity);
  };

  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 1) {
      dispatch({
        type: "cart/modifyQuantity",
        payload: {
          id: item.id,
          quantity: value,
        },
      });
      setQuantity(value);
    }
  };

  return (
    <tr>
      <td>
        <img src={item.image} alt={item.title} className="cart-item-image" />
      </td>
      <td>
        <h6 className="mb-0">{item.title}</h6>
        <small className="text-muted">{item.category}</small>
      </td>
      <td>
        <span className="fw-semibold">${item.price.toFixed(2)}</span>
      </td>
      <td>
        <div className="quantity-controls">
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm"
            onClick={handleDecrease}
            disabled={quantity <= 1}
          >
            <i className="bi bi-dash"></i>
          </button>
          <input
            type="number"
            min={1}
            value={quantity}
            className="form-control form-control-sm text-center quantity-input"
            onChange={handleInputChange}
          />
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm"
            onClick={handleIncrease}
          >
            <i className="bi bi-plus"></i>
          </button>
        </div>
      </td>
      <td>
        <span className="fw-bold text-primary">
          ${(item.price * quantity).toFixed(2)}
        </span>
      </td>
      <td>
        <button
          onClick={() => {
            dispatch({
              type: "cart/removeProduct",
              payload: item.id,
            });
          }}
          type="button"
          className="btn btn-outline-danger btn-sm"
        >
          <i className="bi bi-x-lg"></i>
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
