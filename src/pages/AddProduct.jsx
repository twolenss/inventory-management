import ProductForm from "../components/ProductForm";

function AddProduct({ createdProduct }) {
  return <ProductForm mode="add" onSubmit={createdProduct} />;
}

export default AddProduct;
