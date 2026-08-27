import { useParams, Link, useNavigate } from "react-router-dom";
import { LoadingState, ErrorState, EmptyState } from "../components/ProductStates";
import { useEffect, useState } from "react";
import { getSingleProduct } from "../services/productService";

function ProductsDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        const data = await getSingleProduct(id);
        setProduct(data);
        setError(null);
      } catch (err) {
        setError("Failed to load product details");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);
  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return (
      <ErrorState>
        <p>{error}</p>
        <Link to="/products">Back to Products</Link>
      </ErrorState>
    );
  }

  if (!product) {
    return <EmptyState />;
  } 
  return (
  <div className="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
  <h1 className="mb-6 text-3xl font-bold text-[#2c3e50]">
    {product.name}
  </h1>

  <div className="space-y-4 text-gray-700">
    <p>
      <strong className="font-semibold text-[#2c3e50]">Description:</strong>{" "}
      {product.description}
    </p>

    <p>
      <strong className="font-semibold text-[#2c3e50]">Category:</strong>{" "}
      {product.category}
    </p>

    <p>
      <strong className="font-semibold text-[#2c3e50]">Price:</strong>{" "}
      ₱{product.price}
    </p>

    <p>
      <strong className="font-semibold text-[#2c3e50]">Stock:</strong>{" "}
      {product.stock}
    </p>

    <p>
      <strong className="font-semibold text-[#2c3e50]">Supplier:</strong>{" "}
      {product.supplier}
    </p>

    <p>
      <strong className="font-semibold text-[#2c3e50]">Date Added:</strong>{" "}
      {product.dateAdded}
    </p>
  </div>

  <div className="mt-8 flex gap-4">
    <Link
      to="/products"
      className="rounded bg-gray-500 px-4 py-2 text-white transition hover:bg-gray-600"
    >
      Back to Products
    </Link>

    <Link
      to={`/products/${product.id}/edit`}
      className="rounded bg-[#3498db] px-4 py-2 text-white transition hover:bg-[#2980b9]"
    >
      Edit Product
    </Link>
  </div>
</div>

  );
}

export default ProductsDetails;
