import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import ProductsDetails from "./pages/ProductDetails";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import useProducts from "./hooks/useProducts";
import Layout from "./layout/Layout";
function App() {
  const { product , error, isLoading, updProduct, createdProduct, deletedProduct} = useProducts();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard product={product} />} />
          <Route path="products">
            <Route index element={<Products product={product} error={error} isLoading={isLoading} deletedProduct={deletedProduct}/>} />
            <Route path=":id" element={<ProductsDetails />} />
            <Route path="add" element={<AddProduct createdProduct={createdProduct} />} />
            <Route path=":id/edit" element={<EditProduct updProduct={updProduct} />} />
          </Route>
          <Route path="categories" element={<Categories product={product}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
