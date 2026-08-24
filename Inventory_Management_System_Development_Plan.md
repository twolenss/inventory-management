# Inventory Management System — Development Plan

## 1. Project Overview

The Inventory Management System is a beginner-friendly React application for managing products and monitoring inventory.

The system will allow users to:

- View inventory products
- Add products
- Edit products
- Delete products
- View product details
- Search products
- Filter products
- Monitor stock levels
- View inventory statistics on a dashboard

The frontend will be built with React, React Router will be used for page navigation, and JSON Server will be used as the temporary backend/API.

---

# 2. Project Goal

Build a complete multi-page inventory application while practicing the React concepts already learned and gradually introducing new concepts.

The project should be developed step by step instead of building every feature at once.

---

# 3. Technology Stack

- React
- JavaScript
- React Router
- JSON Server
- HTML
- CSS
- Git/GitHub (optional but recommended)

---

# 4. Main Pages

The application will contain these pages:

1. Dashboard
2. Products
3. Product Details
4. Add Product
5. Edit Product
6. Categories

Expected routes:

```text
/
/products
/products/:id
/products/add
/products/:id/edit
/categories
```

---

# 5. Development Plan

## Phase 1 — Project Setup

### Goal

Prepare the React project and development environment.

### Steps

- [/] Create the React project
- [/] Install React Router
- [/] Install JSON Server if necessary
- [/] Create the initial project folders
- [/] Create `product.json`
- [/] Add initial product data
- [/] Start JSON Server
- [/] Verify that `/products` returns product data

### Expected result

The React project runs successfully and JSON Server is available.

---

# Phase 2 — Create the Basic Project Structure

### Goal

Organize the application before adding functionality.

### Steps

- [/] Create `components` folder
- [/] Create `pages` folder
- [/] Create `services` folder
- [/] Create `layouts` folder
- [/] Create the main page components
- [/] Create the `Layout` component
- [/] Create the `Navbar` component

Suggested structure:

```text
src/
├── components/
│   └── Navbar.jsx
│
├── layouts/
│   └── Layout.jsx
│
├── pages/
│   ├── Dashboard.jsx
│   ├── Products.jsx
│   ├── ProductDetails.jsx
│   ├── AddProduct.jsx
│   ├── EditProduct.jsx
│   └── Categories.jsx
│
├── services/
│   └── productService.js
│
├── App.jsx
└── main.jsx
```

### Expected result

The project has a clean structure and each page can be loaded independently.

---

# Phase 3 — Set Up Routing

### Goal

Create navigation between the different pages.

### Steps

- [/] Wrap the application with `BrowserRouter`
- [/] Create the main `Routes`
- [/] Create the `Layout` route
- [/] Add the Dashboard route
- [/] Add the Products route
- [/] Add the Product Details route
- [/] Add the Add Product route
- [/] Add the Edit Product route
- [/] Add the Categories route
- [/] Add `<Outlet />` to the Layout
- [/] Test every URL manually

### Expected result

The following routes work:

```text
/                       → Dashboard
/products               → Products
/products/1             → Product Details
/products/add           → Add Product
/products/1/edit        → Edit Product
/categories             → Categories
```

---

# Phase 4 — Build the Navbar

### Goal

Allow users to move between pages without manually typing URLs.

### Steps

- [ ] Add Dashboard navigation
- [ ] Add Products navigation
- [ ] Add Categories navigation
- [ ] Use `Link` or `NavLink`
- [ ] Test navigation
- [ ] Highlight the active page if using `NavLink`

### Expected result

Users can navigate through the application using the Navbar.

---

# Phase 5 — Create the Product Data Layer

### Goal

Connect the React application to JSON Server.

### Steps

- [ ] Create `productService.js`
- [ ] Create a function to get all products
- [ ] Test the GET request
- [ ] Create a function to get one product
- [ ] Test the single-product request

Initial API endpoints:

```text
GET    /products
GET    /products/:id
```

### Expected result

The frontend can retrieve product information from JSON Server.

---

# Phase 6 — Build the Products Page

### Goal

Display the inventory retrieved from the API.

### Steps

- [ ] Create a `products` state
- [ ] Create a `loading` state
- [ ] Create an `error` state
- [ ] Fetch products with `useEffect`
- [ ] Store the API response in state
- [ ] Display products using `.map()`
- [ ] Display the product name
- [ ] Display the category
- [ ] Display the price
- [ ] Display the stock

### Expected result

The `/products` page displays real data from JSON Server.

---

# Phase 7 — Create Reusable Product Components

### Goal

Break the Products page into smaller reusable components.

### Steps

- [ ] Create `ProductCard.jsx` or `ProductRow.jsx`
- [ ] Pass product information using props
- [ ] Move product display markup into the component
- [ ] Render the reusable component with `.map()`
- [ ] Add buttons for View, Edit, and Delete

### Expected result

The Products page is easier to read and individual products are handled by reusable components.

---

# Phase 8 — Add Product Details

### Goal

Allow users to view one product using a dynamic route.

### Steps

- [ ] Create the Product Details page
- [ ] Use the `:id` route parameter
- [ ] Get the product ID from the URL
- [ ] Fetch the product from the API
- [ ] Display the complete product information
- [ ] Add a link back to Products
- [ ] Handle a product that does not exist

### Expected result

A URL such as:

```text
/products/1
```

shows only product 1.

---

# Phase 9 — Add Product

### Goal

Allow users to create a new inventory product.

### Steps

- [ ] Create the Add Product form
- [ ] Create state for each form field
- [ ] Handle input changes
- [ ] Handle form submission
- [ ] Validate required fields
- [ ] Create a POST service function
- [ ] Send the new product to JSON Server
- [ ] Handle loading/submitting state
- [ ] Handle errors
- [ ] Navigate back to Products after success

### API endpoint

```text
POST /products
```

### Expected result

A user can add a product and see it appear in the inventory.

---

# Phase 10 — Edit Product

### Goal

Allow users to update an existing product.

### Steps

- [ ] Create the Edit Product page
- [ ] Get the product ID from the URL
- [ ] Fetch the existing product
- [ ] Populate the form with existing data
- [ ] Allow the user to change the fields
- [ ] Create a PATCH service function
- [ ] Send the updated product to JSON Server
- [ ] Handle loading and errors
- [ ] Navigate back after a successful update

### API endpoint

```text
PATCH /products/:id
```

### Expected result

A user can edit an existing product and see the updated information.

---

# Phase 11 — Delete Product

### Goal

Allow users to remove products from the inventory.

### Steps

- [ ] Create a DELETE service function
- [ ] Connect the Delete button to the function
- [ ] Send the DELETE request
- [ ] Update the UI after successful deletion
- [ ] Handle delete errors
- [ ] Optionally ask for confirmation before deletion

### API endpoint

```text
DELETE /products/:id
```

### Expected result

A product can be removed from the inventory.

---

# Phase 12 — Loading, Error, and Empty States

### Goal

Make the application behave properly when data is loading, unavailable, or missing.

### Steps

- [ ] Add loading state to Products
- [ ] Add loading state to Product Details
- [ ] Add loading state to forms when submitting
- [ ] Add API error messages
- [ ] Add empty inventory state
- [ ] Add no-search-results state later
- [ ] Create a Retry button
- [ ] Make Retry call the data-fetching function again

### Expected result

The application provides useful feedback instead of appearing broken.

---

# Phase 13 — Search Products

### Goal

Allow users to find products quickly.

### Steps

- [ ] Add a search input
- [ ] Create search state
- [ ] Update search state when the user types
- [ ] Filter products by name
- [ ] Display the filtered results
- [ ] Handle no matching products

### Expected result

Typing a product name filters the visible inventory.

---

# Phase 14 — Filter Products

### Goal

Allow users to filter inventory by category and stock status.

### Steps

- [ ] Add category filter
- [ ] Add stock-status filter
- [ ] Create filter state
- [ ] Filter products using `.filter()`
- [ ] Combine search and filters
- [ ] Add an option to reset filters

### Example filters

```text
All Categories
Electronics
Accessories
Furniture
Appliances
```

Stock:

```text
All
In Stock
Low Stock
Out of Stock
```

### Expected result

Users can quickly narrow down the inventory.

---

# Phase 15 — Build the Dashboard

### Goal

Create an overview of the current inventory.

### Steps

- [ ] Fetch product data for the dashboard
- [ ] Display total number of products
- [ ] Calculate low-stock products
- [ ] Calculate out-of-stock products
- [ ] Calculate total inventory value
- [ ] Display low-stock products
- [ ] Display recently added products if desired

### Example statistics

```text
Total Products: 128
Low Stock: 7
Out of Stock: 3
Inventory Value: ₱245,500
```

### Expected result

The Dashboard gives the user a quick summary of the inventory.

---

# Phase 16 — Categories Page

### Goal

Create a page that summarizes products by category.

### Steps

- [ ] Fetch product data
- [ ] Get the available categories
- [ ] Count products in each category
- [ ] Display category information
- [ ] Add links or filters if useful

### Expected result

Users can see how products are distributed across categories.

---

# Phase 17 — UI Improvements

### Goal

Improve the usability and appearance after the functionality works.

### Steps

- [ ] Improve spacing
- [ ] Improve typography
- [ ] Style buttons
- [ ] Style forms
- [ ] Style product cards/table
- [ ] Improve Navbar
- [ ] Add responsive behavior
- [ ] Make loading/error/empty states visually clear
- [ ] Check the application on different screen sizes

### Important rule

Do not spend too much time polishing the UI before the core functionality works.

---

# Phase 18 — Refactoring

### Goal

Clean up the code after the application is functional.

### Steps

- [ ] Look for repeated code
- [ ] Extract reusable components
- [ ] Move API requests into service files
- [ ] Review state management
- [ ] Review `useEffect` dependencies
- [ ] Create a custom `useProducts` hook if appropriate
- [ ] Rename unclear variables
- [ ] Remove unused code
- [ ] Check for unnecessary re-renders

### Expected result

The application is easier to maintain and understand.

---

# 6. Final Feature Checklist

## Navigation

- [ ] Dashboard route works
- [ ] Products route works
- [ ] Product Details route works
- [ ] Add Product route works
- [ ] Edit Product route works
- [ ] Categories route works
- [ ] Navbar navigation works

## Products

- [ ] View products
- [ ] View product details
- [ ] Add product
- [ ] Edit product
- [ ] Delete product
- [ ] Search products
- [ ] Filter products

## API

- [ ] GET products
- [ ] GET single product
- [ ] POST product
- [ ] PATCH product
- [ ] DELETE product

## User Experience

- [ ] Loading state
- [ ] Error state
- [ ] Retry button
- [ ] Empty state
- [ ] No search results state
- [ ] Form validation

## Dashboard

- [ ] Total products
- [ ] Low-stock count
- [ ] Out-of-stock count
- [ ] Inventory value
- [ ] Low-stock products

---

# 7. Beginner Project Management Rules

1. **Build one feature at a time.**
2. **Test each feature before moving to the next phase.**
3. **Do not add advanced features early.**
4. **Use the React concepts you already know before introducing new ones.**
5. **When something breaks, identify the problem before changing several files.**
6. **Keep API requests in service files.**
7. **Keep components focused on their own responsibilities.**
8. **Commit working milestones to Git regularly.**
9. **Do not copy entire solutions when stuck; understand the solution before using it.**
10. **Polish the UI after the core functionality works.**

---

# 8. Suggested Milestones

### Milestone 1 — Foundation

- [ ] React project runs
- [ ] JSON Server runs
- [ ] Product data exists
- [ ] Routing works
- [ ] Navbar works

### Milestone 2 — Read Products

- [ ] Products are fetched
- [ ] Products are displayed
- [ ] Product details work
- [ ] Loading and error states work

### Milestone 3 — CRUD

- [ ] Add product works
- [ ] Edit product works
- [ ] Delete product works

### Milestone 4 — Inventory Features

- [ ] Search works
- [ ] Filters work
- [ ] Dashboard statistics work
- [ ] Categories page works

### Milestone 5 — Polish

- [ ] UI improved
- [ ] Responsive layout
- [ ] Code refactored
- [ ] Final testing completed

---

# 9. Definition of Done

The Inventory Management System is considered complete when a user can:

1. Open the application.
2. Navigate between all pages.
3. View inventory products.
4. View a product's details.
5. Add a product.
6. Edit a product.
7. Delete a product.
8. Search for products.
9. Filter products.
10. View inventory statistics.
11. Receive useful loading, error, and empty-state feedback.
12. Use the application on both desktop and smaller screens.

Advanced features such as authentication, real databases, stock history, and deployment can be treated as future improvements rather than requirements for the first version.
