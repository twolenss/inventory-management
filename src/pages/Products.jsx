import { Link } from "react-router-dom";
import { LoadingState, ErrorState, EmptyState } from "../components/ProductStates";
import { useState } from "react";

function Products({ product = [], isLoading, error, deletedProduct }) {
  const [searchQuery, setSearchQuery] = useState("");
  const categories = ["All", ...new Set(product.map((item) => item.category))];
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [stockFilter, setStockFilter] = useState("All");

  const filteredProd = product.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "All" || item.category === categoryFilter;

    let matchesStock = true;
    if (stockFilter === "In Stock") matchesStock = item.stock > 0;
    else if (stockFilter === "Low Stock") matchesStock = item.stock > 0 && item.stock <= 5;
    else if (stockFilter === "Out of Stock") matchesStock = item.stock === 0;

    return matchesSearch && matchesCategory && matchesStock;
  });
  const resetFilters = () => {
    setSearchQuery("");
    setCategoryFilter("All");
    setStockFilter("All");
  };

  if (isLoading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  if (product.length === 0) {
    return <EmptyState />;
  }

  if (filteredProd.length === 0) {
    return (
      <div className="p-8 text-center">
        <p className="text-gray-600">{searchQuery || categoryFilter !== "All" || stockFilter !== "All" ? `No products found matching your criteria` : "No products available"}</p>
      </div>
    );
  }
  return (
    <div className="p-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-[#2c3e50]">Products</h2>

        <Link to="/products/add" className="rounded bg-[#58c020] px-4 py-2 font-medium text-white transition hover:bg-[#458920]">
          Add Product
        </Link>
      </div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search products by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-[#3498db] focus:ring-2 focus:ring-[#3498db]/20"
        />
      </div>
      <div className="flex flex-wrap gap-4">
        {/* Category Filter */}
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="rounded-md border border-gray-300 px-4 py-2 outline-none transition focus:border-[#3498db] focus:ring-2 focus:ring-[#3498db]/20"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Stock Filter */}
        <select
          value={stockFilter}
          onChange={(e) => setStockFilter(e.target.value)}
          className="rounded-md border border-gray-300 px-4 py-2 outline-none transition focus:border-[#3498db] focus:ring-2 focus:ring-[#3498db]/20"
        >
          <option value="All">All Stock</option>
          <option value="In Stock">In Stock</option>
          <option value="Low Stock">Low Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>

        {/* Reset Button */}
        <button onClick={resetFilters} className="rounded-md bg-gray-500 px-4 py-2 font-medium text-white transition hover:bg-gray-600">
          Reset Filters
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProd.map((products) => (
          <div key={products.id} className="rounded-lg bg-white p-6 shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
            <h3 className="mb-2 text-xl font-semibold text-[#2c3e50]">{products.name}</h3>

            <p className="mb-4 text-gray-600">{products.description}</p>

            <p className="mb-4 text-lg font-semibold text-[#2c3e50]">Price: ${products.price}</p>

            <div className="flex gap-3">
              <Link to={`/products/${products.id}`} className="rounded bg-[#3498db] px-4 py-2 text-white hover:bg-[#2980b9]">
                View
              </Link>

              <Link to={`/products/${products.id}/edit`} className="rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700">
                Edit
              </Link>

              <button onClick={() => deletedProduct?.(products.id)} className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
