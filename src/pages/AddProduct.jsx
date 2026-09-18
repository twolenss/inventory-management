import ProductForm from "../components/ProductForm";

function AddProduct({ createdProduct }) {
  const handleCreate = async (formData) => {
    return await createdProduct(formData);
  };

  return <ProductForm mode="add" onSubmit={handleCreate} />;
}

export default AddProduct;
