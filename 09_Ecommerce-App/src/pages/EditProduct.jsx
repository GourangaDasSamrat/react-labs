import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  useGetAllProductsQuery,
  useGetCategoriesQuery,
  useUpdateProductMutation,
} from "../features/api/api";
import { uploadToCloudinary } from "../utils/cloudinary";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [updateProduct] = useUpdateProductMutation();

  // Form state
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [keepExistingImage, setKeepExistingImage] = useState(true);
  const [newImageFile, setNewImageFile] = useState(null);
  const [newImagePreview, setNewImagePreview] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  // Fetch all products & categories using RTK Query
  const { data: allProducts = [], isLoading: productsLoading } =
    useGetAllProductsQuery();
  const { data: categories = [], isLoading: categoriesLoading } =
    useGetCategoriesQuery();

  // Set current product based on ID
  const productData = allProducts.find((p) => p.id === id);

  useEffect(() => {
    if (productData) {
      setTitle(productData.title);
      setPrice(productData.price);
      setCategoryId(productData.categoryId);
    } else if (!productsLoading) {
      alert("Product not found");
      navigate("/admin/all-products");
    }
  }, [productData, productsLoading]);

  // Handle new image selection
  const handleNewImage = (file) => {
    if (!file) return;
    setNewImageFile(file);
    setNewImagePreview(URL.createObjectURL(file));
    // Automatically uncheck "Keep existing image" if new image is selected
    setKeepExistingImage(false);
  };

  // Remove newly selected image
  const removeNewImage = () => {
    setNewImageFile(null);
    setNewImagePreview(null);
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      let image = productData.image;

      if (!keepExistingImage && newImageFile) {
        const uploaded = await uploadToCloudinary(newImageFile);
        image = uploaded.url;
      }

      await updateProduct({
        id,
        updates: { title, price, categoryId, image },
      });

      alert("Product updated successfully!");
      navigate("/admin/all-products");
    } catch (error) {
      console.error(error);
      alert("Failed to update product");
    } finally {
      setSubmitting(false);
    }
  };

  if (productsLoading || categoriesLoading)
    return (
      <p className="text-blue-600 text-center mt-10 text-lg font-medium">
        Loading product...
      </p>
    );

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg border border-blue-200">
      <h2 className="text-2xl font-semibold text-blue-700 mb-6 flex items-center">
        <i className="bi bi-pencil-square mr-2"></i> Edit Product
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-blue-800 font-medium mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            disabled={submitting}
            className="w-full border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-blue-800 font-medium mb-1">Price</label>
          <input
            type="number"
            min="0"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            required
            disabled={submitting}
            className="w-full border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-blue-800 font-medium mb-1">
            Category
          </label>
          <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            required
            disabled={submitting}
            className="w-full border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Keep Existing Image */}
        <div className="mb-4">
          <label className="flex items-center space-x-2 text-blue-700">
            <input
              type="checkbox"
              checked={keepExistingImage}
              onChange={() => setKeepExistingImage((p) => !p)}
              disabled={submitting}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span>Keep existing image</span>
          </label>
        </div>

        {/* Image Upload Section */}
        <div className="mb-6">
          <label className="block text-blue-800 font-medium mb-2">
            <i className="bi bi-image mr-2"></i> Product Image
          </label>

          <div className="flex flex-col items-center justify-center border-2 border-dashed border-blue-300 rounded-lg p-4 hover:border-blue-500 transition w-full">
            {/* File input only shows if checkbox is unchecked */}
            {!keepExistingImage && (
              <input
                type="file"
                accept=".webp,.png,.jpg,.jpeg"
                onChange={(e) => handleNewImage(e.target.files[0])}
                disabled={submitting}
                className="w-full cursor-pointer rounded-md border border-blue-300 bg-white px-3 py-2 text-sm text-gray-600
                   file:mr-4 file:rounded-md file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-white file:cursor-pointer hover:file:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            )}

            {/* Show images */}
            <div className="flex mt-4 gap-4">
              {/* Current image */}
              {productData.image && (
                <div className="flex flex-col items-center">
                  <p className="text-sm text-blue-700 mb-1">Current</p>
                  <img
                    src={productData.image}
                    alt="Current product"
                    className="w-40 h-40 object-cover rounded border border-blue-200"
                  />
                </div>
              )}
              {/* New image preview */}
              {newImagePreview && (
                <div className="flex flex-col items-center">
                  <p className="text-sm text-blue-700 mb-1">New</p>
                  <img
                    src={newImagePreview}
                    alt="New preview"
                    className="w-40 h-40 object-cover rounded border border-blue-200"
                  />
                  <button
                    type="button"
                    onClick={removeNewImage}
                    disabled={submitting}
                    className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 flex items-center space-x-1"
                  >
                    <i className="bi bi-x-circle"></i>
                    <span>Remove</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50 flex justify-center items-center"
        >
          {submitting ? "Updating..." : "Update Product"}
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
