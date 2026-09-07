import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Package, LayoutDashboard, Tag } from "lucide-react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Inventory", href: "/products", icon: Package },
    { name: "Categories", href: "/categories", icon: Tag },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-accent/20 to-accent/10">
            <Package className="h-6 w-6 text-accent" />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold tracking-tight text-primary-text">Inventory Pro</h1>
            <p className="text-xs text-secondary-text">Management System</p>
          </div>
          <div className="block sm:hidden">
            <h1 className="text-lg font-bold tracking-tight text-primary-text">Inventory</h1>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          <div className="flex items-center gap-1 rounded-full bg-surface/50 p-1 shadow-sm ring-1 ring-border/30">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-accent text-primary-text shadow-sm"
                        : "text-secondary-text hover:bg-border/50 hover:text-primary-text"
                    }`
                  }
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </div>

    
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="rounded-md p-2 text-secondary-text transition hover:bg-border/50 hover:text-primary-text md:hidden"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full z-50 border-b border-border/50 bg-background shadow-lg md:hidden">
          <div className="px-4 py-3">
            <div className="space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition ${
                        isActive
                          ? "bg-accent/10 text-primary-text"
                          : "text-secondary-text hover:bg-border/50 hover:text-primary-text"
                      }`
                    }
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </NavLink>
                );
              })}
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-border/50">
                  <User className="h-4 w-4 text-secondary-text" />
                </div>
                <div>
                  <p className="text-sm font-medium text-primary-text">Admin</p>
                  <p className="text-xs text-secondary-text">Inventory Manager</p>
                </div>
              </div>
              <button className="relative rounded-full p-2 text-secondary-text hover:text-primary-text">
                <Bell className="h-5 w-5" />
                <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                  3
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
