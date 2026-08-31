import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SuccessState } from "./ProductStates";

function ProductForm({ mode = "add", initialData = null, onSubmit }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [supplier, setSupplier] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (mode === "edit" && initialData) {
      setName(initialData.name || "");
      setDesc(initialData.description || "");
      setCategory(initialData.category || "");
      setPrice(initialData.price || "");
      setStock(initialData.stock || "");
      setSupplier(initialData.supplier || "");
    }
  }, [mode, initialData]);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        navigate("/products");
      }, 1200);

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
    };

    if (mode === "add") {
      data.dateAdded = new Date().toLocaleDateString("en-CA");
    }

    try {
      await onSubmit(data);

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

  const isAddMode = mode === "add";
  const buttonText = isAddMode ? "Add Product" : "Update Product";
  const pageTitle = isAddMode ? "Add Product" : "Edit Product";

  return (
    <>
      {success && (
        <SuccessState
          title={isAddMode ? "Product Added!" : "Product Updated!"}
          message={
            isAddMode
              ? "Your product was successfully added."
              : "Your product was successfully updated."
          }
        />
      )}

      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-2xl rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-border sm:p-8"
      >
        <div className="mb-6 flex items-center justify-between gap-4">
          <h1 className="text-3xl font-bold text-primary-text">{pageTitle}</h1>

          <Link
            to="/products"
            className="rounded-md border border-border bg-background px-4 py-2 font-medium text-primary-text transition hover:bg-border"
          >
            Cancel
          </Link>
        </div>

        <div className="space-y-5">
          <div>
            <label htmlFor="name" className="mb-2 block font-medium text-secondary-text">
              Product Name
            </label>

            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter product name"
              required
              className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-primary-text outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
            />
          </div>

          <div>
            <label htmlFor="desc" className="mb-2 block font-medium text-secondary-text">
              Description
            </label>

            <textarea
              id="desc"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Enter product description"
              required
              rows="4"
              className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-primary-text outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
            />
          </div>

          <div>
            <label htmlFor="category" className="mb-2 block font-medium text-secondary-text">
              Category
            </label>

            <input
              id="category"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter category"
              required
              className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-primary-text outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
            />
          </div>

          <div>
            <label htmlFor="price" className="mb-2 block font-medium text-secondary-text">
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
              className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-primary-text outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
            />
          </div>

          <div>
            <label htmlFor="stock" className="mb-2 block font-medium text-secondary-text">
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
              className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-primary-text outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
            />
          </div>

          <div>
            <label htmlFor="supplier" className="mb-2 block font-medium text-secondary-text">
              Supplier
            </label>

            <input
              id="supplier"
              type="text"
              value={supplier}
              onChange={(e) => setSupplier(e.target.value)}
              placeholder="Enter supplier"
              required
              className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-primary-text outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-accent px-4 py-3 font-semibold text-primary-text transition hover:bg-[#e4b521]"
          >
            {buttonText}
          </button>
        </div>
      </form>
    </>
  );
}

export default ProductForm;