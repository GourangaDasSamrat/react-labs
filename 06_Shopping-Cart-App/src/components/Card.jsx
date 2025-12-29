import { useDispatch } from "react-redux";
import { renderStars } from "../utils/starRating.jsx";

const Card = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="card h-100 shadow-sm hover-card">
      <img
        src={product.image}
        alt={product.title}
        className="card-img-top p-3"
        style={{ height: "250px", objectFit: "contain" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>

        {product.rating && (
          <div className="d-flex align-items-center mb-2">
            <div className="me-2">{renderStars(product.rating.rate)}</div>
            <span className="text-muted small">
              {product.rating.rate} ({product.rating.count})
            </span>
          </div>
        )}

        <p className="card-text text-muted small flex-grow-1">
          {product.description.substring(0, 100)}...
        </p>

        <div className="mt-auto">
          <p className="h4 text-primary fw-bold mb-3">${product.price}</p>
          <button
            type="button"
            className="btn btn-primary w-100"
            onClick={() =>
              dispatch({
                type: "cart/addToCart",
                payload: product,
              })
            }
          >
            <i className="bi bi-cart-plus me-2"></i>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
