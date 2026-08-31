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
        setError(null);
        const data = await getSingleProduct(id);
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError(err.message || "Failed to load product");
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return <div className="py-8 text-center text-secondary-text">Loading...</div>;
  }

  if (error) {
    return <div className="py-8 text-center text-primary-text">{error}</div>;
  }

  if (!product) {
    return <div className="py-8 text-center text-primary-text">Product not found</div>;
  }

  const handleUpdate = async (formData) => {
    return updProduct(formData, id);
  };

  return <ProductForm mode="edit" initialData={product} onSubmit={handleUpdate} />;
}

export default EditProduct;