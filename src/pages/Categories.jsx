function Categories({ product }) {
  const categoryCounts = product.reduce((counts, item) => {
    counts[item.category] = (counts[item.category] || 0) + 1;
    return counts;
  }, {});

  return (
    <div className="mt-8 space-y-6">
      <h2 className="text-2xl font-bold text-primary-text">Product Counts by Category</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Object.entries(categoryCounts).map(([category, count]) => (
          <div
            key={category}
            className="rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-border"
          >
            <h3 className="text-lg font-semibold text-primary-text">{category}</h3>
            <p className="mt-2 text-3xl font-bold text-accent">{count}</p>
            <p className="text-sm text-secondary-text">
              {count === 1 ? "product" : "products"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;