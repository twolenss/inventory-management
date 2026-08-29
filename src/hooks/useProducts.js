import { getProducts, createProduct, updateProduct, deleteProduct } from "../services/productService";
import { useEffect, useState } from "react";

const useProducts = () => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getProducts();
        setProduct(Array.isArray(data) ? data : null);
      } catch (err) {
        setError(err.message || "An error occurred while fetching products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const createdProduct = async (product) => {
    const createdProduct = await createProduct(product);
    setProduct((prevProduct) => [...prevProduct, createdProduct]);
    return createdProduct;
  };

  const updProduct = async (product, id) => {
    const updateProduct = await updateProduct(product, id);
    setProduct((prev) => prev.map((e) => (e.id === id ? updateProduct : e)));
    return updProduct;
  };

  const deletedProduct = async (id) => {
    try {
      const delProduct = await deleteProduct(id);
      setProduct((prev) => prev.filter((item) => item.id !== id));
      return delProduct;
    } catch (err) {
      setError(err.message || "Failed to delete product");
      throw err;
    }
  };
  return { product, error, isLoading, createdProduct, updProduct, deletedProduct };
};

export default useProducts;
