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
import Navbar from "./components/Navbar";
import Layout from "./layout/Layout";
function App() {
  const { product} = useProducts();
  const [count, setCount] = useState(0);
  const [editingProduct, setEditingProduct] = useState(null)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard product={product} />} />
          <Route path="products">
            <Route index element={<Products  product={product}/>} />
            <Route path=":id" element={<ProductsDetails />} />
            <Route path="add" element={<AddProduct />} />
            <Route path=":id/edit" element={<EditProduct />} />
          </Route>
          <Route path="categories" element={<Categories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
