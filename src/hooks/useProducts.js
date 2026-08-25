import { getProducts } from "../services/productService";
import { useEffect, useState } from "react";

const useProducts = () => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProduct(Array.isArray(data) ? data : null);
      } catch(err){
        setError(err.message || "An error occurred while fetching products");
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return { product, error, isLoading };
};

export default useProducts;
