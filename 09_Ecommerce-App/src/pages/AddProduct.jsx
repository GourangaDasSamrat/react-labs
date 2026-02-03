import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useAddProductMutation,
  useGetCategoriesQuery,
} from "../features/api/api";

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    image: "",
    categoryId: "",
  });
  const { data: categories = [] } = useGetCategoriesQuery();
  const [addProduct] = useAddProductMutation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]:
        e.target.name === "price" ? Number(e.target.value) : e.target.value,
    });
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    const data = new FormData();

    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const presetName = import.meta.env.VITE_CLOUDINARY_PRESET_NAME;

    data.append("file", file);
    data.append("cloud_name", cloudName);
    data.append("upload_preset", presetName);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: data,
      },
    );
    const result = await res.json();

    setProduct({
      ...product,
      image: result.secure_url,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!product.image) {
      alert("Image upload failed");
      return;
    }

    await addProduct(product);
    navigate("/");
  };

  return (
    <div className="flex justify-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-blue-600 mb-6 text-center">
          Add New Product
        </h2>

        {/* Title */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="title">
            <i className="bi bi-card-text mr-2"></i> Title
          </label>
          <input
            id="title"
            value={product.title}
            onChange={handleChange}
            name="title"
            required
            className="w-full border border-blue-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="price">
            <i className="bi bi-currency-dollar mr-2"></i> Price
          </label>
          <input
            id="price"
            value={product.price}
            onChange={handleChange}
            name="price"
            type="number"
            required
            className="w-full border border-blue-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="categoryId">
            <i className="bi bi-tags mr-2"></i> Category
          </label>

          <select
            id="categoryId"
            name="categoryId"
            value={product.categoryId}
            onChange={handleChange}
            required
            className="w-full border border-blue-300 rounded-md px-3 py-2 bg-white text-gray-700
               focus:outline-none focus:ring-2 focus:ring-blue-400
               hover:border-blue-400 transition"
          >
            <option value="" disabled>
              -- Select a category --
            </option>

            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Image Upload */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">
            <i className="bi bi-image mr-2"></i> Product Image
          </label>

          <div className="flex flex-col items-center justify-center border-2 border-dashed border-blue-300 rounded-lg p-4 hover:border-blue-500 transition">
            <input
              type="file"
              accept=".webp,.png,.jpg,.jpeg"
              onChange={handleImageChange}
              className="w-full cursor-pointer rounded-md border border-blue-300 bg-white px-3 py-2 text-sm text-gray-600 file:mr-4 file:rounded-md file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-white file:cursor-pointer hover:file:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <label
              htmlFor="imageUpload"
              className="cursor-pointer text-blue-600 font-medium"
            >
              Click to upload image
            </label>

            {product.image && (
              <img
                src={product.image}
                alt="Preview"
                className="mt-4 w-40 h-40 object-cover rounded-md shadow"
              />
            )}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
        >
          <i className="bi bi-plus-circle mr-2"></i> Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
