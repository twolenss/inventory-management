import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import { getSingleProduct } from "../services/productService";

function EditProduct({ updProduct }) {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        setError(null);

        const data = await getSingleProduct(id);

        setProduct(data);
      } catch (err) {
        console.error("Error fetching product:", err);

        setError(err?.message || "Failed to load product");
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchProduct();
    }
  }, [id]);

  // Loading
  if (loading) {
    return <div className="py-8 text-center text-secondary-text">Loading...</div>;
  }

  // Error
  if (error) {
    return <div className="py-8 text-center text-primary-text">{error}</div>;
  }

  // Not found
  if (!product) {
    return <div className="py-8 text-center text-primary-text">Product not found</div>;
  }

  // Update handler
  const handleUpdate = async (formData) => {
    console.log("Updating product:", id);
    console.log("Form data:", formData);

    return await updProduct(formData, id);
  };

  return <ProductForm mode="edit" initialData={product} onSubmit={handleUpdate} />;
}

export default EditProduct;
