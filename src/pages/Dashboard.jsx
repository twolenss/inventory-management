function Dashboard({ product = [] }) {
  const totalStock = product.length;
  const lowStock = product.filter((item) => item.stock <= 5).length;
  const outOfStock = product.filter((item) => item.stock === 0).length;

  const inventoryValue = product.reduce(
    (total, item) => total + item.price * item.stock,
    0
  );

  const recentlyAdded = [...product]
    .sort(
      (a, b) =>
        new Date(b.dateAdded) - new Date(a.dateAdded)
    )
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="mb-8 text-3xl font-bold text-[#2c3e50]">
        Dashboard
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

        {/* Total Products */}
        <div className="rounded-lg bg-white p-6 shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
          <p className="text-sm font-medium text-gray-500">
            Total Products
          </p>
          <p className="mt-2 text-3xl font-bold text-[#2c3e50]">
            {totalStock}
          </p>
        </div>

        {/* Low Stock */}
        <div className="rounded-lg bg-white p-6 shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
          <p className="text-sm font-medium text-gray-500">
            Low Stock
          </p>
          <p className="mt-2 text-3xl font-bold text-yellow-500">
            {lowStock}
          </p>
        </div>

        {/* Out of Stock */}
        <div className="rounded-lg bg-white p-6 shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
          <p className="text-sm font-medium text-gray-500">
            Out of Stock
          </p>
          <p className="mt-2 text-3xl font-bold text-red-500">
            {outOfStock}
          </p>
        </div>

        {/* Inventory Value */}
        <div className="rounded-lg bg-white p-6 shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
          <p className="text-sm font-medium text-gray-500">
            Inventory Value
          </p>
          <p className="mt-2 text-3xl font-bold text-green-600">
            ₱ {inventoryValue.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Recently Added */}
      <div className="mt-8 rounded-lg bg-white p-6 shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
        <h2 className="mb-4 text-2xl font-semibold text-[#2c3e50]">
          Recently Added
        </h2>

        <div className="space-y-3">
          {recentlyAdded.length > 0 ? (
            recentlyAdded.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-md bg-gray-50 p-4"
              >
                <p className="font-medium text-gray-700">
                  {item.name}
                </p>

                <p className="text-sm text-gray-500">
                  {item.dateAdded}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">
              No products recently added.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;


