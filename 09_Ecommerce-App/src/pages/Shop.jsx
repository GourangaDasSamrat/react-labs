import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ProductCard } from "../components";
import { db } from "../firebase";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const refProductCollection = collection(db, "products");

  useEffect(() => {
    const getAllProducts = async () => {
      const data = await getDocs(refProductCollection);
      const filteredData = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProducts(filteredData);
    };

    getAllProducts();
  }, [refProductCollection]);

  return (
    <>
      {/* Banner */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <i className="bi bi-bag-check-fill text-4xl"></i>
            <h1 className="text-4xl font-bold tracking-wide">Our ShopEase</h1>
          </div>
          <p className="text-blue-100">
            Shop smarter with quality products you’ll love
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="mb-10 text-center">
            <div className="flex items-center justify-center gap-2 text-blue-600">
              <i className="bi bi-grid-fill text-2xl"></i>
              <h2 className="text-3xl font-semibold">All Products</h2>
            </div>
            <div className="mt-3 mx-auto h-1 w-24 bg-blue-500 rounded"></div>
          </div>

          {/* Product Grid */}
          {products?.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="border border-blue-100 rounded-lg shadow-sm hover:shadow-lg transition duration-300"
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-20">
              <i className="bi bi-box-seam text-5xl text-blue-400 mb-4 block"></i>
              <p className="text-lg">No products available</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Shop;
