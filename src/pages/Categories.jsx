function Categories({ product }) {
  // COMMENT: Categories page - note that products now only have id, name, and price
  // Category field is visible in UI but not saved to database
  
  return (
    <div className="space-y-6 p-2 md:p-4">
      <h2 className="text-3xl font-bold text-primary-text">Categories</h2>
      
      {/* COMMENT: Warning about category data */}
      <div className="rounded-2xl bg-amber-50 p-6 ring-1 ring-amber-100">
        <h3 className="mb-2 text-lg font-semibold text-amber-800">Category Data Note</h3>
        <p className="text-amber-700">
          The "Category" field is visible in the user interface for backward compatibility 
          but is <strong>not saved</strong> to the database. Products now use a simplified 
          structure with only <strong>id, name, and price</strong>.
        </p>
      </div>
      
      <div className="rounded-2xl bg-surface p-8 text-center shadow-sm ring-1 ring-border/80">
        <div className="mx-auto max-w-md">
          <h3 className="mb-2 text-xl font-semibold text-primary-text">Simplified Product Structure</h3>
          <p className="mb-4 text-secondary-text">
            For new products, only the following fields are saved:
          </p>
          <div className="space-y-3">
            <div className="rounded-lg bg-background p-4 border border-green-200">
              <p className="font-medium text-green-700">✓ ID (Auto-generated)</p>
              <p className="text-sm text-secondary-text">Unique identifier</p>
            </div>
            <div className="rounded-lg bg-background p-4 border border-green-200">
              <p className="font-medium text-green-700">✓ Name (Required)</p>
              <p className="text-sm text-secondary-text">Product name</p>
            </div>
            <div className="rounded-lg bg-background p-4 border border-green-200">
              <p className="font-medium text-green-700">✓ Price (Required)</p>
              <p className="text-sm text-secondary-text">Product price in ₱</p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-background/50 rounded-lg">
            <p className="text-sm font-medium text-secondary-text mb-2">Fields visible but not saved:</p>
            <p className="text-xs text-secondary-text">
              • Description • Category • Stock • Supplier • Date Added
            </p>
          </div>
          
          <p className="mt-6 text-sm text-secondary-text">
            Total products in inventory: <span className="font-medium text-primary-text">{product.length}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Categories;