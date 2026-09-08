import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ArrowLeft, Package, Tag, DollarSign, Box, Truck, FileText, Save, X, CheckCircle, AlertCircle } from "lucide-react";

// --------------------------------------------------
// INPUT FIELD
// --------------------------------------------------
const InputField = ({ id, label, icon: Icon, type = "text", value, onChange, placeholder, error, ...props }) => (
  <div className="space-y-2">
    <label htmlFor={id} className="flex items-center gap-2 text-sm font-medium text-secondary-text">
      <Icon className="h-4 w-4" />
      {label}
    </label>

    {type === "textarea" ? (
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-xl border ${
          error ? "border-red-300" : "border-border"
        } bg-background px-4 py-3 text-primary-text outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20`}
        rows="4"
        {...props}
      />
    ) : (
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-xl border ${
          error ? "border-red-300" : "border-border"
        } bg-background px-4 py-3 text-primary-text outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20`}
        {...props}
      />
    )}

    {error && (
      <p className="flex items-center gap-1 text-sm text-red-500">
        <AlertCircle className="h-3 w-3" />
        {error}
      </p>
    )}
  </div>
);

// --------------------------------------------------
// PRODUCT FORM
// --------------------------------------------------
function ProductForm({ mode = "add", initialData = null, onSubmit }) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [supplier, setSupplier] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  // --------------------------------------------------
  // LOAD EDIT DATA
  // --------------------------------------------------
  useEffect(() => {
    if (mode === "edit" && initialData) {
      setName(initialData.name || "");
      setDesc(initialData.description || "");
      setCategory(initialData.category || "");
      setPrice(initialData.price ?? "");
      setStock(initialData.stock ?? "");
      setSupplier(initialData.supplier || "");
    }
  }, [mode, initialData]);

  // --------------------------------------------------
  // VALIDATION
  // --------------------------------------------------
  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Product name is required";
    }

    if (!desc.trim()) {
      newErrors.desc = "Description is required";
    }

    if (!category.trim()) {
      newErrors.category = "Category is required";
    }

    if (!price || Number(price) <= 0) {
      newErrors.price = "Price must be greater than 0";
    }

    if (stock === "" || Number(stock) < 0) {
      newErrors.stock = "Stock cannot be negative";
    }

    if (!supplier.trim()) {
      newErrors.supplier = "Supplier is required";
    }

    return newErrors;
  };

  // --------------------------------------------------
  // CHECK IF FORM HAS DATA
  // --------------------------------------------------
  const hasFormInput = () => {
    return name.trim() || desc.trim() || category.trim() || String(price).trim() || String(stock).trim() || supplier.trim();
  };

  // --------------------------------------------------
  // CANCEL
  // --------------------------------------------------
  const handleCancel = () => {
    if (hasFormInput()) {
      Swal.fire({
        title: "Discard changes?",
        text: "You have unsaved changes. Are you sure you want to leave?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#6c757d",
        confirmButtonText: "Yes, discard",
        cancelButtonText: "No, stay",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/products");
        }
      });
    } else {
      navigate("/products");
    }
  };

  // --------------------------------------------------
  // SUBMIT
  // --------------------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Make sure onSubmit exists
    if (typeof onSubmit !== "function") {
      console.error("ProductForm: onSubmit is not a function.");

      setIsSubmitting(false);

      await Swal.fire({
        title: "Error!",
        text: "Unable to save product. Submit function is missing.",
        icon: "error",
        confirmButtonColor: "#d33",
      });

      return;
    }

    // --------------------------------------------------
    // PREPARE DATA
    // --------------------------------------------------
    const data = {
      name: name.trim(),
      description: desc.trim(),
      category: category.trim(),
      price: Number(price),
      stock: Number(stock),
      supplier: supplier.trim(),
    };

    // Only add date when creating
    if (mode === "add") {
      data.dateAdded = new Date().toLocaleDateString("en-CA");
    }

    console.log("Submitting:", data);

    try {
      // ------------------------------------------------
      // SAVE TO API / STATE
      // ------------------------------------------------
      const result = await onSubmit(data);

      console.log("Save successful:", result);

      // ------------------------------------------------
      // STOP LOADING
      // ------------------------------------------------
      setIsSubmitting(false);

      // ------------------------------------------------
      // NAVIGATE TO PRODUCTS
      // ------------------------------------------------
      navigate("/products", {
        replace: true,
      });

      // ------------------------------------------------
      // SUCCESS MESSAGE
      // ------------------------------------------------
      Swal.fire({
        title: "Success!",
        text: mode === "add" ? "Product added successfully." : "Product updated successfully.",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error("Save failed:", error);

      setIsSubmitting(false);

      Swal.fire({
        title: "Error!",
        text: error?.message || "Failed to save product. Please try again.",
        icon: "error",
        confirmButtonColor: "#d33",
        confirmButtonText: "OK",
      });
    }
  };

  const isAddMode = mode === "add";

  const pageTitle = isAddMode ? "Add Product" : "Edit Product";

  const buttonText = isAddMode ? "Add Product" : "Update Product";

  // --------------------------------------------------
  // UI
  // --------------------------------------------------
  return (
    <div className="mx-auto max-w-2xl">
      {/* HEADER */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={handleCancel}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-secondary-text transition hover:bg-border"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Inventory
          </button>

          <div>
            <h1 className="text-2xl font-bold text-primary-text">{pageTitle}</h1>

            <p className="text-sm text-secondary-text">{isAddMode ? "Fill in the details to add a new product" : "Update the product information"}</p>
          </div>
        </div>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="rounded-2xl bg-surface p-6 shadow-lg ring-1 ring-border/50 sm:p-8">
        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* PRODUCT NAME */}
          <InputField
            id="name"
            label="Product Name"
            icon={Package}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., Premium Wireless Headphones"
            error={errors.name}
            required
          />

          {/* CATEGORY */}
          <InputField
            id="category"
            label="Category"
            icon={Tag}
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="e.g., Electronics, Furniture"
            error={errors.category}
            required
          />

          {/* PRICE */}
          <InputField
            id="price"
            label="Price"
            icon={DollarSign}
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="0.00"
            min="0"
            step="0.01"
            error={errors.price}
            required
          />

          {/* STOCK */}
          <InputField
            id="stock"
            label="Stock Quantity"
            icon={Box}
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            placeholder="Enter quantity"
            min="0"
            error={errors.stock}
            required
          />

          {/* SUPPLIER */}
          <InputField
            id="supplier"
            label="Supplier"
            icon={Truck}
            type="text"
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
            placeholder="Supplier name"
            error={errors.supplier}
            required
          />
        </div>

        {/* DESCRIPTION */}
        <InputField
          id="desc"
          label="Description"
          icon={FileText}
          type="textarea"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Describe the product features, specifications, and other details..."
          error={errors.desc}
          required
        />

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
          {/* CANCEL */}
          <button
            type="button"
            onClick={handleCancel}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 font-medium text-secondary-text transition hover:bg-border sm:order-2"
          >
            <X className="h-4 w-4" />
            Cancel
          </button>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent to-[#e4b521] px-6 py-3 font-medium text-primary-text transition-all hover:scale-[1.02] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-primary-text border-t-transparent" />
                Processing...
              </>
            ) : (
              <>
                <Save className="h-4 w-4" />
                {buttonText}
              </>
            )}
          </button>
        </div>
      </form>


    
    </div>
  );
}

export default ProductForm;
