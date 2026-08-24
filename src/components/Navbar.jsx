import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/products">Products</NavLink>

      <NavLink to="/categories">Categories</NavLink>
    </nav>
  );
}

export default Navbar;
