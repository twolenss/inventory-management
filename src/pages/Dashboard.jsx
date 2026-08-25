import { Link } from "react-router-dom";

function Dashboard({ product }) {

  const totalStock = product.length || 0;
  const lowStock = product?.filter((item) => item.stock <= 5).length || 0;
  const outOfStock = product?.filter((item) => item.stock === 0).length || 0;
  const inventoryValue = product.reduce((total, item) => total + item.price * item.stock, 0);
  const recentlyAdded = [...product].sort((a,b) => new Date(b.dateAdded) - new Date(a.dateAdded)).slice(0,2); 
  return (
    <div className="dashboard-main">
      <div className="summary-cards">
        <Link to="/products">View products</Link>
          <div className="stats-card">
            <p>Total Products: {totalStock}</p>
            <p>Low Stock: {lowStock}</p>
            <p>Out of Stock: {outOfStock}</p>
            <p>Inventory Value: ₱ {inventoryValue} </p>
            <h2>Recently Added {
              recentlyAdded.map((item) => (
                <p key={item.id}>{item.name} - {item.dateAdded} </p>
              ))}</h2>
          </div>
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
