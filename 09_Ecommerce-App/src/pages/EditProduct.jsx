import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { useUpdateProductMutation, useGetCategoriesQuery, useGetAllProductsQuery } from "../features/api/api";
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
  const { data: allProducts = [], isLoading: productsLoading } = useGetAllProductsQuery();
  const { data: categories = [], isLoading: categoriesLoading } = useGetCategoriesQuery();

  // Set current product based on ID
  const productData = allProducts.find((p) => p.id === id);

  useEffect(() => {
    if (productData) {
      setTitle(productData.title);
      setPrice(productData.price);
      setCategoryId(productData.categoryId);
    } else if (!productsLoading) {
      alert("Product not found");
      navigate("/shop");
    }
  }, [productData, productsLoading]);

  //  Handle new image selection
  const handleNewImage = (file) => {
    if (!file) return;
    setNewImageFile(file);
    setNewImagePreview(URL.createObjectURL(file));
    setKeepExistingImage(false);
  };

  //  Remove newly selected image
  const removeNewImage = () => {
    setNewImageFile(null);
    setNewImagePreview(null);
    setKeepExistingImage(true);
  };

  //  Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      let imageUrl = productData.imageUrl;
      let imagePublicId = productData.imagePublicId;

      if (newImageFile && !keepExistingImage) {
        const uploaded = await uploadToCloudinary(newImageFile);
        imageUrl = uploaded.url;
        imagePublicId = uploaded.publicId;
      }

      await updateProduct({
        id,
        updates: { title, price, categoryId, imageUrl, imagePublicId },
      });

      alert("Product updated successfully!");
      navigate("/shop");
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
            onChange={(e) => setPrice(e.target.value)}
            required
            disabled={submitting}
            className="w-full border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-blue-800 font-medium mb-1">Category</label>
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

        {/* Existing Image */}
        <div>
          <label className="block text-blue-800 font-medium mb-2">Current Image</label>
          <img
            src={productData.image}
            alt="Current product"
            className="w-40 h-40 object-cover rounded mb-3 border border-blue-200"
          />
          <label className="flex items-center space-x-2 text-blue-700">
            <input
              type="checkbox"
              checked={keepExistingImage}
              onChange={() => setKeepExistingImage((p) => !p)}
              disabled={submitting || newImageFile}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span>Keep existing image</span>
          </label>
        </div>

        {/* New Image Upload */}
        {!keepExistingImage && (
          <div>
            <label className="block text-blue-800 font-medium mb-2">
              Upload New Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleNewImage(e.target.files[0])}
              disabled={submitting}
              className="block w-full text-blue-700"
            />

            {newImagePreview && (
              <div className="mt-3">
                <p className="text-blue-700 font-medium mb-2 flex items-center">
                  <i className="bi bi-image mr-1"></i> New Image Preview:
                </p>
                <img
                  src={newImagePreview}
                  alt="New preview"
                  className="w-40 h-40 object-cover rounded mb-2 border border-blue-200"
                />
                <button
                  type="button"
                  onClick={removeNewImage}
                  disabled={submitting}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 flex items-center space-x-1"
                >
                  <i className="bi bi-x-circle"></i>
                  <span>Remove Selected Image</span>
                </button>
              </div>
            )}
          </div>
        )}

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
