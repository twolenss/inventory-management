function Dashboard({ product = [] }) {
  const totalStock = product.length;
  const lowStock = product.filter((item) => item.stock <= 5).length;
  const outOfStock = product.filter((item) => item.stock === 0).length;

  const inventoryValue = product.reduce(
    (total, item) => total + item.price * item.stock,
    0
  );

  const recentlyAdded = [...product]
    .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
    .slice(0, 4);

  return (
    <div className="space-y-8 bg-background p-2 md:p-4">
      <h1 className="text-3xl font-bold tracking-tight text-primary-text">Dashboard</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-border">
          <p className="text-sm font-medium text-secondary-text">Total Products</p>
          <p className="mt-2 text-3xl font-bold text-primary-text">{totalStock}</p>
        </div>

        <div className="rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-border">
          <p className="text-sm font-medium text-secondary-text">Low Stock</p>
          <p className="mt-2 text-3xl font-bold text-accent">{lowStock}</p>
        </div>

        <div className="rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-border">
          <p className="text-sm font-medium text-secondary-text">Out of Stock</p>
          <p className="mt-2 text-3xl font-bold text-accent-warm">{outOfStock}</p>
        </div>

        <div className="rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-border">
          <p className="text-sm font-medium text-secondary-text">Inventory Value</p>
          <p className="mt-2 text-3xl font-bold text-primary-text">
            ₱ {inventoryValue.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-border">
        <h2 className="mb-4 text-2xl font-semibold text-primary-text">Recently Added</h2>

        <div className="space-y-3">
          {recentlyAdded.length > 0 ? (
            recentlyAdded.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-xl bg-background p-4"
              >
                <p className="font-medium text-primary-text">{item.name}</p>
                <p className="text-sm text-secondary-text">{item.dateAdded}</p>
              </div>
            ))
          ) : (
            <p className="text-secondary-text">No products recently added.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;