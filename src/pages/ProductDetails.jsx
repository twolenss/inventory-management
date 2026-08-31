import { useParams, Link } from "react-router-dom";
import { LoadingState, ErrorState, EmptyState } from "../components/ProductStates";
import { useEffect, useState } from "react";
import { getSingleProduct } from "../services/productService";

function ProductsDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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
    <div className="mx-auto max-w-2xl rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-border sm:p-8">
      <h1 className="mb-6 text-3xl font-bold text-primary-text">{product.name}</h1>

      <div className="space-y-4 text-secondary-text">
        <p>
          <strong className="font-semibold text-primary-text">Description:</strong>{" "}
          {product.description}
        </p>

        <p>
          <strong className="font-semibold text-primary-text">Category:</strong>{" "}
          {product.category}
        </p>

        <p>
          <strong className="font-semibold text-primary-text">Price:</strong>{" "}
          ₱{product.price}
        </p>

        <p>
          <strong className="font-semibold text-primary-text">Stock:</strong>{" "}
          {product.stock}
        </p>

        <p>
          <strong className="font-semibold text-primary-text">Supplier:</strong>{" "}
          {product.supplier}
        </p>

        <p>
          <strong className="font-semibold text-primary-text">Date Added:</strong>{" "}
          {product.dateAdded}
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          to="/products"
          className="rounded-lg border border-border bg-background px-4 py-2 text-primary-text transition hover:bg-border"
        >
          Back to Products
        </Link>

        <Link
          to={`/products/${product.id}/edit`}
          className="rounded-lg bg-accent px-4 py-2 text-primary-text transition hover:bg-[#e4b521]"
        >
          Edit Product
        </Link>
      </div>
    </div>
  );
}

export default ProductsDetails;