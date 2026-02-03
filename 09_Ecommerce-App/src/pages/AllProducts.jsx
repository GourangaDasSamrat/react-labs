import { useNavigate } from "react-router";
import {
  useGetAllProductsQuery,
  useGetCategoriesQuery,
} from "../features/api/api";

const AllProducts = () => {
  const navigate = useNavigate();

  const {
    data: products = [],
    isLoading: productsLoading,
    isError: productsError,
  } = useGetAllProductsQuery();

  const { data: categories = [], isLoading: categoriesLoading } =
    useGetCategoriesQuery();

  const loading = productsLoading || categoriesLoading;

  const getCategoryName = (categoryId) => {
    const cat = categories.find((c) => c.id === categoryId);
    return cat ? cat.name : "Uncategorized";
  };

  if (loading)
    return (
      <p className="text-center text-blue-600 font-medium mt-10">
        Loading products...
      </p>
    );

  if (productsError)
    return (
      <p className="text-center text-red-500 mt-10">Failed to load products</p>
    );

  if (!products.length)
    return <p className="text-center text-gray-500 mt-10">No products found</p>;

  return (
    <div className="p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-semibold text-blue-700 mb-6 flex items-center gap-2">
        <i className="bi bi-box-seam"></i>
        All Products
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-blue-100 rounded-lg overflow-hidden">
          <thead className="bg-blue-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-blue-700">
                Image
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-blue-700">
                Title
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-blue-700">
                Price
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-blue-700">
                Category
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-blue-700">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-blue-100">
            {products.map((prod) => (
              <tr key={prod.id} className="hover:bg-blue-50 transition">
                <td className="px-4 py-3">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="w-20 h-20 object-cover rounded-md border"
                  />
                </td>

                <td className="px-4 py-3 font-medium text-gray-700">
                  {prod.title}
                </td>

                <td className="px-4 py-3 text-blue-600 font-semibold">
                  ${prod.price}
                </td>

                <td className="px-4 py-3 text-gray-600">
                  {getCategoryName(prod.categoryId)}
                </td>

                <td className="px-4 py-3">
                  <button
                    onClick={() => navigate(`/admin/edit-product/${prod.id}`)}
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-sm"
                  >
                    <i className="bi bi-pencil-square"></i>
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;
