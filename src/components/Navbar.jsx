import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="border-b border-border bg-background/95 shadow-sm backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-4 md:flex-row lg:px-10">
        <div className="text-lg font-bold tracking-tight text-primary-text">
          <h1>Inventory System</h1>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-secondary-text">
          <NavLink
            to="/"
            className="relative rounded-md px-4 py-2 transition-colors hover:bg-border hover:text-primary-text [&.active]:text-primary-text [&.active]:after:absolute [&.active]:after:bottom-0 [&.active]:after:left-1/2 [&.active]:after:h-0.5 [&.active]:after:w-8 [&.active]:after:-translate-x-1/2 [&.active]:after:rounded-full [&.active]:after:bg-accent [&.active]:after:content-['']"
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/products"
            className="relative rounded-md px-4 py-2 transition-colors hover:bg-border hover:text-primary-text [&.active]:text-primary-text [&.active]:after:absolute [&.active]:after:bottom-0 [&.active]:after:left-1/2 [&.active]:after:h-0.5 [&.active]:after:w-8 [&.active]:after:-translate-x-1/2 [&.active]:after:rounded-full [&.active]:after:bg-accent [&.active]:after:content-['']"
          >
            Inventory
          </NavLink>
          <NavLink
            to="/categories"
            className="relative rounded-md px-4 py-2 transition-colors hover:bg-border hover:text-primary-text [&.active]:text-primary-text [&.active]:after:absolute [&.active]:after:bottom-0 [&.active]:after:left-1/2 [&.active]:after:h-0.5 [&.active]:after:w-8 [&.active]:after:-translate-x-1/2 [&.active]:after:rounded-full [&.active]:after:bg-accent [&.active]:after:content-['']"
          >
            Categories
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
