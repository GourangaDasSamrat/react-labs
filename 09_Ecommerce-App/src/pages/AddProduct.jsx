const AddProduct = () => {
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

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="description">
            <i className="bi bi-card-text mr-2"></i> Description
          </label>
          <input
            id="description"
            value={product.description}
            onChange={handleChange}
            name="description"
            type="text"
            required
            className="w-full border border-blue-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Image URL */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="image">
            <i className="bi bi-image mr-2"></i> Image URL
          </label>
          <input
            id="image"
            onChange={handleChange}
            value={product.image}
            name="image"
            type="text"
            required
            className="w-full border border-blue-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
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
