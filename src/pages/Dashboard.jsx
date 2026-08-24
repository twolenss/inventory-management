function Dashboard() {
  return (
    <div className="dashboard-main">
      <div className="summary-cards">
        <h3>Welcome to your Inventory Management System</h3>
        <p>Total Products:</p>
        <p>Low Stock:</p>
        <p>Out of Stock:</p>
        <p>Inventory Value</p>
      </div>

      <div className="inventory-overview">
        <h3>Inventory overview</h3>
        <p>In Stock:</p>
        <p>Low Stock</p>
        <p>Out of Stock: </p>
      </div>

      <div className="stock-products">
        <h3>Low Stock Products </h3>
        <p>Wireless Mouse</p>
        <p>Office Chair</p>
        <p>USB Cable</p>
        <button>View Products</button>
      </div>

      <div className="recent-products">
        <h3>Recently Added</h3>
        <p>Laptop</p>
        <p>Wireless Keyboard</p>
        <p>Office Chair</p>
      </div>
    </div>
  );
}

export default Dashboard;
