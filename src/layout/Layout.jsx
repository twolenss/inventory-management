import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { Home, Package, Tag, ChevronRight } from "lucide-react";

function Layout() {
  const location = useLocation();
  
  // // Generate breadcrumbs based on current path
  // const getBreadcrumbs = () => {
  //   const pathSegments = location.pathname.split("/").filter(Boolean);
  //   const breadcrumbs = [{ name: "Dashboard", href: "/", icon: Home }];
    
  //   pathSegments.forEach((segment, index) => {
  //     const href = "/" + pathSegments.slice(0, index + 1).join("/");
  //     let name = segment.charAt(0).toUpperCase() + segment.slice(1);
      
  //     // Customize names for specific routes
  //     if (segment === "products") {
  //       name = "Inventory";
  //     } else if (segment === "add") {
  //       name = "Add Product";
  //     } else if (segment === "edit") {
  //       name = "Edit Product";
  //     }
      
  //     const icon = segment === "products" ? Package : segment === "categories" ? Tag : null;
  //     breadcrumbs.push({ name, href, icon, isLast: index === pathSegments.length - 1 });
  //   });
    
  //   return breadcrumbs;
  // };
  
  // const breadcrumbs = getBreadcrumbs();

 return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background via-background/95 to-background">
      <Navbar />
     {/* Breadcrumbs
      {breadcrumbs.length > 1 && (
        <div className="border-b border-border/30 bg-surface/50">
          <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 sm:px-6 lg:px-10">
            {breadcrumbs.map((crumb, index) => (
              <div key={crumb.href} className="flex items-center gap-2">
                {index > 0 && (
                  <ChevronRight className="h-4 w-4 text-secondary-text/50" />
                )}
                <a
                  href={crumb.href}
                  className={`flex items-center gap-1.5 text-sm transition-colors ${
                    crumb.isLast
                      ? "font-medium text-primary-text"
                      : "text-secondary-text hover:text-primary-text"
                  }`}
                >
                  {crumb.icon && <crumb.icon className="h-3.5 w-3.5" />}
                  <span>{crumb.name}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      )} */}
      {/* Main Content */}
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-border/30 bg-surface/30">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            
            {/* Footer Brand */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-accent/20 to-accent/10">
                <Package className="h-6 w-6 text-accent" />
              </div>

              <div>
                <p className="font-medium text-primary-text">
                  Inventory Pro
                </p>

                <p className="text-sm text-secondary-text">
                  Management System v1.0
                </p>
              </div>
            </div>

            {/* Footer Information */}
            <div className="text-center text-sm text-secondary-text md:text-right">
              <p>
                Built with React, Tailwind CSS, and modern design principles
              </p>

              <p className="mt-1">
                © {new Date().getFullYear()} All rights reserved
              </p>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
 