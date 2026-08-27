import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="flex justify-between px-8 py-4 bg-[#2c3e50] text-white shadow-[0 2px 4px rgba(0, 0, 0, 0.1)];">
      <div className="m-0 text-[1.5rem] font-semibold text-white">
        <h1>Inventory System</h1>
      </div>
      <div className="flex gap-6">
        <NavLink to="/" className="text-[#ecf0f1] no-underline px-4 py-2 rounded transition-all duration-300 ease-in-out font-medium hover:bg-[#34495e] hover:text-white [&.active]:bg-[#226087] [&.active]:text-white [&.active]:font-semibold">Dashboard</NavLink>
        <NavLink to="/products"  className="text-[#ecf0f1] no-underline px-4 py-2 rounded transition-all duration-300 ease-in-out font-medium hover:bg-[#34495e] hover:text-white [&.active]:bg-[#226087] [&.active]:text-white [&.active]:font-semibold">Products</NavLink>
        <NavLink to="/categories"  className="text-[#ecf0f1] no-underline px-4 py-2 rounded transition-all duration-300 ease-in-out font-medium hover:bg-[#34495e] hover:text-white [&.active]:bg-[#226087] [&.active]:text-white [&.active]:font-semibold">Categories</NavLink>
      </div>
    </nav>
  );
}


export default Navbar;
