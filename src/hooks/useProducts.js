import { getProducts } from "../services/productService";
import { useEffect, useState } from "react";

const useProducts = () => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    try {
      const data = getProducts();
      setProduct(Array.isArray(data) ? data : null )
    }
    catch {
      setError(error.message || 'An error occurred while fetching products')
    }
  },[])

  return { product, error , isLoading};
}
 
export default useProducts;