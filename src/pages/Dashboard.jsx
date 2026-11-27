function Dashboard({ product = [] }) {
  const totalProducts = product.length;
  
  // COMMENT: Dashboard calculations - note that products only have id, name, and price
  // Other fields (description, category, stock, supplier, dateAdded) are not saved
  
  const totalValue = product.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  const averagePrice = totalProducts > 0 ? (totalValue / totalProducts).toFixed(2) : 0;

  // Show all products - no dateAdded field for sorting by recent
  const displayProducts = product.slice(0, 5);

  return (
    <div className="space-y-8 bg-background p-2 md:p-4">
      <h1 className="text-3xl font-bold tracking-tight text-primary-text">Dashboard</h1>
      
      {/* COMMENT: Note about simplified data structure */}
      <div className="rounded-2xl bg-surface/50 p-4 ring-1 ring-border">
        <p className="text-sm text-secondary-text">
          Note: Products now use simplified structure. 
          Other fields are visible in UI but not saved to database.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-border">
          <p className="text-sm font-medium text-secondary-text">Total Products</p>
          <p className="mt-2 text-3xl font-bold text-primary-text">{totalProducts}</p>
        </div>

        <div className="rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-border">
          <p className="text-sm font-medium text-secondary-text">Total Value</p>
          <p className="mt-2 text-3xl font-bold text-primary-text">
            ₱ {totalValue.toLocaleString()}
          </p>
        </div>

        <div className="rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-border">
          <p className="text-sm font-medium text-secondary-text">Average Price</p>
          <p className="mt-2 text-3xl font-bold text-accent">
            ₱ {averagePrice} 
          </p>
        </div>
      </div>

      <div className="rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-border">
        <h2 className="mb-4 text-2xl font-semibold text-primary-text">Recently Added Products</h2>

        <div className="space-y-3">
          {displayProducts.length > 0 ? (
            displayProducts.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-xl bg-background p-4"
              >
                <div>
                  <p className="font-medium text-primary-text">{item.name}</p>
                </div>
                <p className="text-lg font-semibold text-primary-text">₱{item.price}</p>
              </div>
            ))
          ) : (
            <p className="text-secondary-text">No products available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;