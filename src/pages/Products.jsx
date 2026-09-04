import { Link } from "react-router-dom";
import { LoadingState, ErrorState, EmptyState } from "../components/ProductStates";
import { useState } from "react";
import Swal from "sweetalert2";
function Products({ product = [], isLoading, error, deletedProduct }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [stockFilter, setStockFilter] = useState("All");

  const categories = ["All", ...new Set(product.map((item) => item.category).filter(Boolean))];

  const filteredProd = product.filter((item) => {
    const matchesSearch = (item.name || "").toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = categoryFilter === "All" || item.category === categoryFilter;

    let matchesStock = true;

    if (stockFilter === "In Stock") {
      matchesStock = item.stock > 0;
    } else if (stockFilter === "Low Stock") {
      matchesStock = item.stock > 0 && item.stock <= 5;
    } else if (stockFilter === "Out of Stock") {
      matchesStock = item.stock === 0;
    }

    return matchesSearch && matchesCategory && matchesStock;
  });

  const resetFilters = () => {
    setSearchQuery("");
    setCategoryFilter("All");
    setStockFilter("All");
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This product will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        deletedProduct?.(id);

        Swal.fire({
          title: "Deleted!",
          text: "The product has been deleted.",
          icon: "success",
          confirmButtonColor: "#3085d6",
        });
      }
    });
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

  return (
    <div className="space-y-6 p-2 md:p-4">
      <div className="mb-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-3xl font-bold text-primary-text">Products</h2>

        <Link to="/products/add" className="inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2.5 font-medium text-primary-text transition hover:bg-[#e4b521]">
          Add Product
        </Link>
      </div>

      {/* Search and Filters */}
      <div className="rounded-2xl bg-surface p-4 shadow-sm">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search products by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-md border border-border bg-background px-4 py-3 text-primary-text outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="rounded-md border border-border bg-background px-4 py-2.5 text-primary-text outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <select
            value={stockFilter}
            onChange={(e) => setStockFilter(e.target.value)}
            className="rounded-md border border-border bg-background px-4 py-2.5 text-primary-text outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
          >
            <option value="All">All Stock</option>
            <option value="In Stock">In Stock</option>
            <option value="Low Stock">Low Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>

          <button
            type="button"
            onClick={resetFilters}
            className="rounded-md border border-border bg-surface px-4 py-2.5 font-medium text-secondary-text transition hover:bg-border"
          >
            Reset Filters
          </button>
        </div>
      </div>

      {/* Products */}
      {filteredProd.length === 0 ? (
        <div className="rounded-2xl bg-surface p-8 text-center shadow-sm ring-1 ring-border/80">
          <p className="text-secondary-text">No products found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProd.map((products) => (
            <div key={products.id} className="rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-border/80">
              <h3 className="mb-2 text-xl font-semibold text-primary-text">{products.name}</h3>

              <p className="mb-4 min-h-[48px] text-secondary-text">{products.description}</p>

              <p className="mb-5 text-lg font-semibold text-primary-text">Price: ₱{products.price}</p>

              <div className="flex gap-2">
                <Link
                  to={`/products/${products.id}`}
                  className="flex-1 rounded-lg border border-accent px-3 py-2 text-center text-sm font-medium text-primary-text transition hover:bg-accent/10"
                >
                  View
                </Link>

                <Link
                  to={`/products/${products.id}/edit`}
                  className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-center text-sm font-medium text-primary-text transition hover:bg-border"
                >
                  Edit
                </Link>

                <button
                  type="button"
                  onClick={() => handleDelete(products.id)}
                  className="flex-1 rounded-lg border border-red-500 bg-red-50 px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-300"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
