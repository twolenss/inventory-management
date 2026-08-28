function Categories({ product }) {
  const categoryCounts = product.reduce((counts, item) => {
  counts[item.category] = (counts[item.category] || 0) + 1;
  return counts;
}, {});


  return (
 <div className="mt-8">
  <h2 className="mb-4 text-2xl font-bold text-[#2c3e50]">
    Product Counts by Category
  </h2>

  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {Object.entries(categoryCounts).map(([category, count]) => (
      <div
        key={category}
        className="rounded-lg bg-white p-6 shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
      >
        <h3 className="text-lg font-semibold text-gray-700">
          {category}
        </h3>

        <p className="mt-2 text-3xl font-bold text-[#3498db]">
          {count}
        </p>

        <p className="text-sm text-gray-500">
          {count === 1 ? "product" : "products"}
        </p>
      </div>
    ))}
  </div>
</div>

  );
}
export default Categories;
