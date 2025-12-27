import { useEffect, useState } from "react";
import { Card } from "../components";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Api Error", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary mb-3">
          Welcome to the World's #1 Online shop
        </h1>
        <p className="lead text-muted mb-4">
          Discover premium products with incredible discounts, delivered right
          to your doorstep.
        </p>
        <hr className="w-50 mx-auto" />
      </div>

      <div className="mb-5">
        <h3 className="fw-semibold mb-4">All Products</h3>

        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
            {products.map((product) => (
              <div className="col" key={product.id}>
                <Card product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
