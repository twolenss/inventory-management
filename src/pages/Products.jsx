import { Link } from "react-router-dom";
import { LoadingState, ErrorState, EmptyState } from "../components/ProductStates";
import { useState } from "react";
import Swal from "sweetalert2";
import { 
  Search, 
  Filter, 
  Package, 
  Eye, 
  Edit, 
  Trash2, 
  PlusCircle,
  Tag,
  BarChart3,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  XCircle
} from "lucide-react";

function Products({ product = [], isLoading, error, deletedProduct }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [stockFilter, setStockFilter] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

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

  // Sort products
  const sortedProducts = [...filteredProd].sort((a, b) => {
    let aValue, bValue;
    
    switch (sortBy) {
      case "price":
        aValue = a.price;
        bValue = b.price;
        break;
      case "stock":
        aValue = a.stock;
        bValue = b.stock;
        break;
      case "name":
      default:
        aValue = a.name.toLowerCase();
        bValue = b.name.toLowerCase();
    }
    
    if (sortOrder === "asc") {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const getStockStatus = (stock) => {
    if (stock === 0) return { label: "Out of Stock", color: "text-red-600", bg: "bg-red-50", icon: XCircle };
    if (stock <= 5) return { label: "Low Stock", color: "text-amber-600", bg: "bg-amber-50", icon: AlertTriangle };
    return { label: "In Stock", color: "text-green-600", bg: "bg-green-50", icon: CheckCircle };
  };

  const resetFilters = () => {
    setSearchQuery("");
    setCategoryFilter("All");
    setStockFilter("All");
    setSortBy("name");
    setSortOrder("asc");
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

  const totalProducts = product.length;
  const inStockCount = product.filter(p => p.stock > 0).length;
  const lowStockCount = product.filter(p => p.stock > 0 && p.stock <= 5).length;
  const outOfStockCount = product.filter(p => p.stock === 0).length;

  return (
    <div className="space-y-6 p-4 md:p-6">
      {/* Header with stats */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-primary-text">Inventory</h1>
            <p className="mt-1 text-secondary-text">Manage your products and stock levels</p>
          </div>
          <Link 
            to="/products/add" 
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-[#e4b521] px-5 py-3 font-medium text-primary-text transition-all hover:shadow-lg hover:scale-[1.02]"
          >
            <PlusCircle className="h-5 w-5" />
            Add Product
          </Link>
        </div>

      </div>

      {/* Search and Filters Card */}
      <div className="rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-border/50">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-secondary-text" />
            <h2 className="text-lg font-semibold text-primary-text">Filters & Search</h2>
          </div>
          <button
            type="button"
            onClick={resetFilters}
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-secondary-text transition hover:bg-border"
          >
            <RefreshCw className="h-4 w-4" />
            Reset All
          </button>
        </div>

        <div className="space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-secondary-text" />
            <input
              type="text"
              placeholder="Search products by name, category, or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-border bg-background py-3 pl-12 pr-4 text-primary-text placeholder-secondary-text outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
            />
          </div>

          {/* Filter Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-medium text-secondary-text">
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  Category
                </div>
              </label>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-primary-text outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-secondary-text">
                <div className="flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  Stock Status
                </div>
              </label>
              <select
                value={stockFilter}
                onChange={(e) => setStockFilter(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-primary-text outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
              >
                <option value="All">All Stock</option>
                <option value="In Stock">In Stock</option>
                <option value="Low Stock">Low Stock</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-secondary-text">
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" />
                  Sort By
                </div>
              </label>
              <div className="flex gap-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="flex-1 rounded-xl border border-border bg-background px-4 py-2.5 text-primary-text outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                >
                  <option value="name">Name</option>
                  <option value="price">Price</option>
                  <option value="stock">Stock</option>
                </select>
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="flex-1 rounded-xl border border-border bg-background px-4 py-2.5 text-primary-text outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                >
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {sortedProducts.length === 0 ? (
        <div className="rounded-2xl bg-surface p-12 text-center shadow-sm ring-1 ring-border/50">
          <div className="mx-auto max-w-md">
            <div className="mb-4 inline-flex rounded-full bg-border/50 p-4">
              <Package className="h-8 w-8 text-secondary-text" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-primary-text">No products found</h3>
            <p className="mb-6 text-secondary-text">Try adjusting your search or filters to find what you're looking for.</p>
            <button
              onClick={resetFilters}
              className="rounded-lg bg-accent px-5 py-2.5 font-medium text-primary-text transition hover:bg-[#e4b521]"
            >
              Clear All Filters
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <p className="text-sm text-secondary-text">
              Showing <span className="font-medium text-primary-text">{sortedProducts.length}</span> of{" "}
              <span className="font-medium text-primary-text">{product.length}</span> products
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sortedProducts.map((products) => {
              const stockStatus = getStockStatus(products.stock);
              const StatusIcon = stockStatus.icon;
              
              return (
                <div key={products.id} className="group overflow-hidden rounded-2xl bg-surface shadow-sm ring-1 ring-border/50 transition-all duration-300 hover:shadow-lg hover:ring-accent/30">
                  <div className="p-6">
                    {/* Product Header */}
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="mb-1 text-xl font-semibold text-primary-text group-hover:text-accent transition-colors">
                          {products.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-1 rounded-full bg-border/50 px-3 py-1 text-xs font-medium text-secondary-text">
                            <Tag className="h-3 w-3" />
                            {products.category}
                          </span>
                          <span className={`inline-flex items-center gap-1 rounded-full ${stockStatus.bg} px-3 py-1 text-xs font-medium ${stockStatus.color}`}>
                            <StatusIcon className="h-3 w-3" />
                            {stockStatus.label}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Product Description */}
                    <p className="mb-6 min-h-12 text-sm text-secondary-text line-clamp-2">
                      {products.description}
                    </p>

                    {/* Product Details */}
                    <div className="mb-6 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-secondary-text">Price</span>
                        <span className="text-lg font-bold text-primary-text">₱{products.price}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-secondary-text">Stock</span>
                        <span className="text-lg font-semibold text-primary-text">{products.stock} units</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-secondary-text">Supplier</span>
                        <span className="text-sm text-secondary-text">{products.supplier}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Link
                        to={`/products/${products.id}`}
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-accent/30 px-4 py-2.5 text-sm font-medium text-primary-text transition hover:bg-accent/10"
                      >
                        <Eye className="h-4 w-4" />
                        View
                      </Link>
                      <Link
                        to={`/products/${products.id}/edit`}
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-medium text-primary-text transition hover:bg-border"
                      >
                        <Edit className="h-4 w-4" />
                        Edit
                      </Link>
                      <button
                        type="button"
                        onClick={() => handleDelete(products.id)}
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-red-500/30 bg-red-50 px-4 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-100"
                      >
                        <Trash2 className="h-4 w-4" />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default Products;
