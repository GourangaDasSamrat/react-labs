import { useSearchParams } from "react-router-dom";
import { ProductCard } from "../components";
import {
  useGetAllProductsQuery,
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
} from "../features/api";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeSlug = searchParams.get("category");

  const { data: categories = [] } = useGetCategoriesQuery();
  const activeCategory = categories.find((cat) => cat.slug === activeSlug);
  const activeCategoryId = activeCategory?.id;
  const isCategoryActive = Boolean(activeCategoryId);

  const { data: allProducts = [], isLoading: allLoading } =
    useGetAllProductsQuery(undefined, {
      skip: isCategoryActive,
    });

  const { data: categoryProducts = [], isLoading: categoryLoading } =
    useGetProductsByCategoryQuery(activeCategoryId, {
      skip: !isCategoryActive,
    });

  const products = isCategoryActive ? categoryProducts : allProducts;
  const isLoading = allLoading || categoryLoading;

  const handleCategoryChange = (category) => {
    setSearchParams({ category: category.slug });
  };

  const clearCategoryFilter = () => {
    searchParams.delete("category");
    setSearchParams(searchParams);
  };

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

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {/* All */}
            <button
              onClick={clearCategoryFilter}
              className={`px-5 py-2 rounded-full border text-sm font-medium flex items-center gap-2 transition
                ${
                  !activeSlug
                    ? "bg-blue-600 text-white border-blue-600 shadow"
                    : "bg-white text-gray-600 border-gray-300 hover:bg-blue-50"
                }`}
            >
              <i className="bi bi-grid-fill"></i>
              All
            </button>

            {categories.map((category) => {
              const isActive = activeSlug === category.slug;

              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-5 py-2 rounded-full border text-sm font-medium flex items-center gap-2 transition
                    ${
                      isActive
                        ? "bg-blue-600 text-white border-blue-600 shadow"
                        : "bg-white text-gray-600 border-gray-300 hover:bg-blue-50"
                    }`}
                >
                  <i
                    className={`bi ${
                      isActive ? "bi-check-circle-fill" : "bi-tag"
                    }`}
                  ></i>
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-20">
              <i className="bi bi-arrow-repeat text-4xl text-blue-600 animate-spin mb-4"></i>
              <p className="text-gray-500 mb-8">Loading products...</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="border border-gray-200 rounded-lg p-4 animate-pulse"
                  >
                    <div className="h-40 bg-gray-200 rounded mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Product Grid */}
          {!isLoading &&
            (products?.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="border border-blue-100 rounded-lg shadow-sm hover:shadow-lg transition"
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
            ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
