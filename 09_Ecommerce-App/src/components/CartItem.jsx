import { useState } from "react";
import { useDispatch } from "react-redux";
import { modifyQuantityOfAnItem, removeItemFromCart } from "../features/cart";

function CartItem({ item }) {
  const [itemQuantity, setItemQuantity] = useState(item.quantity);
  const dispatch = useDispatch();

  return (
    <tr className="border-b transition hover:bg-blue-50">
      {/* Product image */}
      <td className="p-4">
        <div className="flex justify-center">
          <img
            src={item.image}
            alt={item.title}
            className="h-16 w-16 rounded-md object-contain border bg-white transition hover:scale-105"
          />
        </div>
      </td>

      {/* Title */}
      <td className="p-4 text-sm font-medium text-gray-800">{item.title}</td>

      {/* Price */}
      <td className="p-4 font-semibold text-blue-600">$ {item.price}</td>

      {/* Quantity controls */}
      <td className="p-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded border border-blue-300 text-blue-600 transition hover:bg-blue-600 hover:text-white"
            onClick={() => {
              if (itemQuantity > 1) {
                dispatch(
                  modifyQuantityOfAnItem({
                    id: item.id,
                    quantity: item.quantity - 1,
                  }),
                );
                setItemQuantity(itemQuantity - 1);
              } else {
                dispatch(removeItemFromCart({ id: item.id }));
              }
            }}
          >
            <i className="bi bi-dash"></i>
          </button>

          <input
            type="number"
            min="1"
            value={itemQuantity}
            onChange={(e) => {
              const quantity = Number(e.target.value);
              dispatch(
                modifyQuantityOfAnItem({
                  id: item.id,
                  quantity,
                }),
                setItemQuantity(quantity),
              );
            }}
            className="w-14 rounded border border-gray-300 text-center text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />

          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded border border-blue-300 text-blue-600 transition hover:bg-blue-600 hover:text-white"
            onClick={() => {
              dispatch(
                modifyQuantityOfAnItem({
                  id: item.id,
                  quantity: item.quantity + 1,
                }),
              );
              setItemQuantity(itemQuantity + 1);
            }}
          >
            <i className="bi bi-plus"></i>
          </button>
        </div>
      </td>

      {/* Total */}
      <td className="p-4 font-semibold text-gray-700">
        $ {item.price * itemQuantity}
      </td>

      {/* Remove */}
      <td className="p-4 text-center">
        <button
          onClick={() => {
            dispatch(removeItemFromCart({ id: item.id }));
          }}
          className="text-gray-400 transition hover:text-red-500"
        >
          <i className="bi bi-x-lg"></i>
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
