import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SuccessState } from "../components/ProductStates";

function AddProduct({ createdProduct }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [supplier, setSupplier] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
 useEffect(() => {
  if (success) {
    console.log("Redirect timer started");

    const timer = setTimeout(() => {
      console.log("Navigating now");
      navigate("/products");
    }, 1500);

    return () => clearTimeout(timer);
  }
}, [success, navigate]);


  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      name,
      description: desc,
      category,
      price: Number(price),
      stock: Number(stock),
      supplier,
      dateAdded: new Date().toLocaleDateString("en-CA"),
    };

    try {
      await createdProduct(data);

      setName("");
      setDesc("");
      setCategory("");
      setPrice("");
      setStock("");
      setSupplier("");

      setSuccess(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-[#2c3e50]">Add Product</h1>

        <Link to="/products" className="rounded-md bg-gray-500 px-4 py-2 font-medium text-white transition hover:bg-gray-600">
          Cancel
        </Link>
      </div>

      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="mb-2 block font-medium text-gray-700">
            Product Name
          </label>

          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter product name"
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none transition focus:border-[#3498db] focus:ring-2 focus:ring-[#3498db]/20"
          />
        </div>

        <div>
          <label htmlFor="desc" className="mb-2 block font-medium text-gray-700">
            Description
          </label>

          <textarea
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Enter product description"
            required
            rows="4"
            className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none transition focus:border-[#3498db] focus:ring-2 focus:ring-[#3498db]/20"
          />
        </div>

        <div>
          <label htmlFor="category" className="mb-2 block font-medium text-gray-700">
            Category
          </label>

          <input
            id="category"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter category"
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none transition focus:border-[#3498db] focus:ring-2 focus:ring-[#3498db]/20"
          />
        </div>

        <div>
          <label htmlFor="price" className="mb-2 block font-medium text-gray-700">
            Price
          </label>

          <input
            id="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
            min="0"
            step="0.01"
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none transition focus:border-[#3498db] focus:ring-2 focus:ring-[#3498db]/20"
          />
        </div>

        <div>
          <label htmlFor="stock" className="mb-2 block font-medium text-gray-700">
            Stock
          </label>

          <input
            id="stock"
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            placeholder="Enter stock quantity"
            min="0"
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none transition focus:border-[#3498db] focus:ring-2 focus:ring-[#3498db]/20"
          />
        </div>

        <div>
          <label htmlFor="supplier" className="mb-2 block font-medium text-gray-700">
            Supplier
          </label>

          <input
            id="supplier"
            type="text"
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
            placeholder="Enter supplier"
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none transition focus:border-[#3498db] focus:ring-2 focus:ring-[#3498db]/20"
          />
        </div>

        <button type="submit" className="w-full rounded-md bg-[#3498db] px-4 py-3 font-semibold text-white transition hover:bg-[#2980b9]">
          Add Product
        </button>
      </div>
    </form>
  );
}

export default AddProduct;
